import AdvertisementSection from "@/components/AdvertisementSection";
import Cards from "@/components/Cards";
import React from "react";

const Page = () => {
  return (
    <div className="grid gap-4">
      <AdvertisementSection />
      <Cards />
    </div>
  );
};

export default Page;
