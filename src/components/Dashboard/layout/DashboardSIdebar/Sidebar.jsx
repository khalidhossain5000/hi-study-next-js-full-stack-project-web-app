"use client";
import { BookOpen, House } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
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

  return (
    <div>
      <div className=" flex flex-col gap-4">
            {sidebarRoutes.map((route, idx) => {
              const isActive = pathname === route.path;
              return (
                <Link
                  key={idx}
                  href={route.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#004e66] dark:bg-[#0a8cb4] text-white font-semibold"
                      : "hover:bg-gray-800 text-black hover:text-white dark:hover:text-white "
                  }`}
                >
                  {route.icon}
                  <span>{route.name}</span>
                </Link>
              );
            })}
          </div>
     
      
    </div>
  );
};

export default Sidebar;
