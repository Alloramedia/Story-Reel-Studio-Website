import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080808]" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          {/* Pulse ring */}
          <div className="absolute inset-0 animate-ping rounded-full bg-[#68ccd1]/10" />
          <div className="relative animate-pulse">
            <Image
              src="/images/allora-logo-circle.png"
              alt="Loading"
              width={64}
              height={64}
              className="h-16 w-16"
              priority
            />
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#68ccd1]" style={{ animationDelay: "0ms" }} />
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#68ccd1]" style={{ animationDelay: "150ms" }} />
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#68ccd1]" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
