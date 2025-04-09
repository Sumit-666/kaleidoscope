import React from "react";
import "@fontsource/dm-serif-display";
import "@fontsource/inter";
import about1 from "../images/aboutup.png";
import about2 from "../images/aboutdown.png";
import HaveAIdea from "../common/HaveAidea";
import TeamSection from "../common/OurTeam";
import LetsWorkTogetherBlue from "../common/LetsWorkTogetherBlue";
import TestimonialsSection from "./testimonial";

const stats = [
  {
    number: "10+",
    title: "Years of experience",
    desc: "We believe in building relationships with our clients.",
  },
  {
    number: "5+",
    title: "Awards Won",
    desc: "We believe in building relationships with our clients.",
  },
  {
    number: "10K+",
    title: "Satisfied Customers",
    desc: "We believe in building relationships with our clients.",
  },
  {
    number: "200+",
    title: "Completed Projects",
    desc: "We believe in building relationships with our clients.",
  },
];

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto max-w-[940px] text-center pt-14 pb-14">
        <h1 className="font-serif font-normal text-[42px] leading-[68px] sm:text-[64px]">
          We invent, craft, and fuel content driven experiences that <br />{" "}
          <span className="text-yellow-400">
            achieve more for global brands.
          </span>
        </h1>
      </div>
      <div className="flex flex-col gap-10">
        <div className="mx-auto">
          <img src={about1} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row items-center mx-auto gap-6 max-w-[1150px] w-full px-4">
          <div className="w-full lg:w-1/2">
            <img src={about2} alt="" className="w-full h-auto object-contain" />
          </div>
          <div className="flex flex-col w-auto lg:max-w-[548px] gap-6">
            <div>
              <h5 className="font-serif text-[34px] font-normal leading-[38px]">
                {" "}
                Kaleidoscope
              </h5>
              <p className="font-sans mt-6 text-[14px] leading-[22px] font-normal">
                {" "}
                We invent, craft, and fuel content driven experiences that
                achieve more for global brands. Kaleidoscope provides the
                highest quality of live sound reinforcement equipment and
                rentals, audio-video, staging, and lighting. Our production and
                event staff have over 10+ years of combined experience in the
                field.{" "}
              </p>
              <br />
              <p className="font-sans text-[14px] leading-[22px] font-normal">
                We believe in building relationships with our clients. Anyone
                can provide the cool gadgets of the event industry, but people
                and expertise will never be a commodity. Kaleidoscope maintains
                an inventory of professional gear to make every show look and
                sound its very best.
              </p>
            </div>
            <div>
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <h3 className="text-[28px] leading-[34px] font-serif font-normal">
                      {stat.number.replace(/\+$/, "")}
                      <span className="text-[16px] leading-[26px] align-top">
                        +
                      </span>
                    </h3>
                    <p className="mt-2 font-semibold">{stat.title}</p>
                    <p className="text-[14px] leading-5 font-normal text-gray-500 mt-1">
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection/>
      <LetsWorkTogetherBlue/>
      <TeamSection/>
    <HaveAIdea/>
    </div>
  );
};
export default AboutUs;
