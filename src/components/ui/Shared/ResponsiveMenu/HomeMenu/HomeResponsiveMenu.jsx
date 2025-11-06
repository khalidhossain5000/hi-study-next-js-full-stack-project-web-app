"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedHamburgerButton from "../../AnimatedBurgerIcon/BurgerIcon";

const HomeResponsiveMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "All Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "All Instructors", path: "/instructors" },
    { name: "Premium Courses", path: "/premium-courses" },
    { name: "My Courses", path: "/my-courses" },
    { name: "My Wishlist", path: "/wishlist" },
  ];
  const pathName=usePathname()
  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
           
          <AnimatedHamburgerButton className='text-black' isOpen={isOpen} setIsOpen={setIsOpen}/>
        </SheetTrigger>
        <SheetContent className="" side="left">
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

                <div className="flex items-center gap-6">
                  {/* theme toggle will be added here soon */}
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
