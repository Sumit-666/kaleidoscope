import React from "react";
import ideaImage from "../images/haveaidea.png";
import { ArrowUpRight } from "lucide-react";

const HaveAIdea = () => {
  return (
    <div className="relative mx-auto w-full max-w-[1120px]">
      {/* Wrapper with relative positioning and fixed min height */}
      <div className="relative w-full min-h-[400px] overflow-hidden rounded-2xl">
        {/* Background Image positioned absolutely */}
        <img
          src={ideaImage}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Idea Background"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start 
                        gap-4 sm:gap-6 px-4 sm:px-6 md:px-12 text-white w-full h-full">
          <h1 className="font-serif font-normal text-[28px] sm:text-[36px] md:text-[64px] leading-[36px] sm:leading-[42px] md:leading-[68px] max-w-[90%] sm:max-w-[650px] text-center md:text-left">
            Have an idea? <br />
            <span className="text-green-600">Let’s Talk.</span>
          </h1>
          <p className="font-sans font-semibold text-[14px] sm:text-[16px] md:text-[20px] leading-[20px] sm:leading-[26px] md:leading-[32px] max-w-[90%] sm:max-w-[650px] text-center md:text-left">
            We create experiences that fuel connections between brands and the people vital to their success.
          </p>
          <button className="bg-white text-black flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-3xl font-sans text-sm sm:text-base">
            Contact Us <ArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HaveAIdea;
