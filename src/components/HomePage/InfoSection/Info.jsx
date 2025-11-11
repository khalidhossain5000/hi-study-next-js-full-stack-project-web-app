import React from "react";
import iconi from "../../../assets/home/icons/f-icon-01.png";
import iconii from "../../../assets/home/icons/f-icon-02.png";
import iconiii from "../../../assets/home/icons/f-icon-03.png";
import Image from "next/image";
const Info = () => {
  return (
    <div className="container mx-auto py-12 lg:py-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-3 xl:px-0 shadow-gray-800">
      {/* card1 */}
      <div className="bg-[#ffffff] dark:bg-[#273041] rounded-[10px] pt-[30px] pb-10 px-[30px] shadow-lg">
        <div className="icons flex items-center gap-5">
          <span className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#db7093]"><Image src={iconi} alt="icon i" width={40} height={40} className="" /></span>
          <h2 className="dark:text-white text-xl font-semibold text-[#192335]">Best Industry<br/> Leaders</h2>
        </div>
        <div className="des">
            <p className="dark:text-white text-[16px] text-[#192335] mt-5">It is a long established fact that a reader will be distracted by this on readable.</p>
        </div>
      </div>
      
      {/* card2 */}
      <div className="bg-[#ffffff] dark:bg-[#273041] rounded-[10px] pt-[30px] pb-10 px-[30px] shadow-lg">
        <div className="icons flex items-center gap-5">
          <span className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#2f57ef]"><Image src={iconii} alt="icon i" width={40} height={40} className="" /></span>
          <h2 className="text-xl dark:text-white font-semibold text-[#192335]">Learn Courses<br/> Online</h2>
        </div>
        <div className="des">
            <p className="text-[16px] dark:text-white text-[#192335] mt-5">It is a long established fact that a reader will be distracted by this on readable.</p>
        </div>
      </div>

      {/* card3 */}
      <div className="bg-[#ffffff] dark:bg-[#273041] rounded-[10px] py-10 px-[30px] shadow-lg">
        <div className="icons flex items-center gap-5">
          <span className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#b966e7]"><Image src={iconiii} alt="icon i" width={40} height={40} className="" /></span>
          <h2 className="text-xl font-semibold text-[#192335] dark:text-white">Online Book<br/> Library</h2>
        </div>
        <div className="des">
            <p className="text-[16px] text-[#192335] dark:text-white mt-5">It is a long established fact that a reader will be distracted by this on readable.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
