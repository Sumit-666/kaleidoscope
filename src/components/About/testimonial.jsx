import React from "react";
import user1 from "../images/User1.png";
import user2 from "../images/User.png";
import companyLogo from "../images/logo 01.png";
// import { MessageSquare } from "lucide-react";



const testimonials = [
  {
    quote:
      "I really enjoy my work and it makes me more productive, happier and more successful. The coworking place builds confidence and inspires greater performance and greater success for both employees and employers.",
    name: "Rosiena Sanberg",
    position: "Project Manager at Paladora",
    avatar: user1, 
    companyLogo: companyLogo, 
  },
  {
    quote:
      "I really enjoy my work and it makes me more productive, happier and more successful. The coworking place builds confidence and inspires greater performance and greater success for both employees and employers.",
    name: "Rosiena Sanberg",
    position: "Project Manager at Paladora",
    avatar: user2, 
    companyLogo: companyLogo, 
  },
];

const TestimonialsSection = () => {
  return (
    <div className=" py-16 px-4 mx-auto max-w-[1150px]">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="text-green-500 text-3xl mb-4">💬</div>
{/* <MessageSquare className="text-green-500 text-3xl mb-4 mx-auto" /> */}
        <h2 className="text-[34px] font-normal leading-9 font-serif ">What clients say about us</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] p-6 rounded-xl shadow-md flex flex-col justify-between"
          >
            <p className=" text-[20px] font-semibold leading-8 font-sans  mb-6">“ {t.quote} ”</p>

            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.position}</p>
              </div>
              <img
                src={t.companyLogo}
                alt="Company logo"
                className="w-auto h-auto object-contain "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
