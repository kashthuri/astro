import React from "react";
import Logo from "./Logo";
import { routes } from "../routes/Router";

const Header = () => {
  return (
    <div className="fixed z-50 h-[80px] w-full bg-transparent backdrop-blur-md">
      <div className="layout flex h-full items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center">
          {routes?.map((route) => {
            return (
              <a
                href={route?.path}
                key={route?.id}
                className="mx-2 flex flex-col rounded-full bg-gradient-to-r from-[#333763] to-[#44498d] bg-clip-text p-1 px-4 py-2 font-semibold tracking-wider text-light"
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
