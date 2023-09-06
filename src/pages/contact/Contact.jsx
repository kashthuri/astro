import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className={`relative flex h-full items-center py-10`}>
      <div className="mx-auto h-[60vh] w-3/4 rounded-[30px] bg-[rgba(255,255,255,.8)] p-10"
        style={{
          // borderRadius: "50% 20% / 10% 40%"
        }}>
        <div className="w-[calc(100%-100px)] mx-auto p-5">
          <h1 className="text-2xl">Contact Us</h1>
          <div className="w-full flex justify-between gap-10">
            <div className="">
              <div className="mt-5 text-2xl">
                <p className="font-sulphurPoint">1/26 Parasakthi Apartment,</p>
                <p className="font-sulphurPoint">1st main road, Jai naga,</p>
                <p className="font-sulphurPoint">Arumbakkam, Chennai 106,</p>
                <div className="rounded-full w-full max-w-[350px] tracking-wider h-[50px] bg-primary p-1 flex items-center mt-10">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-primary" />
                  </div>
                  <p className="pl-2 font-sulphurPoint tracking-wider text-white text-xl pr-5">+91 7418176660</p>
                </div>
                <div className="rounded-full w-full max-w-[350px] tracking-wider h-[50px] bg-primary p-1 flex items-center mt-5">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-primary" />
                  </div>
                  <p className="pl-2 font-sulphurPoint text-white text-xl pr-5">kasthuribai.astro@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="">
              <div>
                <h1 className="text-xl">Visiting Time</h1>
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

{/* <div className="mx-auto -ml-20 w-1/3">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13072.841841528352!2d80.18505167530004!3d13.062251144267947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266b1d4ce9cf5%3A0x13abc5d29a44e147!2sWholesale%20Market%20Complex%2C%20Nerkundram%2C%20Chennai%2C%20Tamil%20Nadu%20600092!5e0!3m2!1sen!2sin!4v1693596910638!5m2!1sen!2sin"
            width="100%"
            height="400px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
        </div> */}