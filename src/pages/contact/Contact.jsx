import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className={`relative flex h-full items-center py-10`}>
      <div className="mx-auto h-auto w-full lg:w-3/4 md:rounded-[30px] rounded-lg bg-[rgba(255,255,255,.8)] p-2 md:p-5"
        style={{
          // borderRadius: "50% 20% / 10% 40%"
        }}>
        <div className="w-auto mx-auto md:p-5 py-5">
          <h1 className="text-2xl">Contact Us</h1>
          <div className="w-full flex flex-col justify-between gap-10 sm:flex-row m-auto">
            <div className="w-full max-w-[350px] m-auto">
              <div className="mt-5 text-lg md:text-xl lg:text-2xl">
                <p className="font-sulphurPoint">1/26 Parasakthi Apartment,</p>
                <p className="font-sulphurPoint">1st main road, Jai naga,</p>
                <p className="font-sulphurPoint">Arumbakkam, Chennai 106,</p>
                <div className="rounded-full w-full max-w-[350px] tracking-wider h-[50px] bg-primary p-1 flex items-center mt-5 md:mt-10">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="w-10 h-5 text-primary" />
                  </div>
                  <p className="pl-2 font-sulphurPoint tracking-wider text-white text-base lg:text-xl pr-5">+91 7418176660</p>
                </div>
                <div className="rounded-full w-full max-w-[350px] tracking-wider h-[50px] bg-primary p-1 flex items-center mt-5">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="w-10 h-5 text-primary" />
                  </div>
                  <p className="pl-2 font-sulphurPoint text-white text-base lg:text-xl pr-5">kasthuribai.astro@gmail.com</p>
                </div>
              </div>
            </div>
            <h1 className="text-xl block sm:hidden">Visiting Time</h1>
            <div className="w-full max-w-[350px] m-auto">
              <div>
                <h1 className="text-xl hidden sm:block">Visiting Time</h1>
                <div className="mt-5 flex items-center gap-5">
                  <div>
                    <FontAwesomeIcon icon={faClock} className="w-10 h-10" />
                  </div>
                  <div className="">
                    <div>
                      <p className="font-branch font-bold text-lg leading-5">MONDAY - FRIDAY</p>
                      <p className="font-sulphurPoint">07.00 pm to 10.00 pm</p>
                    </div>
                    <div>
                      <p className="font-branch font-bold text-lg leading-5 mt-3">SATURDAY &  SUNDAY</p>
                      <p className="font-sulphurPoint">09.00 am to 05.00 pm</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex items-center gap-5">
                  <div>
                    <FontAwesomeIcon icon={faGooglePay} className="w-10 h-10" />
                  </div>
                  <div className="h-8 font-branch tracking-wider text-lg font-bold">9840226143</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

