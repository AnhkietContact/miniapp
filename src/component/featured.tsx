import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Lặp qua mảng DATA để render từng mục */}
      {DATA.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="flex items-center gap-2">
            <Image
              src={item.image}
              alt={item.title}
              width={44}
              height={44}
              className="shadow-md rounded-full"
            />
            <span className="font-inter font-semibold text-[16px]">
              {item.title}
            </span>
          </div>
          <div
            className={`w-full ${
              item.id === 5 ? "max-w-[270px] md:max-w-none" : "max-w-[270px]"
            }`}
          >
            <span className="font-inter font-medium text-[13px]">
              {item.content}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;

// Dữ liệu sản phẩm
const DATA = [
  {
    id: 1,
    image: "/images/icon/1.svg",
    title: "Simplified Node Management",
    content:
      "Say goodbye to the headaches of setting up and maintaining nodes across different blockchains. Metanode does the heavy lifting, so you can focus on what really matters—growing your crypto portfolio.",
  },
  {
    id: 2,
    image: "/images/icon/2.svg",
    title: "Multi-Chain Support",
    content:
      "Whether you're working with Ethereum, Binance Smart Chain, Polygon, or other major blockchain networks, Metanode has you covered. Switch between chains effortlessly and manage your nodes with just a few clicks.",
  },
  {
    id: 3,
    image: "/images/icon/3.svg",
    title: " Automated Processes",
    content:
      "From transaction monitoring to smart contract interactions, Metanode automates the boring stuff, giving you more time to explore new opportunities in the crypto space.",
  },
  {
    id: 4,
    image: "/images/icon/4.svg",
    title: "Enhanced Security",
    content:
      "Your assets are your top priority, and Metanode takes security seriously. With robust encryption and multi-layer authentication, you can rest easy knowing your funds and data are in safe hands.",
  },
  {
    id: 5,
    image: "/images/icon/5.svg",
    title: "Real-Time Analytics",
    content:
      "Stay informed with real-time data and analytics. Track node performance, monitor network conditions, and make data-driven decisions to optimize your crypto strategies.",
  },
];
