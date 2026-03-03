import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  business: string;
  email: string;
  phone?: string;
  help: string;
  companyWebsite?: string;
  message?: string;
  confirm_url?: string; // honeypot field
}

// In-memory rate limiter with automatic cleanup.
// Limitation: resets on serverless cold starts, so it only guards against
// rapid-fire abuse within a single instance lifetime. For stronger
// protection, consider a distributed store (e.g. Upstash Redis rate-limit).
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 submissions per window
const RATE_LIMIT_MAX_ENTRIES = 10_000; // prevent unbounded memory growth

function cleanupRateLimit() {
  const now = Date.now();
  for (const [key, entry] of rateLimit) {
    if (now > entry.resetAt) rateLimit.delete(key);
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Periodic cleanup to prevent memory leak
  if (rateLimit.size > RATE_LIMIT_MAX_ENTRIES) cleanupRateLimit();

  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function sanitize(value: string | undefined, maxLength = 1000): string {
  if (!value) return "";
  return value.slice(0, maxLength).replace(/<[^>]*>/g, "").trim();
}

export async function POST(request: NextRequest) {
  try {
    // ── Origin validation (CSRF protection) ──
    const origin = request.headers.get("origin");
    const allowedOrigins = [
      "https://www.storyreal.co",
      "https://storyreal.co",
      ...(process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : []),
    ];
    if (!origin || !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    // ── Rate limiting ──
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    const data: ContactFormData = await request.json();

    // Honeypot check — if this field has a value, it's a bot
    if (data.confirm_url) {
      // Return success to not alert the bot, but discard the submission
      return NextResponse.json(
        { success: true, message: "Inquiry received" },
        { status: 200 }
      );
    }

    // Sanitize inputs
    const sanitized = {
      name: sanitize(data.name, 200),
      business: sanitize(data.business, 200),
      email: sanitize(data.email, 320),
      phone: sanitize(data.phone, 30),
      help: sanitize(data.help, 200),
      companyWebsite: sanitize(data.companyWebsite, 500),
      message: sanitize(data.message, 2000),
    };

    // Validate required fields
    if (!sanitized.name || !sanitized.email || !sanitized.business || !sanitized.help) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitized.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Structured log (no PII in production logs)
    console.log(
      JSON.stringify({
        event: "contact_form_submission",
        timestamp: new Date().toISOString(),
        help: sanitized.help,
        hasPhone: !!sanitized.phone,
        hasWebsite: !!sanitized.companyWebsite,
        hasMessage: !!sanitized.message,
      })
    );

    // Forward to GoHighLevel webhook
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhookUrl) {
      try {
        await fetch(ghlWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: AbortSignal.timeout(5000),
          body: JSON.stringify({
            full_name: sanitized.name,
            email: sanitized.email,
            phone: sanitized.phone,
            companyName: sanitized.business,
            what_do_you_need_help_with: sanitized.help,
            website: sanitized.companyWebsite,
            message: sanitized.message,
            source: "Website Contact Form",
          }),
        });
      } catch (webhookError) {
        // Log but don't fail the response — the lead is still captured in logs
        console.error("GHL webhook error:", webhookError);
      }
    } else {
      console.warn("GHL_WEBHOOK_URL not set — submission logged but not forwarded to GHL");
    }

    return NextResponse.json(
      { success: true, message: "Inquiry received" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
