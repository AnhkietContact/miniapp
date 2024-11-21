import React from "react";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="rounded-xl bg-white shadow-md ">
        <Image src="" alt="" width={22} height={35}/>
      </div>
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
    rating: "5",
    name: "Mike Torello",
    title: "CEO of Initech",
  },
  {
    id: 2,
    image: "/images/icon/13.svg",
    description:
      "We have successfully sold digital product and have happy with the results & look forward to using it again this.",
    avatar: "/images/icon/Avatar-2.svg",
    rating: "5",
    name: "Richards Hawkins",
    title: "Marketing Manager of Upnow",
  },
  {
    id: 3,
    image: "/images/icon/14.svg",
    description:
      "Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible .",
    avatar: "/images/icon/Avatar-3.svg",
    rating: "5",
    name: "Thomas Magnum",
    title: "Barellon NSW",
  },
];
