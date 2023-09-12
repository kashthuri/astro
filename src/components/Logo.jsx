import React from "react";
import logo from "../assets/logo.jpeg";

const Logo = () => {
  return (
    <div className="flex h-full w-full items-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-light ">
        <img src={logo} alt="" className="" />
      </div>
      <div className="pl-2 font-against tracking-wider text-light flex flex-col max-[499px]:hidden">
        <p>KASTHURI</p> <br className="hidden max-[499px]:flex max-[499px]:flex-col" /> <p>ASTROLOGY CENTER</p>
      </div>
    </div>
  );
};

export default Logo;
