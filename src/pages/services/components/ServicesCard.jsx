import React from "react";
import Button from "../../../components/Button";
import Image from "../../../components/Image";

const ServicesCard = ({ reverse, cardClass, ...data }) => {
  return (
    <div
      className={`flex items-center justify-between gap-20 py-10 even:flex-row-reverse ${reverse && "flex-row-reverse"
        } ${cardClass}`}
    >
      <div className="w-2/4  even:justify-end flex">
        <Image
          src={require(`../../../assets/images/${data.image}`)}
          alt={""}
          imgClass="min-w-[300px] h-[300px] rounded-full"
        />
      </div>
      <div className="text-white">
        <h1 className="font-SulphurPoint w-1/2 border-b pb-2 text-2xl tracking-wider">
          {data.title}
        </h1>
        <div className="py-10">
          {data.content.map((content) => {
            return <p className="py-2.5 leading-7">{content.text}</p>;
          })}
        </div>
        <Button label={"Read More"} btnClass="rounded-full h-[50px] w-1/5" />
      </div>
    </div>
  );
};

export default ServicesCard;
