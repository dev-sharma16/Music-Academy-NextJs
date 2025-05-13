"use client";

import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function ContactUs(){
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center  antialiased">
          <div className="max-w-2xl mx-auto p-4 flex flex-col items-center justify-center  antialiased">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-30">
              Contact-Us
            </h1>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              We're here to help with any question about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
            </p>
            <input
              type="text"
              placeholder="hi@manuarora.in"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1.5"
            />
            <textarea
              placeholder="Leave your message here..!"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1.5"
            />
            <button className="text-neutral-200 bg-gray-700 p-2 rounded-3xl my-4 w-[8rem] text-lg" >Submit</button>
          </div>
          <BackgroundBeams />
        </div>
      );
}