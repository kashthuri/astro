import { routes } from "../routes/Router";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed z-50 h-[80px] w-full bg-transparent backdrop-blur-md">
      <div className="layout flex h-full items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center">
          {routes?.map((route) => {
            return route?.subMenu ? (
              <div
                className={`group relative w-40 bg-white text-center`}
                key={route?.id}
              >
                <div className="absolute left-0 top-0 mx-2 flex h-10 w-full items-center justify-center rounded-full p-1 px-4 py-2 font-semibold tracking-wider text-primary group-hover:bg-gradient-to-r group-hover:from-[#333763] group-hover:to-[#44498d] group-hover:text-light">
                  {route?.name?.toUpperCase()}
                </div>
                <div
                  className={`absolute left-0 top-0 hidden w-full text-center group-hover:flex group-hover:pt-5`}
                >
                  <div className="mx-2 h-auto w-full translate-x-[10px] pt-10">
                    <div className="rounded-[10px] border p-[10px]">
                      {route?.subMenu?.map((menu) => (
                        <p key={menu?.id}>{menu?.name?.toUpperCase()}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={route?.id}
                to={route?.path}
                className={({ isActive }) =>
                  isActive
                    ? "mx-2 flex flex-col rounded-full bg-gradient-to-r from-[#333763] to-[#44498d] bg-clip-text p-1 px-4 py-2 font-semibold tracking-wider text-light"
                    : "mx-2 rounded-full px-4 py-2 font-semibold tracking-wider text-light"
                }
              >
                {route?.name.toUpperCase()}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
