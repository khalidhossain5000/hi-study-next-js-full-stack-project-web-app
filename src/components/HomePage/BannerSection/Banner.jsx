/* eslint-disable @next/next/no-img-element */
import ButtonIcon from "@/components/Shared/Button/ButtonIcon";
import React from "react";
import FlagOrbit from "./FlagOrbit";
import shadowi from "../../../assets/banner/bg/shadow-1.png";
import shadowii from "../../../assets/banner/bg/shadow-2.png";
import shadowiii from "../../../assets/banner/bg/shadow-3.png";

import curvei from "../../../assets/banner/bg/curve-line-1.png";
import curveii from "../../../assets/banner/bg/curve-line-2.png";
import curveiii from "../../../assets/banner/bg/curve-line-3.png";
import curveiv from "../../../assets/banner/bg/curve-line-4.png";

import dot from "../../../assets/banner/bg/dot-bg.png";
const Banner = () => {
  return (
    <div className=" bg-[#F5F7FA] dark:bg-[#192335]  overflow-x-hidden py-12 lg:py-22 2xl:pt-[155px] 2xl:pb-[165px] relative">
      <div className="shapes absolute top-0 left-0 w-full h-full">
        <div className="circle-shapes-1 absolute ">
          <img src={shadowi.src} alt="shape" className="max-w-full" />
        </div>
        <div className="circle-shapes-2 absolute right-0 -top-[155px]">
          <img src={shadowii.src} alt="shape" />
        </div>
        <div className="circle-shapes-3 absolute bottom-0 left-[541px]">
          <img src={shadowiii.src} alt="shape" />
        </div>
      </div>

      {/* curve line */}
      <div className="curve line absolute top-0 left-0 w-full h-full">
        <div className="curve-line-1 absolute left-[55px] top-0  h-full">
          <img src={curvei.src} alt="curve line " className="h-full" />
        </div>
        <div className="curve-line-2 none lg:block absolute right-[178px] top-0 h-full">
          <img src={curveii.src} alt="curve line" />
        </div>
        <div className="curve-line-3 absolute left-[501px] top-0">
          <img src={curveiii.src} alt="curve line" />
        </div>
        <div className="curve-line-4 absolute right-0 bottom-0">
          <img src={curveiv.src} alt="curve line" />
        </div>
      </div>
      {/* dot bg */}
      <div className="absolute bottom-0 left-[73px]">
        <img src={dot.src} alt="dot bg" className="max-w-full h-auto" />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-20 lg:gap-10 xl:pt-22 2xl:pt-0 container mx-auto">
        <div className="flex-1 content text-center lg:text-left space-y-6 px-2 ">
          <h5 className="text-sm lg:text-[18px] bg-linear-to-t from-[#394ef4] to-[#b966e7] bg-clip-text text-transparent">
            Multi-Language Academy
          </h5>

          <h2 className="text-2xl md:text-3xl xl:text-[60px] text-[#192335] dark:text-white font-bold font-gabriela">
            Take Online Language And Technical Courses With Certificate
          </h2>
          <p className="text-xl text-gray-900 dark:text-gray-100 font-poppins max-w-[560px] mx-auto lg:mx-0 ">
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
    </div>
  );
};

export default Banner;
