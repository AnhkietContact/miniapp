import React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";

const Testimonial = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 md:space-x-6">
      {Know.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col shadow-md rounded-xl p-6 ${
            item.id === 2 ? "bg-[#FF9900] " : "bg-white"
          }`}
        >
          {/* Left Image Section */}

          <Image src={item.image} alt="Icon" width={50} height={50} />

          {/* Right Content Section */}
          <div className="flex flex-col mt-4 md:mt-0 ">
            {/* Description */}
            <div className="max-w-[260px] mt-4">
              <p className={` font-inter text-[16px] ${
                    item.id === 2 ? "text-white " : ""
                  }`}>{item.description}</p>
            </div>
            {/* Avatar + Rating + Info */}
            <div className="flex items-center mt-6 gap-4">
              {/* Avatar */}
              <Image
                src={item.avatar}
                alt={`${item.name}'s Avatar`}
                width={52}
                height={52}
                className=""
              />

              {/* Name, Title, and Rating */}
              <div className="flex flex-col">
                <Rating
                  name={`rating-${item.id}`}
                  value={item.rating}
                  readOnly
                  sx={{
                    color: item.id === 2 ? "#FFFFFF" : "#FF8311",
                  }}
                />
                <span
                  className={`font-medium font-inter text-[16px] ${
                    item.id === 2 ? "text-white " : ""
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`font-inter text-[14px]  ${
                    item.id === 2 ? "text-white opacity-50 " : "text-[#454747]"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
const Know = [
  {
    id: 1,
    image: "/images/icon/14.svg",
    description:
      "I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product",
    avatar: "/images/icon/Avatar-1.svg",
    rating: 5,
    name: "Mike Torello",
    title: "CEO of Initech",
  },
  {
    id: 2,
    image: "/images/icon/13.svg",
    description:
      "We have successfully sold digital product and have happy with the results & look forward to using it again this.",
    avatar: "/images/icon/Avatar-2.svg",
    rating: 5,
    name: "Richards Hawkins",
    title: "Marketing Manager of Upnow",
  },
  {
    id: 3,
    image: "/images/icon/14.svg",
    description:
      "Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible .",
    avatar: "/images/icon/Avatar-3.svg",
    rating: 5,
    name: "Thomas Magnum",
    title: "Barellon NSW",
  },
];
