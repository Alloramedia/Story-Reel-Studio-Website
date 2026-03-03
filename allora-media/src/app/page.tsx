import { Metadata } from "next";
import HomeClient from "./HomeClient";
import { ReviewSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    absolute: "Story Real Studios | Strategy-Led Video Production in Connecticut",
  },
  description:
    "Story Real Studios builds strategy-led video campaigns and content systems for purpose-led organizations — combining strategy, cinematic production, and deployment into measurable growth.",
  alternates: {
    canonical: "https://www.storyreal.co",
  },
};

const reviews = [
  {
    author: "Casey Electrical Services",
    body: "Before Allora, we were running on referrals and hoping the phone would ring. Now we have a real pipeline — we can actually see where our leads come from and plan around it. Total game changer for us.",
    rating: 5,
  },
  {
    author: "Artisan Building & Remodeling",
    body: "The content quality is on another level. Prospects see our project videos and drone footage before we even meet — they show up already sold on our craftsmanship.",
    rating: 5,
  },
  {
    author: "A1 Home Improvement",
    body: "Allora took our social media from something we ignored to our single biggest lead source. Professional, no-nonsense, and they actually track the numbers.",
    rating: 5,
  },
  {
    author: "Anthony's Abatement",
    body: "They understood our industry — abatement isn't easy to market, but Allora built content that communicates trust and professionalism.",
    rating: 5,
  },
  {
    author: "Hot Taco",
    body: "Our social media actually drives people through the door now. Allora built a system — not just pretty posts — and we can see the results in our numbers every month.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <ReviewSchema reviews={reviews} />
      <HomeClient />
    </>
  );
}
