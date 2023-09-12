import React, { useState } from "react";
import Logo from "./Logo";
import { routes } from "../routes/Router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed z-50 h-[80px] w-full bg-transparent backdrop-blur-md">
      <div className="layout flex flex-col h-full z-50 lg:flex-row lg:items-center lg:justify-between">
        <div className="h-[80px] flex items-center justify-between py-2 px-2.5">
          <Logo />
          <div className="block lg:hidden">
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-white" onClick={() => setOpen(!open)} />
          </div>
        </div>
        <div className={`w-full flex flex-col p-10 bg-white transition-all ease-linear duration-300 absolute lg:p-0 lg:w-auto lg:relative lg:bg-transparent lg:top-0 lg:flex-row  ${open ? "top-[80px]" : '-top-[200px]'}`}>
          {routes?.map((route) => {
            return (
              <a
                href={route?.path}
                key={route?.id}
                className="mx-2 flex flex-col rounded-full text-[rgba(0,0,0,.8)] lg:bg-gradient-to-r lg:from-[#333763] lg:to-[#44498d] lg:bg-clip-text p-1 px-4 py-2 font-semibold tracking-wider lg:text-light"
              // className={({ isActive }) =>
              //   isActive
              //     ? "mx-2 flex flex-col rounded-full bg-gradient-to-r from-[#333763] to-[#44498d] bg-clip-text p-1 px-4 py-2 font-semibold tracking-wider text-light"
              //     : "mx-2 rounded-full px-4 py-2 font-semibold tracking-wider text-light"
              // }
              >
                {route?.name.toUpperCase()}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
