"use client";
import React from "react";
import lightLogo from "../../../assets/logo/logo-black.png";
import darklogo from "../../../assets/logo/logo-light.png";
import Image from "next/image";
import NavItem from "./NavItem";
import Button from "../Button/Button";

import { ModeToggle } from "../ThemeToggle/ThemeToggle";
import HomeResponsiveMenu from "../ResponsiveMenu/HomeMenu/HomeResponsiveMenu";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TrialButton } from "@/components/lightswind/trial-button";
const NavBar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="bg-[#ffffff] dark:bg-[#273041] py-3 2xl:py-3 shadow-md px-2 ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between ">
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
            <div>
              <ModeToggle />
            </div>
            <div className="hidden lg:flex items-center gap-6">
              {status === "loading" && (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
              )}
              {status === "authenticated" && session?.user && (
                <div>
                  {/* user name showing on tooltip image hover */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={session?.user?.profileImage}
                        alt="user profile image with avatar here"
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-indigo-600 p-1 cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent className={`bg-[#d176da] p-2 text-md`}>
                      <p>{session?.user?.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              )}
              <div>
                {!session?.user ? (
                  <Link href={`/auth/login`}>
                    <Button>Login</Button>
                  </Link>
                ) : (
                  <TrialButton onClick={() => signOut({ callbackUrl: "/" })}>
                    Log Out
                  </TrialButton>
                )}
              </div>
            </div>
          </div>
          <HomeResponsiveMenu />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
