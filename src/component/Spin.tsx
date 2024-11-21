import React from "react";
import Image from "next/image";

const Spin = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="rounded-xl bg-gradient-white bg-opacity-20 py-10 px-10">
        <div className="flex flex-col items-center gap-5 mb-5">
          <span className="font-inter font-bold text-[25px]">Lucky Spin</span>
          <span className="font-inter text-[15px] ">Cost per spin: 10</span>
        </div>
        <div className="flex gap-5 mb-5">
          <div className="border-4 border-[#A0A0A0] rounded-xl">
            <Image
              src="/images/icon/10.svg"
              alt=""
              width={77}
              height={91}
              className="rounded-xl"
            />
          </div>
          <div className="border-4 border-[#A0A0A0] rounded-xl">
            <Image
              src="/images/icon/11.svg"
              alt=""
              width={77}
              height={91}
              className="rounded-xl"
            />
          </div>
          <div className="border-4 border-[#A0A0A0] rounded-xl">
            <Image
              src="/images/icon/12.svg"
              alt=""
              width={77}
              height={91}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="bg-gradient-right rounded-lg w-full max-w-[300px] text-center py-5">
          <span className="font-inter font-medium text-[15px]">SPIN</span>
        </div>
        <div className="text-center mt-2">
          <span className="text-[18px] ">Press Spin to start</span>
        </div>
      </div>
    </div>
  );
};
export default Spin;
