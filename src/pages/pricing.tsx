"use client";

import React from "react";
import Head from "next/head";

interface CardDetail {
  title: string;
  buttonText: string;
  phone_number: string;
  card_image: string;
}

const pricing: React.FC = () => {
  const canonicalUrl = "https://www.geekstorehub.com/pricing";

  const handleWhatsAppRedirect = (phone_number: string) => {
    window.open(`https://wa.me/${phone_number}`, "_blank");
  };

  const handleImageClick = (phone_number: string) => {
    handleWhatsAppRedirect(phone_number);
  };

  return (
    <div className="flex flex-wrap">
      <Head>
        <title>Pricing</title>
        <meta name="robot" content="index" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      pricing Page
    </div>
  );
};

export default pricing;
