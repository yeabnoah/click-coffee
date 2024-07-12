import React from "react";
import { PiCoffee, PiMouse, PiOfficeChair, PiPlus } from "react-icons/pi";

const Footer = () => {
  return (
    <div className=" fixed bottom-10 w-full ">
      <div className=" max-w-3xl mx-auto ">
        <div className=" flex justify-evenly gap-x-5 mx-5 md:mx-10 items-center h-full">
          {/* <PiFingerprintDuotone className=" text-neutral-500 text-2xl" /> */}

          <div className=" bg-[#1C1C1C] border border-neutral-800">
            <PiPlus className=" text-4xl text-neutral-500" />
          </div>
          {/* <PiUser className=" text-neutral-500 text-2xl" /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
