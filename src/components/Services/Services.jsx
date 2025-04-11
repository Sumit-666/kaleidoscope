import React from "react";
import servicesImage from "../images/servicess.png";
import { ArrowUpRight } from "lucide-react";
import HaveAIdea from "../common/HaveAidea";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto max-w-[940px] text-center pt-14 pb-14">
        <h1 className="font-serif font-normal text-[42px] leading-[68px] sm:text-[64px]">
          We provide amazing <br />{" "}
          <span className="text-blue-500">video solutions</span>
        </h1>
      </div>
      <div className="mx-auto">
        <img src={servicesImage} alt="" />
      </div>
      <div className="flex flex-col gap-5 max-w-[1120px] mx-auto mt-7 md:flex-row">
        <div className="font-serif text-[50px] font-normal leading-[58px] max-w-[548px]">
          <h3>We help companies find their way to greatness.</h3>
        </div>
        <div className="font-sans text-[16px] font-normal leading-7 max-w-[548px]">
          <p>
            We are in the thick of the digital age, and video has become one of
            the most powerful storytelling and brand communication tools. But
            did you know that behind every captivating video lies a creative
            team skilled in the art of professional video production?
          </p>{" "}
          <br />
          <p>
            At Kaleidoscope Studio, we're at the forefront of this art. We bring
            individuals' and organizations' visions to life through
            high-quality, professional video production that shakes things up.
          </p>
          <Link to="/Portfolios">
            <button className="mt-6 bg-white text-black gap-2 font-sans items-center justify-center flex flex-row rounded-full p-4">
              View Portfolios <ArrowUpRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center p-10 md:p-20 text-center">
       
        <div className="flex flex-col justify-center mx-auto relative gap-4 md:gap-8">
          <h1 className="font-serif font-normal text-[36px] md:text-[54px] leading-[42px] md:leading-[58px]">
            We provide a wide <br />
            <span className="text-blue-400">range of services</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 max-w-[1110px] w-full text-left font-serif">
          {[
            "Commercials",
            "Multi Camera Broadcast",
            "Music Videos",
            "Corporate/Product Videos",
            "Marketing Videos",
            "Event/Wedding Videos",
          ].map((service, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-6 shadow-lg border-b border-gray-600"
            >
              <h3 className="text-[28px] leading-[34px] font-normal hover:cursor-pointer hover:text-blue-400 hover:tracking-wider">
                {service}
              </h3>
              <ArrowUpRight
                size={32}
                className="hover:text-black border border-gray-600 rounded-full hover:bg-blue-400 p-2 transition"
              />
            </div>
          ))}
        </div>
      </div>
      <HaveAIdea />
    </div>
  );
};
export default Services;
