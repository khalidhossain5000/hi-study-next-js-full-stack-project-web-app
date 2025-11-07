import ButtonIcon from "@/components/Shared/Button/ButtonIcon";
import React from "react";
import FlagOrbit from "./FlagOrbit";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center ">
      <div className="flex-1 content text-center lg:text-left space-y-6 px-2">
        <h5 className="text-sm lg:text-[18px] bg-linear-to-t from-[#394ef4] to-[#b966e7] bg-clip-text text-transparent">
          Multi-Language Academy
        </h5>

        <h2 className="text-2xl md:text-3xl xl:text-[60px] text-[#192335] font-bold font-gabriela">
          Take Online Language And Technical Courses With Certificate
        </h2>
        <p className="text-xl text-gray-900 max-w-[560px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat.
        </p>
        <ButtonIcon>Find Your Courses</ButtonIcon>
      </div>
      {/* flag orbit component here */}
      <div className="relative flex items-center justify-center  flex-1">
        <FlagOrbit />
      </div>
    </div>
  );
};

export default Banner;
