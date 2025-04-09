import React from "react";
import symbol from "../images/Vector.png";

const LetsWorkTogether = () => {
  return (
    <div className="hidden md:flex bg-green-600 mt-6 mb-6 flex-row p-6 justify-between flex-nowrap items-center overflow-hidden">
      <h1 className="text-black font-serif text-[34px] font-normal">
        Let’s Work Together
      </h1>
      <img src={symbol} className="max-h-7" alt="" />
      <h1 className="text-black font-serif text-[34px] font-normal">
        Let’s Work Together
      </h1>
      <img src={symbol} className="max-h-7" alt="" />
      <h1 className="text-black font-serif text-[34px] font-normal">
        Let’s Work Together
      </h1>
    </div>
  );
};

export default LetsWorkTogether;
