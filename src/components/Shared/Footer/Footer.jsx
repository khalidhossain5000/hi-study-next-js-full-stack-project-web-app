import React from "react";
import logo from "../../../assets/logo/footer/footer-logo.png";
import Image from "next/image";

import Social from "../SocialIcon/Social";
import GradientButton from "@/components/lightswind/gradient-button";
const Footer = () => {
  return (
    <footer className="border-t border-t-gray-300 xl:border-0 py-9 lg:pt-12 xl:pt-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto 9xl:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 xl:gap-6 auto-cols-fr">
        <div className="logoj xl:col-span-2 text-center lg:text-left">
          <Image src={logo} alt="footer-logo" className="w-36 lg:w-44 mx-auto lg:mx-0" />
          <p className="text-[18px] text-gray-500 font-medium py-3">
            We’re always in search for talented and motivated people. Don’t be
            shy introduce yourself!
          </p>
          <div>

          <Social />
          </div>
          <div className="flex justify-center lg:justify-start">
            <GradientButton>Contact Us</GradientButton>
          </div>
        </div>
        {/* useful links */}
        <div className="text-center lg:text-left">
          <h2 className="text-[#192335] dark:text-gray-100 text-xl font-bold mb-6">Useful Links</h2>
          <ul className="text-[#6b7385]   space-y-3">
            <li>About Us</li>
            <li>All Courses</li>
            <li>Premium Courses</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* our company */}
        <div className="text-center lg:text-left">
          <h2 className="text-[#192335] dark:text-gray-100 text-xl font-bold mb-6 lg:font-extrabold">Our Company</h2>
          <ul className="text-[#6b7385]  space-y-3">
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Free Courses</li>
            <li>Free Courses</li>
            <li>Free Courses</li>
            <li>Free Courses</li>
            <li>Free Courses</li>
          </ul>
        </div>
        {/* contact us */}
        <div className="w-full xl:col-span-2 text-center lg:text-left">
          <h2 className="text-[#192335] dark:text-gray-100 text-xl font-bold mb-6">Get Contact</h2>
          <ul className="text-[#6b7385]  space-y-3">
            <li> Phone: (406) 555-0120</li>
            <li>E-mail: admin@example.com</li>
            <li>Address: 15205 North Kierland Blvd.</li>
          </ul>
        </div>
      </div>
     <div className="copyrights border-t border-gray-300 dark:border-[#ffffff76] mt-10 pt-6 text-center">
  <h5 className="text-sm text-gray-600 dark:text-gray-100">
    Copyright &copy; 2025  
    <a
      href="https://khalid-hossain.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text px-1"
    >
      Khalid Hossain
    </a>
    — All Rights Reserved
  </h5>
</div>

    </footer>
  );
};

export default Footer;
