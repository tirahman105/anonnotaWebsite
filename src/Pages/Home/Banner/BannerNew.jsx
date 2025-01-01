import React from "react";

const BannerNew = () => {
  return (
    <div className="bg-gradient-to-r from-[#D0EEF2] to-[#E6ECF9] text-white h-auto py-16 flex items-center justify-center">
      <div className="max-w-4xl px-4 text-center">
        <h1 className="text-3xl md:text-5xl text-[#1A285F] font-semibold">
          Spread Your Business With <span className="font-bold">AnonnoTa</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-[#333]">
          We believe in honesty, trust, and building strong relationships to
          deliver the best solutions for our clients.
        </p>
        <div className="mt-6">
          <button className="bg-[#1A285F] text-white py-2 px-4 rounded-md hover:bg-[#162050] transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerNew;
