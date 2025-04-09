import React from "react";
import image1 from "../images/jenifer.png";
import image2 from "../images/joseph.png";
import image3 from "../images/monica.png";
import image4 from "../images/phoebee.png";
import image5 from "../images/joey.png";
import image6 from "../images/chandler.png";

const TeamSection = () => {
  return (
    <section className="max-w-[1150px] mx-auto  py-12 text-white">
    
      <div className="grid  grid-cols-1 sm:grid-cols-[1fr_1fr] gap-8">
        
        <div className="bg-black pt-16 rounded-xl relative flex flex-col justify-center p-6">
          
          <div className="absolute right-12 top-10 sm:top-14 lg:top-20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-600 rounded-full flex items-center justify-center text-4xl text-white opacity-20">
              ▶
            </div>
          </div>

          <h3 className="text-sm font-semibold uppercase font-sans">
            OUR TEAM
          </h3>
          <h2 className="text-4xl font-semibold font-serif mt-2">
            Meet the <span className="text-yellow-400">brains</span>
          </h2>
          <p className="mt-4 text-gray-300 font-sans">
            Contact us to communicate and ask questions
          </p>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img src={image1} alt="Jennifer Le" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-normal font-serif">Jennifer Le</h4>
              <p className="text-gray-400 font-sans">CEO/Founder</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img src={image2} alt="Joseph Amber" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-normal font-serif">Joseph Amber</h4>
              <p className="text-gray-400 font-sans">Director</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {[image3, image4, image5, image6].map((img, index) => (
          <div key={index} className="bg-gray-950 rounded-lg overflow-hidden shadow-lg">
            <img src={img} alt={`Team Member ${index}`} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-normal font-serif">
                {["Monica Sanchez", "Phoebe Buffray", "Joey Tribiany", "Chandler Russell"][index]}
              </h4>
              <p className="text-gray-400 font-sans">
                {["FX Artist", "Marketer", "Camera-man", "Editor"][index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
