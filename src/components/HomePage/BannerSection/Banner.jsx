import ButtonIcon from "@/components/Shared/Button/ButtonIcon";
import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="content text-center lg:text-left space-y-6">
       <h5 className="text-sm lg:text-[18px] bg-linear-to-t from-[#394ef4] to-[#b966e7] bg-clip-text text-transparent">
  Multi-Language Academy
</h5>

        <h2 className="text-2xl md:text-3xl xl:text-[60px] text-[#192335] font-bold max-w-xl font-gabriela">Take Online Language Courses With Certificate</h2>
        <p className="text-xl text-gray-900 max-w-[560px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
        <ButtonIcon>Find Your Courses</ButtonIcon>
      </div>
    </div>
  );
};

export default Banner;
