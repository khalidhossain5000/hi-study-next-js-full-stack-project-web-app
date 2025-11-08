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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FlagOrbit = () => {
  return (
    
      <div className="relative flex items-center justify-center md:w-[500px] md:h-[500px] w-[290px] h-[290px] sm:w-[300px] sm:h-[300px] mx-auto">
        {/* World map */}

        <div className="relative">
          <Image
            src={worldmap}
            alt="world map"
            width={500}
            height={500}
            className="w-10/12 mx-auto md:w-full relative z-10"
          />
        </div>

        {/* All flags container */}
        <div
          className="all-flags flex justify-center rounded-full w-[290px] md:w-[500px] h-[290px] md:h-[500px] sm:w-[300px] sm:h-[300px] absolute top-0 border-2 border-dashed border-gray-300 z-10 animate-spin hover:paused"
          style={{ animationDuration: "30s" }}
        >
          {/* Australia */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flags-reverse absolute z-10 w-10 md:w-[60px] h-10 md:h-[60px] rounded-full flex items-center justify-center -top-[21px] left-[130px] md:left-60 md:-top-9 ">
                <Image src={australia} alt="Australia" width={60} height={60} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 text-black dark:bg-black/90 dark:text-white">
              Australia
            </TooltipContent>
          </Tooltip>


          {/* Canada */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flags-reverse absolute z-10 w-10 md:w-[60px] h-10 md:h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] top-18 -right-1 md:top-0.5 md:left-[97px]  md:right-[85px]">
                <Image src={canada} alt="Canada" width={60} height={60} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 text-black dark:bg-black/90 dark:text-white">
              Canada
            </TooltipContent>
          </Tooltip>

          {/* China */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flags-reverse absolute z-10 w-10 md:w-[60px] h-10 md:h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1]  top-1 right-9 md:top-[5px]  md:right-[85px]">
                <Image src={china} alt="China" width={60} height={60} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 text-black dark:bg-black/90 dark:text-white">
              China
            </TooltipContent>
          </Tooltip>

          {/* France */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flags-reverse absolute z-10 w-10 md:w-[60px] h-10 md:h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] top-3 right-52 md:top-[114px]  md:-right-[5px]">
                <Image src={france} alt="France" width={60} height={60} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 text-black dark:bg-black/90 dark:text-white">
              France
            </TooltipContent>
          </Tooltip>

          {/* Germany */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flags-reverse absolute z-10 w-10 md:w-[60px] h-10 md:h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] right-[260px] bottom-[90px]  md:bottom-[186px]  md:-right-[30px]">
                <Image src={germany} alt="Germany" width={60} height={60} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 text-black dark:bg-black/90 dark:text-white">
              Germany
            </TooltipContent>
          </Tooltip>

          {/* Japan */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flags-reverse absolute z-10 w-10 md:w-[60px] h-10 md:h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] -bottom-5 md:bottom-14 right-[90px] md:right-[30px]">
                <Image src={japan} alt="Japan" width={60} height={60} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 text-black dark:bg-black/90 dark:text-white">
              Japan
            </TooltipContent>
          </Tooltip>

          {/* Korea */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flags-reverse absolute z-10 w-10 md:w-[60px] h-10 md:h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] md:-bottom-3.5 -bottom-4 left-[90px] md:left-[295px]">
                <Image src={korea} alt="Korea" width={60} height={60} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 text-black dark:bg-black/90 dark:text-white">
              Korea
            </TooltipContent>
          </Tooltip>

          {/* Pakistan */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flags-reverse absolute z-10 w-10 md:w-[60px] h-10 md:h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] bottom-5 md:-bottom-3.5 left-5 md:left-[135px]">
                <Image src={pakistan} alt="Pakistan" width={60} height={60} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 text-black dark:bg-black/90 dark:text-white">
              Pakistan
            </TooltipContent>
          </Tooltip>

          {/* Sri Lanka */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flags-reverse absolute z-10 w-10 md:w-[60px] h-10 md:h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] bottom-42 -left-4 md:bottom-[66px] md:left-[23px]">
                <Image src={srilanka} alt="Sri Lanka" width={60} height={60} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 text-black dark:bg-black/90 dark:text-white">
              Sri Lanka
            </TooltipContent>
          </Tooltip>

          {/* UK */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flags-reverse absolute z-10 w-10 md:w-[60px] h-10 md:h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] top-[150px] left-[260px] md:top-60 left-.5 md:-left-6">
                <Image src={uk} alt="UK" width={60} height={60} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 text-black dark:bg-black/90 dark:text-white">
              United Kingdom
            </TooltipContent>
          </Tooltip>

          {/* USA */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flags-reverse absolute z-10 w-10 md:w-[60px] h-10 md:h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] top-56 left-[233px] md:top-[107px]  md:left-0">
                <Image src={usa} alt="USA" width={60} height={60} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-white/90 text-black dark:bg-black/90 dark:text-white">
              United States
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
   
  );
};

export default FlagOrbit;

// OLD CODE HERE

// "use client";
// import Image from "next/image";
// import React from "react";
// import worldmap from "../../../assets/banner/world.png";
// import australia from "../../../assets/banner/flag-and-icon-r/flag-australia.png";
// import canada from "../../../assets/banner/flag-and-icon-r/flag-canada.png";
// import china from "../../../assets/banner/flag-and-icon-r/flag-china.png";
// import france from "../../../assets/banner/flag-and-icon-r/flag-french.png";
// import germany from "../../../assets/banner/flag-and-icon-r/flag-germany.png";
// import japan from "../../../assets/banner/flag-and-icon-r/flag-japan.png";
// import korea from "../../../assets/banner/flag-and-icon-r/flag-korea.png";
// import pakistan from "../../../assets/banner/flag-and-icon-r/flag-pakistan.png";
// import srilanka from "../../../assets/banner/flag-and-icon-r/flag-srilonka.png";
// import uk from "../../../assets/banner/flag-and-icon-r/flag-uk.png";
// import usa from "../../../assets/banner/flag-and-icon-r/flag-usa.png";
// import { motion } from "framer-motion";
// const FlagOrbit = () => {
//   return (
//     <div className=" relative flex items-center justify-center w-[500px] h-[500px]  mx-auto ">
//       {/* flags world map container here */}
//       <div className="relative">
//         <Image
//           src={worldmap}
//           alt="world map"
//           width={500}
//           height={500}
//           className="w-full relative z-10"
//         />
//       </div>
//       {/* all flags container */}
//       <div

//         className="all-flags flex justify-center rounded-full w-[500px] h-[500px] absolute top-0 border-2 border-dashed border-gray-600 z-10 animate-spin hover:paused"
//         style={{ animationDuration: "30s" }}
//       >
//         {/* aus */}

//         <div  className="absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center -top-9">
//           <Image
//             src={australia}
//             alt="australia"
//             width={60}
//             height={60}
//             className=""
//           />

//         </div>

//         {/* canada */}
//         <div className="flags-reverse flags-reverse absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] top-0.5 left-[97px]">
//           <Image src={canada} alt="australia" width={60} height={60} />
//         </div>
//         {/* china */}
//         <div className="flags-reverse absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] top-[5px] right-[85px]">
//           <Image src={china} alt="australia" width={60} height={60} />
//         </div>
//         {/* franse */}
//         <div className="flags-reverse absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] top-[114px] -right-[5px]">
//           <Image src={france} alt="australia" width={60} height={60} />
//         </div>
//         {/* germany */}
//         <div className="flags-reverse absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] bottom-[186px] -right-[30px]">
//           <Image src={germany} alt="australia" width={60} height={60} />
//         </div>
//         {/* japans */}
//         <div className="flags-reverse absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] bottom-14 right-[30px] ">
//           <Image src={japan} alt="australia" width={60} height={60} />
//         </div>
//         {/* austranlia */}
//         <div className="flags-reverse absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] -bottom-[17px] right-[148px]">
//           <Image src={korea} alt="australia" width={60} height={60} />
//         </div>
//         {/* pakistan */}
//         <div className="flags-reverse absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] -bottom-3.5 left-[135px]">
//           <Image src={pakistan} alt="australia" width={60} height={60} />
//         </div>
//         {/* lanka */}
//         <div className="flags-reverse absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] bottom-[66px] left-[23px]">
//           <Image src={srilanka} alt="australia" width={60} height={60} />
//         </div>
//         {/* uk */}
//         <div className="flags-reverse absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] bottom-[191px] -left-[25px]">
//           <Image src={uk} alt="australia" width={60} height={60} />
//         </div>
//         {/* usa */}
//         <div className="flags-reverse absolute z-10 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#e6e3f1] top-[107px] left-0">
//           <Image src={usa} alt="australia" width={60} height={60} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlagOrbit;
