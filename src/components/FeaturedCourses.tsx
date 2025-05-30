"use client";

import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course{
    id: number,
    title: String,
    slug: String,
    description: String,
    price: number,
    instructor: String,
    isFeatured: boolean,
    // TODO: add image in feature section
    // image: "/courses/guitar.jpg" 
}

export default function FeaturedCourses(){
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
    return(
        <div className="py-12 bg-black">
            <div>
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 sm:text-4xl">Learn with the Best</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course:Course)=>(
                        <div key={course.id} className="flex justify-center">
                          <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">  
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                      <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                      <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                      <Link href={`/courses/${course.slug}`} className="pt-2.5 hover:underline">
                                          Learn More
                                      </Link>
                                </div>
                          </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}>
                    <Button
                      borderRadius="1.75rem"className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                      View all Courses
                    </Button>
                </Link>
            </div>
        </div>
    )
}