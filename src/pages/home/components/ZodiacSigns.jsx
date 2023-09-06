import React from "react";

const ZodiacSigns = ({ image, name }) => {
  return (
    <div className="glass-hover-effect group relative flex w-auto cursor-pointer items-center rounded-[10px] border border-dark1 p-5 text-white backdrop-blur-[5px] transition-all duration-300 ease-linear">
      <div className="flex h-[50px] w-[50px] items-center justify-center">
        <img
          src={require(`../../../assets/images/zodiac-signs/${image}.svg`)}
          alt={`${image} sign`}
          className="h-10 w-10 transition-all delay-100 duration-200 ease-linear"
        />
      </div>
      <div className="pl-5">
        <p className="text-base">{name}</p>
        {/* <p className="mt-2 text-sm">date</p> */}
      </div>
    </div>
  );
};

export default ZodiacSigns;
