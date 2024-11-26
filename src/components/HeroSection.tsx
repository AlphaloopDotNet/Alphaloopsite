import React from "react";
import { Button } from "./ui/button";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative isolate w-full py-24 lg:py-28 overflow-hidden bg-blue-50">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-20 h-80 w-80 rounded-full bg-yelloww/50 blur-[50px]" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-bluee/50 blur-[60px]" />
      </div>

      <div className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-6 space-y-14 py-16 ">
        <div className="space-y-4">
          <AnimatedGradientText>
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-yelloww via-bluee to-yelloww bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent items-center`
              )}
            >
              Innovate | Develop | Thrive
            </span>
          </AnimatedGradientText>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight ">
            Innovating Digital
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#58ace0] to-[#f19e24]">
              {" "}
              Excellence
            </span>
          </h1>
          <p className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 font">
            Empowering Your{" "}
            <span className="relative inline-block">
              Growth
              <span
                className="absolute bottom-2 left-0 w-full h-3 bg-[#58ace0]/20 -z-10 
                       transform transition-all duration-300 group-hover:h-full"
              ></span>
              <span
                className="absolute -bottom-1 left-0 w-full h-1 bg-[#58ace0] 
                       transform transition-all duration-300 hover:h-1.5"
              ></span>
            </span>
          </p>
        </div>

        <p className=" max-w-5xl text-lg sm:text-xl text-gray-700 font-medium leading-relaxed items-center">
          At AlphaloopIT, we blend technology, creativity, and strategy to
          deliver premium IT and digital solutions tailored for success.
        </p>

        <div className="flex gap-4 justify-center font-clashDisplayRedular">
          <Link href={"/services"}>
            <Button
              className="rounded-xl px-8 py-6 text-lg font-semibold text-white shadow-lg  
                 transition-all duration-300 hover:shadow-xl bg-bluee 
                 hover:bg-yelloww hover:scale-105"
            >
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
