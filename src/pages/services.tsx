"use client";

import React from "react";
import Head from "next/head";

interface CardDetail {
  title: string;
  buttonText: string;
  phone_number: string;
  card_image: string;
}

const services: React.FC = () => {
  const canonicalUrl = "https://www.geekstorehub.com/services";

  const handleWhatsAppRedirect = (phone_number: string) => {
    window.open(`https://wa.me/${phone_number}`, "_blank");
  };

  const handleImageClick = (phone_number: string) => {
    handleWhatsAppRedirect(phone_number);
  };

  return (
    <div className="flex flex-wrap">
      <Head>
        <title>Services</title>
        <meta name="robot" content="index" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      Services Page
    </div>
  );
};

export default services;
