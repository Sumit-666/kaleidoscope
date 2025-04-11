import React from "react";
import contact from "../images/contact.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaVimeoV } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Form from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto max-w-[940px] text-center pt-14 pb-14">
        <h1 className="font-serif font-normal text-[42px] leading-[68px] sm:text-[64px]">
          Kaleidoscope! <br />{" "}
          <span className="text-green-500">Let’s work together!</span>
        </h1>
      </div>
      <div className="flex flex-col mx-auto max-w-[1150px] gap-16 md:flex-row">
        <div className="max-w-[739px]">
          <img src={contact} alt="" />
        </div>
        <div className="flex flex-col gap-[40px] pt-3 pb-3 ml-5 md:ml-0">
          <div>
            <h1 className="font-serif font-normal text-[34px] leading-9">
              Information
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-sans font-bold text-[16px] leading-4 text-gray-700">
              ADDRESS
            </h2>
            <p>
              6455 East Johns Crossing Suite <br />
              <span>175 Johns Creek, </span> <br />
              <span>GA 30097 United States.</span>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-sans font-bold text-[16px] leading-4 text-gray-700">
              CALL US
            </h2>
            <p>
              +11 2345 657823 <br /> <span>+11 4523 234591</span>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-sans font-bold text-[16px] leading-4 text-gray-700">
              FOLLOW US
            </h2>
            <div className="flex flex-row gap-3 md:gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  size={30}
                  className="text-black hover:text-blue-600  bg-white rounded-full p-1 transition"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  size={30}
                  className="text-black hover:text-blue-400 bg-white rounded-full p-1 transition"
                />
              </a>
              <a href="mailto:info@kaleidoscope.com">
                <MdEmail
                  size={30}
                  className="text-black hover:text-green-500  bg-white rounded-full p-1 transition"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube
                  size={30}
                  className="text-black hover:text-red-600  bg-white rounded-full p-1 transition"
                />
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaVimeoV
                  size={30}
                  className="text-black hover:text-blue-500  bg-white rounded-full p-1 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Form/>
    </div>
  );
};
export default ContactUs;
