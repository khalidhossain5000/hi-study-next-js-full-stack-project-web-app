"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedHamburgerButton from "../../AnimatedBurgerIcon/BurgerIcon";
import { ModeToggle } from "../../ThemeToggle/ThemeToggle";
import { Button } from "@/components/ui/button";
import { TrialButton } from "@/components/lightswind/trial-button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import { useSession } from "next-auth/react";

const HomeResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const user=session?.user;
    const routes = [
      { name: "Home", path: "/" },
      { name: "All Courses", path: "/all-courses" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      //   { name: "All Instructors", path: "/instructors"  },
      //   { name: "Premium Courses", path: "/premium-courses" },
      
    //   { name: "My Wishlist", path: "/wishlist" },
    ];
    if(user){
  routes.push({ name: "Dashboard", path: "/dashboard" });
  routes.push({ name: "My Courses", path: "/dashboard/students/my-courses" });
}
  const pathName = usePathname();
   
  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <AnimatedHamburgerButton
            className="text-black"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </SheetTrigger>
        <SheetContent className="dark:border-none" side="left">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <div className="h-[90vh] flex flex-col justify-between">
              <div className="flex flex-col justify-between h-full">
                {/* menu-items */}

                <ul className="space-y-2 my-6 text-[19px] font-medium ">
                  {routes.map((route, i) => (
                    <li key={i}>
                      <Link
                        className={
                          pathName === route.path
                            ? "text-[#394ef4] font-semibold text-2xl"
                            : "text-gray-700 hover:text-blue-500 transtion duration-200  dark:text-white"
                        }
                        href={route.path}
                      >
                        {route.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* theme toggle and login button */}

                <div className="flex items-center justify-between gap-4 mb-4">
                  <ModeToggle />
                  <div className="flex items-center gap-6">
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
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HomeResponsiveMenu;
