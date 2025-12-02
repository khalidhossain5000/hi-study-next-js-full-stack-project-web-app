'use client'
import React from "react";
import imgi from "../../../assets/home/knowmore/about-01.png";
import imgii from "../../../assets/home/knowmore/about-02.png";
import imgiii from "../../../assets/home/knowmore/about-03.png";
import Image from "next/image";
import { Book, Heart } from "lucide-react";
import ButtonIcon from "@/components/Shared/Button/ButtonIcon";
import Link from "next/link";
import { useScroll ,motion, useTransform} from "framer-motion";
const KnowMore = () => {
   const { scrollYProgress } = useScroll();

  // image-2 parallax (light movement)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]); 
  // image-3 parallax (strong movement)
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <div className="py-12 md:py-14 xl:py-24 max-w-7xl 9xl:container mx-auto flex flex-col lg:flex-row gap-6 xl:gap-9">
      <div className="imgs   gap-6 relative flex-1 ">
       <div className="img-1 lg:relative -left-25">
        <Image
          src={imgi}
          alt="know more about section image"
          width={500}
          height={500}
        />
       </div>
       
       <motion.div   className="img-2 hidden lg:block absolute top-0 right-0">
        <Image
          src={imgii}
          alt="know more about section image"
          width={300}
          height={150}
          className="rounded-xl shadow-2xl"
        />
       </motion.div>
       <div className="img-3 hidden lg:block relative -top-24 left-25">
        <Image
          src={imgiii}
          alt="know more about section image"
          width={500}
          height={500}
        />
       </div>



      </div>
      <div className="text flex-1 bg-green text-center lg:text-left px-3 lg:px-0">
        <div className="titles py-6 lg:py-9 space-y-3">
          <h5 className="text-center text-sm lg:text-[18px] bg-[#fcf1ee] text-[#e9967a] font-medium font-poppins max-w-[200px] mx-auto lg:mx-0 rounded-xl p-2 capitalize">
            Know about us
          </h5>
          <h2 className="text-2xl lg:text-3xl xl:text-[44px] text-[#192335]  font-poppins py-3 lg:py-6 font-bold lg:font-extrabold dark:text-gray-100">
            Know About Histudy <br /> Learning Platform
          </h2>
          <p className="lg:text-xl text-[#333d51aa]">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>

        {/* card of feature and with btn */}
        <div>
          <div className="f-1 flex flex-col lg:flex-row items-center gap-5 hover:bg-white hover:scale-105 transition-all p-4 rounded-lg mb-4 duration-500 hover:shadow-xl hover:rounded-xl border border-gray-200">
            <div className="icon bg-[#faecf1] p-3 rounded-full text-[#fa4509]">
              <Heart size={25}/>
            </div>
            <div className="text space-y-3">
              <h2 className="text-md xl:text-xl text-[#192335] font-medium">Flexible Classes</h2>
              <h5 className="text-sm text-[#6b7385] font-normal">It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</h5>
            </div>
          </div>
          
          <div className="f-2 flex flex-col lg:flex-row items-center gap-5 hover:bg-white hover:scale-105 transition-all p-4 rounded-lg mb-4 duration-500 hover:shadow-xl hover:rounded-xl border border-gray-200">
            <div className="icon bg-[#e4e9fd] p-3 rounded-full text-blue-600">
              <Book size={25}/>
            </div>
            <div className="text space-y-3">
              <h2 className="text-md xl:text-xl text-[#192335] font-medium">Learn From Anywhere</h2>
              <h5 className="text-sm text-[#6b7385] font-normal">Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque non eius iure suscipit.</h5>
            </div>
          </div>

           <div className="mt-8 lg:mt-12  flex justify-center lg:justify-start">
        <Link href={`/about-us`}>
          <ButtonIcon>More About Us</ButtonIcon>
        </Link>
      </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
