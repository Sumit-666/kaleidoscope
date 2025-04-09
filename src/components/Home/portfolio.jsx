import React from "react";
import { ArrowUpRight, Play } from "lucide-react";
import books from "../images/Image Place Holder.png"; // Replace with actual image path
import books2 from "../images/Rectangle 8.png"; // Replace with actual image path

const Portfolio = () => {
  return (
    <section className="max-w-[1150px] mx-auto px-6 py-12 text-white">
      {/* Top Section */}
      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        {/* Left Text Section */}
        <div className="w-full md:max-w-[600px] text-start">
          <h2 className="font-sans text-[14px] md:text-[16px] leading-4 uppercase">
            PORTFOLIO
          </h2>
          <h1 className="font-serif font-normal text-[28px] sm:text-[38px] md:text-[54px] leading-tight">
            We create beautiful,{" "}
            <span className="text-orange-700">practical works</span>
          </h1>
        </div>

        {/* Button Section */}
        <div className="w-full md:w-auto flex justify-start md:justify-end">
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 h-[48px] rounded-full font-sans font-medium shadow-md">
            View All Works <ArrowUpRight />
          </button>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Portfolio Item 1 */}
        <div className="relative group">
          <img
            src={books}
            alt="Logistics Promo"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white  flex items-center gap-2 rounded-full">
            <Play size={60} className="bg-gray-500 opacity-60 border-gray-500 border p-2 rounded-full text-center" />
            <div>
              <h4 className="text-lg font-serif pr-2">Logistics Promo</h4>
              <p className="text-sm text-gray-300">Case Study</p>
            </div>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="relative group">
          <img
            src={books2}
            alt="Chanel Perfume"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white  flex items-center gap-2  rounded-full">
            <Play size={60} className="bg-gray-500 opacity-60 border-gray-500 border p-2 rounded-full text-center" />
            <div>
              <h4 className="text-lg font-serif pr-2">Chanel Promotion</h4>
              <p className="text-sm text-gray-300">Case Study</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
