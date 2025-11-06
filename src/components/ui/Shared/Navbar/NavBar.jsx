import React from "react";
import lightLogo from "../../../../assets/logo/logo-black.png";
import darklogo from "../../../../assets/logo/logo-light.png";
import Image from "next/image";
import NavItem from "./NavItem";
import Button from "../Button/Button";
import HomeResponsiveMenu from "../ResponsiveMenu/HomeMenu/HomeResponsiveMenu";
const NavBar = () => {
  return (
    <div className="bg-[#ffffff] dark:bg-[#273041] py-3 lg:py-4 shadow-md px-2 ">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="logoh">
          <Image
            src={lightLogo}
            alt="Light Logo"
            className="dark:hidden lg:h-12 w-auto"
          />
          <Image
            src={darklogo}
            alt="Dark Logo"
            className="hidden dark:block h-5 lg:h-12 w-auto"
          />
        </div>
        <div className="menus hidden h-5 lg:block">
          <NavItem />
        </div>
        <div className="auth-btns">
          <div className="hidden lg:block">

          <Button >Login</Button>
          </div>
          <HomeResponsiveMenu/>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
