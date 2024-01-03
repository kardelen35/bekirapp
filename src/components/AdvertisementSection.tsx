import React from "react";
import MenuItem from "./MenuItem";

const AdvertisementSection = () => {
  return (
    <div className="relative mt-10">
      <img
        src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero"
        className="w-full h-20 object-cover lg:h-10vh xl:h-10vh lg:w-70vw xl:w-70vw"
      />
      <div className="absolute h-20 inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">WE ARE A LANDING PAGE</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementSection;
