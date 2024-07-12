import Image from "next/image";
import Link from "next/link";
import { PiCoffee, PiGithubLogo, PiHouseLight, PiMouse } from "react-icons/pi";

export default function Home() {
  return (
    <div className=" flex justify-center items-center w-screen">
      <div className=" fixed bottom-24">
        <h1 className=" flex justify-center gap-x-2 items-center font-bold md:text-6xl text-4xl text-center mt-9 btn-shine">
          <PiMouse className=" text-neutral-700 text-sm" />
          Click & Coffee
          <PiCoffee className=" text-neutral-700 text-sm" />
        </h1>

        <p className=" text-sm md:text-base text-neutral-500 mb-3 text-center md:max-w-2xl max-w-xl mx-2  lg:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className=" fixed bottom-7">
        <div className=" flex gap-5 p-2 gap-x-5 border border-neutral-500 rounded-lg py-2">
          <Link href={"/home"}>
            <span>
              <PiHouseLight className=" text-neutral-500 text-2xl hover:scale-125" />
            </span>
          </Link>

          <PiGithubLogo className=" text-neutral-500 text-2xl hover:scale-125" />
        </div>
      </div>
    </div>
  );
}
