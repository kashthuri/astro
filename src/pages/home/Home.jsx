import { Link } from "react-router-dom";
import zodiacSigns from "../../assets/images/zodiac.svg";
import Contact from "../contact/Contact";
import ZodiacSigns from "./components/ZodiacSigns";
import { zodiacSign } from "./components/staticData";
import Services from "../services/Services";
import CopyRights from "../../components/CopyRights";

const Home = () => {
  return (
    <div>
      <div className="bg max-h-[100vh] overflow-hidden overflow-y-scroll min-[992px]:p-5 p-3 text-dark1">
        <div
          id="home"
          className="layout relative top-[40px] flex h-[calc(100vh-30px)] items-center justify-between"
        >
          <div className="flex flex-1 flex-col justify-center max-[992px]:items-center max-[992px]:text-center">
            <h1 className="font-against text-lg text-light min-[992px]:text-3xl sm:text-xl">Welcome to</h1>
            <h1 className="pt-4 font-against min-[992px]:text-4xl text-2xl font-bold text-dark sm:text-3xl">
              Kasthuri Astrology Center
            </h1>
            <div className="py-10 text-light text-sm sm:text-base">
              <p className="pt-0">Explore Yourself.</p>
              <p className="pt-0">Get your personal natal chart now</p>
            </div>
            <a
              href="#contact-us"
              className="smooth group mt-10 flex w-1/3 min-w-[200px] justify-center rounded-[10px] border-2 py-2 tracking-wider text-white backdrop-blur-[10px] hover:shadow-[0_1px_30px_5px_rgba(255,255,255,0.1)]"
            >
              <p>Contact Us</p>
              <span className="smooth pl-1.5 group-hover:translate-x-3">→</span>
            </a>
          </div>
          <div className="relative h-[100%] w-[100%] flex-1 flex-col items-center justify-center text-light hidden min-[992px]:flex">
            <img
              src={zodiacSigns}
              alt=""
              className="zodiac absolute left-[5%] z-0 h-[65%] opacity-70 w-full rounded-full"
            />
          </div>
        </div>
        <div className="h-full py-10">
          <div className="layout">
            <h1 className="text-xl text-light md:text-2xl">Zodiac Signs</h1>
            <div className="grid grid-cols-1 gap-10 py-10 min-[499px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {zodiacSign?.map((sign) => (
                <ZodiacSigns image={sign?.image} name={sign?.name} />
              ))}
            </div>
          </div>
        </div>
        <div id="our-services" className="layout h-full w-full">
          <Services />
        </div>
        <div id="contact-us" className="layout pt-[20vh]">
          <Contact />
        </div>
        <CopyRights />
      </div>
    </div>
  );
};

export default Home;
