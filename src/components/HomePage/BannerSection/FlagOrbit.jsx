"use client";
import Image from "next/image";
import React from "react";
import worldmap from "../../../assets/banner/world.png";
import australia from "../../../assets/banner/flag-and-icon-r/flag-australia.png";
import canada from "../../../assets/banner/flag-and-icon-r/flag-canada.png";
import china from "../../../assets/banner/flag-and-icon-r/flag-china.png";
import france from "../../../assets/banner/flag-and-icon-r/flag-french.png";
import germany from "../../../assets/banner/flag-and-icon-r/flag-germany.png";
import japan from "../../../assets/banner/flag-and-icon-r/flag-japan.png";
import korea from "../../../assets/banner/flag-and-icon-r/flag-korea.png";
import pakistan from "../../../assets/banner/flag-and-icon-r/flag-pakistan.png";
import srilanka from "../../../assets/banner/flag-and-icon-r/flag-srilonka.png";
import uk from "../../../assets/banner/flag-and-icon-r/flag-uk.png";
import usa from "../../../assets/banner/flag-and-icon-r/flag-usa.png";
import { motion } from "framer-motion";
const FlagOrbit = () => {
  return (
    <div className=" relative flex items-center justify-center w-[500px] h-[500px]  mx-auto ">
      {/* flags world map container here */}
      <div className="relative">
        <Image
          src={worldmap}
          alt="world map"
          width={500}
          height={500}
          className="w-full relative z-10"
        />
      </div>
      {/* all flags container */}
      <motion.div
       
        className="all-flags flex justify-center rounded-full w-[500px] h-[500px] absolute top-0 border-2 border-dashed border-gray-600 z-10"
      >
        {/* aus */}
        <div className="absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center -top-9">
          <Image
            src={australia}
            alt="australia"
            width={60}
            height={60}
            className=""
          />
        </div>
        <div className=" ">
          <Image src={canada} alt="australia" width={60} height={60} />
        </div>
        <div className=" ">
          <Image src={china} alt="australia" width={60} height={60} />
        </div>
        {/* franse */}
        <div className="">
          <Image src={france} alt="australia" width={60} height={60} />
        </div>
        {/* germany */}
        <div className="">
          <Image src={germany} alt="australia" width={60} height={60} />
        </div>
        {/* japans */}
        <div className=" ">
          <Image src={japan} alt="australia" width={60} height={60} />
        </div>
        {/* austranlia */}
        <div className="  ">
          <Image src={korea} alt="australia" width={60} height={60} />
        </div>
        {/* pakistan */}
        <div className="  ">
          <Image src={pakistan} alt="australia" width={60} height={60} />
        </div>
        {/* lanka */}
        <div className=" ">
          <Image src={srilanka} alt="australia" width={60} height={60} />
        </div>
        {/* uk */}
        <div className=" ">
          <Image src={uk} alt="australia" width={60} height={60} />
        </div>
        {/* usa */}
        <div className=" ">
          <Image src={usa} alt="australia" width={60} height={60} />
        </div>
      </motion.div>
    </div>
  );
};

export default FlagOrbit;
