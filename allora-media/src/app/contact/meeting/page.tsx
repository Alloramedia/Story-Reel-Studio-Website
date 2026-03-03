import { Metadata } from "next";
import { MeetingClient } from "./MeetingClient";

export const metadata: Metadata = {
  title: "Schedule a Meeting — Story Real Studios",
  description:
    "Schedule a Discovery Call with Story Real Studios. Pick a time that works for you and we'll connect to discuss your video production and content goals.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MeetingPage() {
  return <MeetingClient />;
}
