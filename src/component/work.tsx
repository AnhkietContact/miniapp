import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {WorkData.map(({ id, image, title, content }) => (
        <div key={id} className="flex flex-col ">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={image}
              alt={title}
              width={88}
              height={88}
              className="w-[44px] h-[44px] md:w-[88px] md:h-[88px]"
            />
            <span className="font-inter font-semibold text-[25px] md:text-[32px]">
              {title}
            </span>
          </div>
          <div className="w-full max-w-[400px] md:text-justify">
            <span className=" text-[16px] ">{content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
const WorkData = [
  {
    id: 1,
    image: "/images/icon/6.svg",
    title: "Click",
    content:
      "Click the 🚀 Launch button to begin exploring decentralized finance and connect your social media experience to the evolving world of blockchain and the metaverse 🌐.",
  },
  {
    id: 2,
    image: "/images/icon/7.svg",
    title: "User",
    content:
      "Use your Facebook profile or Telegram account to seamlessly link into the Metanode ecosystem, unlocking new ways to engage with decentralized networks and explore future opportunities 🚀.",
  },
  {
    id: 3,
    image: "/images/icon/8.svg",
    title: "Supervise activities",
    content:
      "Monitor your node activity transparently, with real-time data insights that give you full control of your assets and participation",
  },
  {
    id: 4,
    image: "/images/icon/9.svg",
    title: "Earn rewards",
    content:
      "Earn rewards by staking, checking your account age, and completing key tasks that will accelerate your journey in the decentralized world 💰",
  },
];
