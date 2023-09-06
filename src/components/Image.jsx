import React from "react";

const Image = ({ src, alt, imgClass }) => {
  return <img src={src} alt={alt} className={`${imgClass}`} />;
};

export default Image;
