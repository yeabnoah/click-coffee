"use client";

import React from "react";
import {
  PiBarbell,
  PiBookBookmarkDuotone,
  PiCoffee,
  PiFingerprintDuotone,
  PiKeyboard,
  PiLockDuotone,
  PiMonitor,
  PiMouse,
  PiUser,
} from "react-icons/pi";

import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  return (
    <div className=" fixed top-0 w-full  ">
      <div className=" max-w-3xl bg-[#1C1C1C] mx-auto h-10 mt-3 rounded-md min-h-14 border border-neutral-800">
        <div className=" flex justify-evenly gap-x-5 mx-5 md:mx-10 items-center h-full">
          <PiFingerprintDuotone className=" text-neutral-500 text-2xl " />

          <h1
            className=" flex-grow font-semibold text-neutral-500 text-center flex justify-center items-center gap-x-2 md:text-xl group active:text-neutral-700 cursor-pointer"
            onClick={() => {
              router.push("/home");
            }}
          >
            <PiMouse className=" text-neutral-500 group-active:text-neutral-700 " />
            Click & Coffee
            <PiCoffee className=" text-neutral-500 group-active:text-neutral-700" />
          </h1>

          <PiUser
            className=" text-neutral-500 text-2xl cursor-pointer active:text-neutral-700"
            onClick={() => {
              router.push("/home/signIn");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
