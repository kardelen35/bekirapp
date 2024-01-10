import React from "react";
import Head from "next/head";

const AdvertisementSection = () => {
  return (
    <div className="relative mt-10">
      <Head>
        <title>Advertisement</title>
        <meta name="advertisement" content="all" />
      </Head>
      <img
        src="/yodaImage.jpg"
        alt="Hero"
        className="w-full h-20 object-fill lg:h-10vh xl:h-10vh lg:w-70vw xl:w-70vw"
      />
      <div className="absolute h-20 inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">
            Geek Store Hub #Marvel #StarWars #THeBoyz #HarryPotter #LOTR
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementSection;
