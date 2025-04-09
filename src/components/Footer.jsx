import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logoicon from "../components/images/Logo icon.png";


const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-10">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1  md:grid-cols-[1.5fr_1fr_1fr] gap-16">
       
        <div>
          <div className="flex items-center gap-2">
            <div ><img src={logoicon} alt="" /></div>
            <h2 className="text-lg font-normal font-serif">Kaleidoscope</h2>
          </div>
          <p className="text-gray-400 text-sm mt-3 font-sans max-w-[400px]">
            Kaleidoscope - a creative agency specializing in making videos for
            strategy, marketing, and production.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <FontAwesomeIcon icon={faFacebookF} className="text-gray-400" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <FontAwesomeIcon icon={faTwitter} className="text-gray-400" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <FontAwesomeIcon icon={faInstagram} className="text-gray-400" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-400" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <FontAwesomeIcon icon={faYoutube} className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="font-sans">
          {[
            "Home",
            "About Us",
            "Portfolios",
            "Services",
            "Contact Us",
          ].map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-800 py-2"
            >
              <span className="text-gray-300">{link}</span>
              <ArrowUpRight className="text-gray-500 border-gray-500 border rounded-full hover:text-white hover:bg-blue-500" size={20} />
            </div>
          ))}
        </div>

        <div className="font-sans">
          {[
            "Gumroad",
            "Figma Community",
            "Coming soon...",
            "Coming soon...",
          ].map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-800 py-2"
            >
              <span className="text-gray-300">{link}</span>
              <ArrowUpRight className="text-gray-500 rounded-full border border-gray-500" size={20} />
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 mx-auto max-w-[1150px] pt-4 font-sans flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <p>© Copyright 2023 Kaleidoscope. All Rights Reserved</p>
        <div className="flex gap-4 mt-3  font-sans md:mt-0">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-300">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
