'use client'
import React from "react";
import lightLogo from "../../../assets/logo/logo-black.png";
import darklogo from "../../../assets/logo/logo-light.png";
import Image from "next/image";
import NavItem from "./NavItem";
import Button from "../Button/Button";

import { ModeToggle } from "../ThemeToggle/ThemeToggle";
import HomeResponsiveMenu from "../ResponsiveMenu/HomeMenu/HomeResponsiveMenu";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className="bg-[#ffffff] dark:bg-[#273041] py-3 2xl:py-3 shadow-md px-2 ">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="logoh">
          <Image
            src={lightLogo}
            alt="Light Logo"
            className="dark:hidden 2xl:h-12 w-auto h-12 md:h-12 lg:h-9"
          />
          <Image
            src={darklogo}
            alt="Dark Logo"
            className="hidden dark:block h-12 md:h-12 lg:h-9 2xl:h-12 w-auto"
          />
        </div>
        <div className="menus hidden h-5 lg:block">
          <NavItem />
        </div>
        <div className="auth-btns">
          <div className="hidden lg:flex items-center gap-6">
            <ModeToggle/>
            <Link href={`/auth/login`}><Button>Login</Button></Link>
            
          </div>
          <HomeResponsiveMenu />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
