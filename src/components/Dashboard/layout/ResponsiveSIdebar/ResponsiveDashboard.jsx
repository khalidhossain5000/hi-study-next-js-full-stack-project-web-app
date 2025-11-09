
"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AnimatedHamburgerButton from "../../../Shared/AnimatedBurgerIcon/BurgerIcon";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, House } from "lucide-react";
import { ModeToggle } from "@/components/Shared/ThemeToggle/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";


const ResponsiveDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
   const { data: session } = useSession();
  let sidebarRoutes = [];
  const role = session?.user?.role;
  if (role === "admin") {
    sidebarRoutes = [
      {
        name: "Dashboard Overview",
        path: "/dashboard",
        icon: <House className="w-5 h-5" />,
      },
    ];
  }
  // user route starts here
  if (role === "student") {
    sidebarRoutes = [
      {
        name: "Dashboard Overview",
        path: "/dashboard",
        icon: <House className="w-5 h-5" />,
      },
      {
        name: "My Courses",
        path: "/my-courses",
        icon: <BookOpen className="w-5 h-5" />,
      },
    ];
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
                  {sidebarRoutes.map((route, i) => (
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
                  <Button>Login</Button>
                </div>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ResponsiveDashboard;
