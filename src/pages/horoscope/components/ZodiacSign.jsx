import React from "react";
import { useParams } from "react-router-dom";

const ZodiacSign = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div className="">{params?.zodiacSign}</div>
    </div>
  );
};

export default ZodiacSign;
