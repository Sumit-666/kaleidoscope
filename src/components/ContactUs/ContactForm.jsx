import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react"; // 👈 import dropdown icon

const Form = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-14">
     
      <div className="text-center max-w-[940px] pb-14">
        <h1 className="font-serif font-normal text-[54px] leading-[68px] sm:text-[64px]">
          Get In Touch
        </h1>
      </div>

      <form className="w-full max-w-[747px] space-y-6 relative">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-full bg-black border border-white px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded-full bg-black border border-white px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Dropdown container with icon */}
        <div className="relative">
          <select
            className="w-full rounded-full bg-black border border-white px-6 py-3 text-white appearance-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option>What's services are you looking for?</option>
            <option>Commercials</option>
            <option>Music Videos</option>
            <option>Event Videos</option>
            <option>Marketing</option>
          </select>

          <ChevronDown
            size={20}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
          />
        </div>

        <textarea
          placeholder="Your project description"
          rows={5}
          className="w-full rounded-xl bg-black border border-white px-6 py-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-white"
        ></textarea>

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Send message <ArrowUpRight size={18} />
        </button>
      </form>
    </div>
  );
};

export default Form;
