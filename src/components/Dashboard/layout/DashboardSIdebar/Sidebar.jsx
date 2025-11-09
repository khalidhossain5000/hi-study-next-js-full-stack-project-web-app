"use client";
import { BookOpen, House } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from 'framer-motion';
const Sidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  let sidebarRoutes = [];
  // const role = session?.user?.role;
  const role = "admin";
  if (role === "admin") {
    sidebarRoutes = [
      {
        name: "Dashboard Overview",
        path: "/dashboard",
        icon: <House className="w-5 h-5" />,
      },
      {
        name: "Manage Users",
        path: "/dashboard/admin/manage-users",
        icon: <BookOpen className="w-5 h-5" />,
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
    <div className="p-0.5 bg-linear-to-r from-[#394ef4] via-[#ba66e7] to-[#00f2ff] rounded-xl ml-0 xl:ml-5" >
      <div className="bg-white dark:bg-[#192335] flex flex-col gap-4 rounded-xl p-6">
        {sidebarRoutes.map((route, idx) => {
          const isActive = pathname === route.path;
          return (
            <Link
              key={idx}
              href={route.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-linear-to-r from-[#394ef4] via-[#ba66e7] to-[#00f2ffdf] text-white font-semibold"
                  : "hover:bg-gray-800 text-black dark:text-white hover:text-white dark:hover:text-white border border-purple-600"
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
// p-1 bg-gradient-to-r from-[#394ef4] via-[#ba66e7] to-[#00f2ff] rounded-xl -- speacial gradient bg

export default Sidebar;
