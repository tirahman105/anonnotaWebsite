import React from "react";
import { MdDesignServices, MdWeb } from "react-icons/md";
import { FcAdvertising } from "react-icons/fc";
import { MdOutlineVideoLibrary } from "react-icons/md";

const HomeServiceCards = () => {
  return (
    <div className="bg-gradient-to-r from-[#D0EEF2] to-[#E6ECF9] pb-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-14 sm:px-4 lg:px-4 ">
        <div className="relative pb-10">
          <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-4 z-10">
            <MdDesignServices className="text-6xl text-[#1A285F]" />
          </div>
          <div className="card bg-base-100 shadow-xl pt-10">
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">Graphic Design</h2>
              <p>All category graphical content</p>
            </div>
          </div>
        </div>
        <div className="relative pb-10">
          <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-4 z-10">
            <FcAdvertising className="text-6xl text-[#1A285F]" />
          </div>
          <div className="card bg-base-100 shadow-xl pt-10">
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">Facebook Marketing</h2>
              <p>Effective and expert marketing</p>
            </div>
          </div>
        </div>
        <div className="relative pb-10">
          <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-4 z-10">
            <MdOutlineVideoLibrary className="text-6xl text-[#1A285F]" />
          </div>
          <div className="card bg-base-100 shadow-xl pt-10">
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">Video Making</h2>
              <p>Promotional video for business</p>
            </div>
          </div>
        </div>
        <div className="relative pb-10">
          <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-4 z-10">
            <MdWeb className="text-6xl text-[#1A285F]" />
          </div>
          <div className="card bg-base-100 shadow-xl pt-10">
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">Website Development</h2>
              <p>Online platform of your business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCards;
