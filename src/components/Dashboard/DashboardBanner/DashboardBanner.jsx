'use client';
import React from "react";
import bgImage from "../../../assets/student-bg/n.jpg";
import { useSession } from "next-auth/react";
import Image from "next/image";
const DashboardBanner = () => {
    const {data:session}=useSession();
  return (
    <div className="">
      <div className="bg-linear-[270deg,#394ef4,#ba66e7] dark:bg-linear-[90deg,#2f57efbf,#oc586eeab]   opacity-50 h-full w-full lg:pt-[60px] lg:pb-[250px] py-20 md:px-10 z-0 relative"></div>
      <div
        className="bg-imgwith-info container mx-auto bg-no-repeat bg-cover bg-center rounded-lg flex flex-col md:flex-row items-center justify-between py-52 px-12 -mt-52 z-10 relative"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="">
          <h2 class="text-2xl xl:text-5xl font-gabriela font-bold bg-linear-to-r from-[#b966e7] via-gray-100 to-[#eeeeee] bg-clip-text text-transparent">
  Reach Higher, Achieve More
</h2>
<p className="text-lg lg:text-xl font-medium font-poppins text-stone-200 max-w-md py-3 lg:py-5">Every step you take today builds the success of tomorrow.</p>

<div className="imgandbtnsh">
    <div className="profileimg">
        <div className="img">
        <Image
        
        />
        </div>
        <div className="name"></div>
    </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;


