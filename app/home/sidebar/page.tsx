"use client";

import React from "react";
import {
  PiCoffee,
  PiHouse,
  PiMessengerLogo,
  PiMoneyWavy,
} from "react-icons/pi";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className=" md:shadow-neutral-800 shadow-lg flex flex-row h-fit right-[10vw] py-3 bottom-[3vh]  bg-[#1C1C1C] border-neutral-800 border justify-evenly items-center fixed basis-10 w-[80vw] md:w-[22vw] md:right-[39vw]">
      <PiHouse
        onClick={() => {
          router.push("/home");
        }}
        className="text-neutral-500  cursor-pointer active:text-neutral-800 md:hover:-translate-y-1 md:transition-all active:scale-125 text-2xl"
      />
      <PiMoneyWavy className="text-neutral-500  cursor-pointer active:text-neutral-800 md:hover:-translate-y-1 md:transition-all active:scale-125 text-2xl" />
      <PiCoffee className="text-neutral-500  cursor-pointer active:text-neutral-800 md:hover:-translate-y-1 md:transition-all active:scale-125 text-2xl" />
      <PiMessengerLogo className="text-neutral-500  cursor-pointer active:text-neutral-800 md:hover:-translate-y-1 md:transition-all active:scale-125 text-2xl" />
    </div>
  );
};

export default SideBar;
