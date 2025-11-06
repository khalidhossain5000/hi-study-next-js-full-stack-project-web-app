
import React from "react";
import lightLogo from "../../../../assets/logo/logo-black.png"
import darklogo from "../../../../assets/logo/logo-light.png"
import Image from "next/image";
import NavItem from "./NavItem";
const NavBar = () => {
    
 

  return (
    <div className="bg-[#ffffff] dark:bg-[#273041] py-6 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="logoh">
            <Image src={lightLogo} alt="Light Logo" className="dark:hidden h-12 w-auto"/>
            <Image src={darklogo} alt="Dark Logo" className="hidden dark:block h-12 w-auto"/>
        </div>
        <div className="menus">
            <NavItem/>
        </div>
        <div className="auth-btns">
            <button className="mr-4 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
