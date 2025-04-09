import React from "react";
import "@fontsource/dm-serif-display";
import "@fontsource/inter";
import avatar from "../images/avarta users.png";
import placeholder from "../images/placeholder.png";
import icon from "../images/icon.png";
import buttonimage from "../images/Button.png";
import logo1 from "../images/logo 01.png";
import logo2 from "../images/logo 2.png";
import logo3 from "../images/logo 3.png";
import logo4 from "../images/logo 4.png";
import logo5 from "../images/logo 5.png";
import logo6 from "../images/logo 6.png";
import { ArrowUpRight } from "lucide-react";
import sbackground from "../images/Background.jpg";
import HaveAIdea from "../common/HaveAidea";
import HomeServices from "../common/HomeServices";
import Portfolio from "./portfolio";
import LetsWorkTogether from "../common/LetsWorkTogether";
import OurTeam from "../common/OurTeam";

const Homepage = () => {
  return (
    <div className="relative flex flex-col md:flex-col">
      <div className="relative flex flex-col md:flex-row justify-evenly w-auto mx-auto h-auto pt-[64px] md:gap-[40px]">
        <div className="text-center md:text-left">
          <h1 className="text-[64px] leading-[68px] font-serif mb-[10px]">
            Creative and Corporate
          </h1>
          <h1 className="text-[64px] leading-[68px] text-green-700 font-serif mb-[10px]">
            Video Production
          </h1>
        </div>

        <div className="flex flex-col mt-[10px] gap-[20px] text-center md:text-left">
          <p className="text-[16px] leading-[26px] font-sans">
            Kaleidoscope - a creative agency specializing in making <br />{" "}
            videos for strategy, marketing, and production.
          </p>

          <div className="flex flex-row gap-[10px] items-center justify-center md:justify-start">
            <img src={avatar} alt="Avatar" />
            <p className="text-[16px] leading-[26px] font-sans font-semibold">
              200+ Popular clients
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto pt-[56px]">
        <img src={placeholder} className="w-full h-auto" alt="Placeholder" />

        <img
          src={icon}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt="Icon"
        />

        <img
          src={buttonimage}
          className="hidden md:block absolute top-12 right-20 mr-10 transform translate-x-1/2 -translate-y-1/2"
          alt="Button"
        />
      </div>

      <div className="flex flex-col items-center text-center mt-8">
        <p className="font-sans leading-[26px] text-[16px]">
          More than 1 million people across 200+ companies choose Kaleidoscope
        </p>

        <div className="flex flex-wrap justify-center md:justify-between w-full md:w-[85%] mx-auto gap-6 mt-4">
          <img
            src={logo1}
            className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
            alt="Logo 1"
          />
          <img
            src={logo2}
            className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
            alt="Logo 2"
          />
          <img
            src={logo3}
            className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
            alt="Logo 3"
          />
          <img
            src={logo4}
            className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
            alt="Logo 4"
          />
          <img
            src={logo5}
            className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
            alt="Logo 5"
          />
          <img
            src={logo6}
            className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
            alt="Logo 6"
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row  max-w-[1150px] mx-auto  justify-between gap-16 ">
        <div className="flex flex-col pt-[50px] max-w-[600px] items-start text-start gap-[32px]">
          <h2 className="font-sans text-[16px] leading-4">KEY FEATURES</h2>
          <h1 className="font-serif font-normal text-[54px] leading-[56px]">
            Crafting <span className="text-violet-700">Visual Stories</span>{" "}
            That Captivate
          </h1>
          <p>
            We are in the thick of the digital age, and video has become one of
            the most powerful storytelling and brand communication tools. But
            did you know that behind every captivating video lies a creative
            team skilled in the art of professional video production?</p> 

            <p>At Kaleidoscope Studio, we're at the forefront of this art. We bring
            individuals' and organizations' visions to life through
            high-quality, professional video production that shakes things up.
          </p>

          <button className="bg-white text-black p-3 rounded-3xl flex items-center gap-2">Learn More
          <ArrowUpRight className="h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-6 pt-[50px]  text-black">
            <div className="bg-blue-400 rounded-2xl h-auto p-12"> 
                <h1 className="text-[26px] font-serif font-normal leading-[34px] ">Make Your Product Stand out With A Custom Video</h1>
                <p className="font-sans text-[16px] leading-[26px] font-normal ">Make your Product launch stand out from the rest.</p>
            </div>
            <div className="bg-green-400 rounded-2xl h-auto p-12">
                <h1 className="text-[26px] font-serif font-normal leading-[34px] ">Super-fast delivery <br />(Unlike most agencies)</h1>
                <p className="font-sans text-[16px] leading-[26px] font-normal ">No more slow agencies or freelancers. 
                We send your video within 7 to 10 days.</p>
            </div>
            <div className="bg-yellow-400 rounded-2xl h-auto p-12">
                <h1 className="text-[26px] font-serif font-normal leading-[34px] ">Turn visitors into customers. Boost your conversion rate.</h1>
                <p className="font-sans text-[16px] leading-[26px] font-normal ">Showcase features of your SaaS to potential users within seconds.</p>
            </div>
            <div className="bg-orange-600 rounded-2xl p-12">
                <h1 className="text-[26px] font-serif font-normal h-auto leading-[34px] ">Script. Voiceover. Animation. Start to finish.</h1>
                <p className="font-sans text-[16px] leading-[26px] font-normal ">We handle everything: researching, writing the script, voiceover & animation.</p>
            </div>
        </div>
      </div>
      <div className="mt-20 relative h-[320px]">
  {/* Background Image */}
  <img src={sbackground} className="w-full h-full object-cover" alt="Background" />

  {/* Text Overlay */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-full max-w-[1150px] flex flex-wrap justify-between text-center text-white px-4 md:px-0">
    
    <div className="flex flex-col items-center gap-2">
      <h1 className="font-serif font-normal text-[40px] md:text-[54px] leading-[48px] md:leading-[58px]">10+</h1>
      <p className="font-sans text-[16px] md:text-[20px] font-normal leading-[26px] md:leading-[32px]">Years of experience</p>
    </div>

    <div className="flex flex-col items-center gap-2">
      <h1 className="font-serif font-normal text-[40px] md:text-[54px] leading-[48px] md:leading-[58px]">10K+</h1>
      <p className="font-sans text-[16px] md:text-[20px] font-normal leading-[26px] md:leading-[32px]">Satisfied Customers</p>
    </div>

    <div className="flex flex-col items-center gap-2">
      <h1 className="font-serif font-normal text-[40px] md:text-[54px] leading-[48px] md:leading-[58px]">5+</h1>
      <p className="font-sans text-[16px] md:text-[20px] font-normal leading-[26px] md:leading-[32px]">Awards Won</p>
    </div>

    <div className="flex flex-col items-center gap-2">
      <h1 className="font-serif font-normal text-[40px] md:text-[54px] leading-[48px] md:leading-[58px]">200+</h1>
      <p className="font-sans text-[16px] md:text-[20px] font-normal leading-[26px] md:leading-[32px]">Completed Projects</p>
    </div>
  </div>
</div>
<HomeServices/>
<Portfolio/>
<LetsWorkTogether/>
<OurTeam/>
<HaveAIdea/>

    </div>
  );
};

export default Homepage;
