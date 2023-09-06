import React from "react";

const Button = ({ label, type, onClick, icon, btnClass }) => {
  return (
    <div
      className={`smooth font-Branch group flex w-1/3 min-w-[200px] cursor-pointer items-center justify-center border py-2 font-medium tracking-wider text-white  backdrop-blur-[5px] hover:shadow-[0_1px_30px_5px_rgba(255,255,255,0.1)] ${btnClass} ${
        type === "primary" && ""
      }`}
      onClick={onClick}
    >
      <p>{label}</p>
      {icon && (
        <span className="smooth pl-1.5 group-hover:translate-x-3">→</span>
      )}
    </div>
  );
};

export default Button;
