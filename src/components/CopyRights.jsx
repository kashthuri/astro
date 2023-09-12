import React from "react";

const CopyRights = () => {
  const date = new Date();
  return (
    <div className="flex h-[10vh] w-full items-center justify-center text-xs sm:text-base md:text-xl text-white">
      Copyright © {date.getFullYear()} kasthuri Astro Center
      {/* · Website Designed by Mukesh */}
    </div>
  );
};

export default CopyRights;
