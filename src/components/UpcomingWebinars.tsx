"use client";

import Link from "next/link";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
    {
      title: "Guitar Mastery",
      description:
        "An intensive course designed to take you from beginner to pro in acoustic and electric guitar techniques.",
      link: "/courses/guitar-mastery",
    },
    {
      title: "Vocal Training",
      description:
        "Enhance your vocal range, tone, and control with personalized training from professional singers.",
      link: "/courses/vocal-training",
    },
    {
      title: "Piano Essentials",
      description:
        "Learn the fundamentals of piano playing, from reading sheet music to performing classical pieces.",
      link: "/courses/piano-essentials",
    },
    {
      title: "Music Production",
      description:
        "Dive into digital audio workstations, beat making, mixing, and mastering in this modern music production course.",
      link: "/courses/music-production",
    },
    {
      title: "Drumming Techniques",
      description:
        "Master rhythm, timing, and coordination with our expert-led drumming sessions.",
      link: "/courses/drumming-techniques",
    },
    {
      title: "Violin for Beginners",
      description:
        "A beginner-friendly violin course focused on posture, bowing, fingering, and reading music.",
      link: "/courses/violin-beginners",
    },
  ];
  

export default function UpcomingWebniars(){
    return(
        <div className="p-12 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
               <div className="text-center">
                  <h2 className="text-base font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">FEATURED WEBNIARS</h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 sm:text-4xl">Enhance Your Musical Journey</p>
               </div>
               <div className="mt-10">
               <div className="max-w-5xl mx-auto px-8">
                  <HoverEffect items={projects} />
               </div>
               </div>
               <div className="mt-10 text-center">
                  <Link href={"/courses"}>
                      <Button
                        borderRadius="1.75rem"className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                      >
                        View all Webinars
                      </Button>
                  </Link>
            </div>
            </div>
        </div>
    )
}