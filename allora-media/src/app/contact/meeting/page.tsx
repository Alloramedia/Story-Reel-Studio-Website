import { Metadata } from "next";
import { MeetingClient } from "./MeetingClient";

export const metadata: Metadata = {
  title: "Schedule a Meeting — Allora Media",
  description:
    "Schedule a Discovery Call with Allora Media. Pick a time that works for you and we'll connect to discuss your marketing goals.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MeetingPage() {
  return <MeetingClient />;
}
