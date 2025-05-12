"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Boxes } from "./ui/background-boxes";

const testimonials = [
    {
      quote:
        "Joining this music academy completely changed my perspective. I came in just wanting to learn guitar, but left with a deep love for music theory and composition. The instructors are incredibly talented and supportive.",
      name: "Aarav Mehta",
      title: "Guitar Student",
    },
    {
      quote:
        "I never imagined I'd be confident enough to sing on stage. Thanks to the live performance training sessions, I overcame my fear and now perform regularly at local gigs!",
      name: "Riya Kapoor",
      title: "Vocal Performance Student",
    },
    {
      quote:
        "The studio access was a game changer. I learned how to mix and produce my own songs — now my tracks are streaming online!",
      name: "Kabir Sharma",
      title: "Music Production Student",
    },
    {
      quote:
        "The personalized attention I received here is unmatched. Whether it was piano or theory, the instructors were patient and passionate.",
      name: "Sana Verma",
      title: "Piano & Theory Student",
    },
    {
      quote:
        "From complete beginner to performing with a band, this academy gave me not just skills but a whole new musical journey. Highly recommended!",
      name: "Ishaan Patel",
      title: "Drums Student",
    },
  ];
  

export function InfiniteScrollCardSection() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <Boxes/>
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
