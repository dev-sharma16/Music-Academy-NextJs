"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
      title: "Personalized Music Lessons",
      description:
        "Unlock your musical potential with one-on-one lessons tailored to your skill level and goals. Whether you're a beginner or an advanced player, our instructors provide focused guidance in vocals, guitar, piano, drums, and more.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--fuchsia-500))] text-white">
          Personalized Music Lessons
        </div>
      ),
    },
    {
      title: "Live Performance Training",
      description:
        "Build confidence and stage presence with our live performance workshops. Learn how to engage an audience, handle stage equipment, and perform solo or with a band. Perfect for aspiring musicians who dream of the spotlight.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/stage-performance.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="live performance demo"
          />
        </div>
      ),
    },
    {
      title: "Music Theory & Composition",
      description:
        "Master the language of music with comprehensive lessons in music theory, notation, and composition. Ideal for those who want to understand the science behind melodies, chords, and rhythm while composing their own music.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-500),var(--lime-500))] text-white">
          Music Theory & Composition
        </div>
      ),
    },
    {
      title: "State-of-the-Art Studio Access",
      description:
        "Practice and record like a pro with access to our fully-equipped recording studios. Students can learn sound mixing, editing, and music production using the latest tools in a real-world environment.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--sky-500))] text-white">
          Studio Access
        </div>
      ),
    },
  ];
  

export default function WhyChooseUs(){
    return(
        <div>
            <StickyScroll content={content}/>
        </div>
    )
}