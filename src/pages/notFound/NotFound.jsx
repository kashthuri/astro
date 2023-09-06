import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound-bg relative flex h-full min-h-[100vh] w-full flex-col items-center justify-center">
      <div className="flex min-h-[60vh] w-2/3 flex-col items-center justify-center rounded-md bg-[rgba(255,255,255,.1)] text-center backdrop-blur-[5px]">
        <p className="mb-10 font-against text-7xl font-extrabold tracking-[30px] text-dark1">
          404
        </p>
        <p className="font-against text-4xl font-bold tracking-widest text-dark1">
          Page Not Found
        </p>
        <p className="py-10 text-xl font-medium text-secondary">
          Something Went Wrong
        </p>
        <div className="flex items-center gap-5">
          <Link
            to="/"
            className="flex h-12 w-auto items-center justify-center rounded-md border border-dark1 bg-dark1 px-10 text-light hover:bg-transparent hover:text-dark1"
          >
            Back To Home
          </Link>
          <Link
            to="/contact-us"
            className="flex h-12 w-auto items-center justify-center rounded-md border px-10 text-dark1 hover:border-dark1 hover:bg-dark1 hover:text-light"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
