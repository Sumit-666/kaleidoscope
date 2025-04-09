import React from "react";
import "@fontsource/dm-serif-display";
import "@fontsource/inter";
import HaveAIdea from "../common/HaveAidea";
import pf from "../images/Image Place Holder.png";
import pf0 from "../images/Rectangle 8.png";
import pf1 from "../images/pf1.png";
import pf2 from "../images/pf2r.png";
import pf3 from "../images/pf3.png";
import { Play } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    image: pf,
    label: "Logistic Promo",
    subtitle: "Play Video",
  },
  {
    id: 2,
    image: pf0,
    label: "Chanel Promotion",
    subtitle: "Play Video",
  },
  {
    id: 3,
    image: pf1,
    label: "Pizza Company",
    subtitle: "Play Video",
  },
  {
    id: 4,
    image: pf2,
    label: "Nutella Recipe",
    subtitle: "Play Video",
  },
  {
    id: 5,
    image: pf3,
    label: "Hublot Watch",
    subtitle: "Play Video",
  },
];

const Portfolios = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto max-w-[940px] text-center pt-14 pb-14">
        <h1 className="font-serif font-normal text-[42px] leading-[68px] sm:text-[64px]">
          We create beautiful, <br />{" "}
          <span className="text-orange-600">practical works</span>
        </h1>
      </div>
      <div className=" mx-auto py-10 space-y-6">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-2xl shadow-md group hover:opacity-75"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white flex items-center gap-4 rounded-full  backdrop-blur-sm  transform transition-all duration-300 group-hover:scale-110 group-hover:tracking-wider">
              <Play
                size={44}
                className="bg-gray-500 bg-opacity-60 border border-gray-500 p-2 text-center rounded-full text-white transition-all duration-300"
              />
              <div className="pr-2">
                <h4 className="text-base font-sans">{item.label}</h4>
                <p className="text-sm text-gray-300 font-sans">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
          
        ))}
        <div className="mx-auto border flex justify-center border-gray-700 items-center hover:text-black hover:bg-white rounded-full p-4">
        <button className="font-sans text-center font-medium text-[16px] leading-6 ">Load More Works</button>
      </div>
      </div>
      
      <HaveAIdea />
    </div>
  );
};
export default Portfolios;
