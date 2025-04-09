import React from "react";
import { ArrowUpRight } from "lucide-react";
import serviceImage from "../images/service.png";
;
const HomeServices = () => {
  return (
    <div className="flex flex-col items-center p-10 md:p-20 text-center">
      {/* Heading Section */}
      <div className="flex flex-col justify-center mx-auto relative gap-4 md:gap-8">
        <h2 className="font-sans font-bold text-[16px] leading-[16px] uppercase">
          OUR SERVICES
        </h2>
        <h1 className="font-serif font-normal text-[36px] md:text-[54px] leading-[42px] md:leading-[58px]">
          We provide amazing <br />
          <span className="text-blue-400">video solutions</span>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-[1110px] w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-2 text-left font-serif">
          <div className="flex justify-between items-center p-6 shadow-lg border-b border-gray-600">
            <h3 className="text-[28px] leading-[34px] font-normal">Commercials</h3>
            <ArrowUpRight size={32} className="hover:text-black border border-gray-600 rounded-full hover:bg-blue-400 p-2 transition" />
          </div>
          <div className="flex justify-between items-center p-6 shadow-lg border-b border-gray-600">
            <h3 className="text-[28px] leading-[34px] font-normal">Multi Camera Broadcast</h3>
            <ArrowUpRight size={32} className="hover:text-black border border-gray-600 rounded-full hover:bg-blue-400 p-2 transition" />
          </div>
          <div className="flex justify-between items-center p-6 shadow-lg border-b border-gray-600">
            <h3 className="text-[28px] leading-[34px] font-normal">Music Videos</h3>
            <ArrowUpRight size={32} className="hover:text-black border border-gray-600 rounded-full hover:bg-blue-400 p-2 transition" />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2 text-left font-serif">
          <div className="flex justify-between items-center p-6 shadow-lg border-b border-gray-600">
            <h3 className="text-[28px] leading-[34px] font-normal">Corporate/Product Videos</h3>
            <ArrowUpRight size={32} className="hover:text-black border border-gray-600 rounded-full hover:bg-blue-400 p-2 transition" />
          </div>
          <div className="flex justify-between items-center p-6 shadow-lg border-b border-gray-600">
            <h3 className="text-[28px] leading-[34px] font-normal">Marketing Videos</h3>
            <ArrowUpRight size={32} className="hover:text-black border border-gray-600 rounded-full hover:bg-blue-400 p-2 transition" />
          </div>
          <div className="flex justify-between items-center text-white p-6  shadow-lg border-b border-gray-600">
            <h3 className="text-[28px] leading-[34px] font-normal">Event/Wedding Videos</h3>
            <ArrowUpRight size={32} className="hover:text-black border border-gray-600 rounded-full hover:bg-blue-400 p-2 transition" />
          </div>
        </div>
      </div>
      <div className="pt-[80px]">
        <img src={serviceImage} alt="" />
      </div>
    </div>
  );
};

export default HomeServices;
