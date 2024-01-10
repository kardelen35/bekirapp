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
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Clock",
      buttonText: "Go",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Clock",
      buttonText: "Go",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905315428789",
      card_image: "/yodaImage.jpg",
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
        <div key={index} className="w-1/4 p-2">
          <a
            href="#"
            onClick={() => handleWhatsAppRedirect(detail.phone_number)}
          >
            <img
              className="rounded-lg"
              src={detail.card_image}
              alt=""
              style={{ width: "100%" }}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cards;
