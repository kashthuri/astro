import React from "react";
import Button from "../../../components/Button";
import Image from "../../../components/Image";

const ServicesCard = ({ reverse, cardClass, ...data }) => {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-20 px-0 py-10 md:flex-row ${reverse && "flex-row-reverse"
        } ${cardClass}`}
    >
      <div className="w-full md:even:justify-end justify-center flex md:w-2/4">
        <Image
          src={require(`../../../assets/images/${data.image}`)}
          alt={""}
          imgClass="w-[200px] h-[200px] rounded-full sm:min-w-[300px] sm:h-[300px]"
        />
      </div>
      <div className="text-white xl:pl-10 lg:pl-5">
        <h1 className="font-SulphurPoint w-full md:border-b pb-2 text-lg tracking-wider md:w-1/2 md:text-xl">
          {data.title}
        </h1>
        <div className="md:py-10 py-5">
          {data.content.map((content) => {
            return <p className="py-2.5 leading-7 text-xs">{content.text}</p>;
          })}
        </div>
        <Button label={"Read More"} btnClass="rounded-full h-[50px] w-1/5" />
      </div>
    </div>
  );
};

export default ServicesCard;
