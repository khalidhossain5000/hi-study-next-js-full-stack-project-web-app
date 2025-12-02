"use client";
import React from "react";
import bgImage from "../../../../assets/student-bg/n.jpg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { BookText } from "lucide-react";
import ButtonIcon from "@/components/Shared/Button/ButtonIcon";
import lightLogo from "../../../../assets/logo/logo-light.png";
import darkLogo from "../../../../assets/logo/logo-black.png";
import ResponsiveDashboard from "../ResponsiveSIdebar/ResponsiveDashboard";
import { ModeToggle } from "@/components/Shared/ThemeToggle/ThemeToggle";
const DashboardBanner = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  return (
    <div className="">
      {/* header this  */}

      <header className="bg-[#ffffff] sticky top-0 z-50 dark:bg-[#273041] py-3 2xl:py-3 shadow-md px-2 ">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="logoh">
            <Image
              src={darkLogo}
              alt="Light Logo"
              className="dark:hidden 2xl:h-12 w-auto h-12 md:h-12 lg:h-9"
            />
            <Image
              src={lightLogo}
              alt="Dark Logo"
              className="hidden dark:block h-12 md:h-12 lg:h-9 2xl:h-12 w-auto"
            />
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <h2 className="text-lg font-bold text-green-500">
              Role: {session?.user?.role}
            </h2>

            <ModeToggle/>
          </div>
          {/* mobile menu */}
          <div className="lg:hidden">
            <ResponsiveDashboard />
          </div>
        </nav>
      </header>
      {/* banner section this is here */}
      <div className="bg-linear-[270deg,#394ef4,#ba66e7] dark:bg-linear-to-r from-[#394ef4] via-[#ba66e7] to-[#00f2ff] opacity-50 h-full w-full lg:pt-[60px] lg:pb-[250px] py-20 md:px-10 z-0 relative"></div>
      <div
        className="bg-info max-w-7xl mx-auto bg-no-repeat bg-cover bg-center rounded-lg flex flex-col md:flex-row items-center justify-between py-16 px-6 lg:py-[100px] lg:px-12 -mt-24 lg:-mt-52 z-10 relative "
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className=" w-full ">
          <div className="contents text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl xl:text-5xl font-gabriela font-bold bg-linear-to-r from-[#b966e7] via-gray-100 to-[#eeeeee] bg-clip-text text-transparent">
              Reach Higher, Achieve More
            </h2>
            <p className="mx-auto lg:mx-0 text-lg lg:text-xl font-medium font-poppins text-stone-200 max-w-md py-3 lg:py-5">
              Every step you take today builds the success of tomorrow.
            </p>
          </div>

          <div className="imgandbtnsh flex flex-col lg:flex-row items-center gap-6 lg:gap-8 justify-center lg:justify-between w-full pt-0 lg:pt-6">
            <div className="profileimg flex items-center gap-4 mt-2 lg:mt-5">
              <div className="img">
                <Image
                  src={session?.user?.profileImage}
                  alt="profile image"
                  className="rounded-full border-2 border-white p-1"
                  height={90}
                  width={90}
                />
              </div>
              <div className="name">
                <h4 className="text-lg lg:text-xl font-semibold lg:font-bold text-white">
                  {session?.user?.name}
                </h4>
                {session?.user?.role === "student" && (
                  <p className="text-md font-medium text-stone-200 flex items-center mt-2 gap-2">
                    <BookText />0 Courses Enrolled
                  </p>
                )}
              </div>
            </div>
            <div className="btns">
              {session?.user?.role === "student" && (
                <ButtonIcon>Buy Courses</ButtonIcon>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
