import { Metadata } from "next";
import { ThankYouClient } from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You for Contacting Us — Story Real Studios",
  description:
    "Thank you for your inquiry! Our team will respond promptly. In the meantime, you can schedule a discovery call.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
