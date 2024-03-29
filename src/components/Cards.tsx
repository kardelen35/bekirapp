"use client";

import React from "react";
import Head from "next/head";

interface CardDetail {
  title: string;
  buttonText: string;
  phone_number: string;
  card_image: string;
}

const Cards: React.FC = () => {
  const cardDetail: CardDetail[] = [
    {
      title: "Clock",
      buttonText: "Go",
      phone_number: "+905315428789",
      card_image: "/bekirImage.jpeg",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/bekirImage.jpeg",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+905315428789",
      card_image: "/bekirImage.jpeg",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/bekirImage.jpeg",
    },
    {
      title: "Clock",
      buttonText: "Go",
      phone_number: "+905315428789",
      card_image: "/bekirImage.jpeg",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/bekirImage.jpeg",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+905315428789",
      card_image: "/bekirImage.jpeg",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/bekirImage.jpeg",
    },
  ];

  const handleWhatsAppRedirect = (phone_number: string) => {
    window.open(`https://wa.me/${phone_number}`, "_blank");
  };

  const handleImageClick = (phone_number: string) => {
    handleWhatsAppRedirect(phone_number);
  };

  return (
    <div className="flex flex-wrap">
      <Head>
        <title>Cards</title>
        <meta name="cards" content="all" />
      </Head>

      {cardDetail.map((detail, index) => (
        <div key={index} className="w-1/2 md:w-1/4 p-1 flex">
          <a
            href="#"
            onClick={() => handleWhatsAppRedirect(detail.phone_number)}
          >
            <div className="w-full overflow-hidden">
              <img
                className="rounded-lg object-cover w-full h-full"
                src={detail.card_image}
                alt=""
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cards;
