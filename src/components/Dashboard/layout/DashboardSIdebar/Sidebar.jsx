"use client";
import { BookOpen, House, School } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from 'framer-motion';
import { MdOutlineDonutSmall } from "react-icons/md";

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
      {
        name: "Add Course",
        path: "/dashboard/admin/add-courses",
        icon: <School className="w-5 h-5" />,
      },
      {
        name: "All Course",
        path: "/dashboard/admin/all-courses",
        icon: <MdOutlineDonutSmall  className="w-5 h-5" />,
      }, 
      {
        name: "Free Enrolled Course",
        path: "/dashboard/admin/free-enrolled",
        icon: <MdOutlineDonutSmall  className="w-5 h-5" />,
      },
      {
        name: "Premium Enrolled Course",
        path: "/dashboard/admin/premium-enroll-info",
        icon: <MdOutlineDonutSmall  className="w-5 h-5" />,
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














//NEW ONE CHECKING JUST FOR



// "use client";
// import { BookOpen, House, School, ChevronDown } from "lucide-react";
// import { useSession } from "next-auth/react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState } from "react";
// import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // ShadCN Accordion

// const Sidebar = () => {
//   const pathname = usePathname();
//   const { data: session } = useSession();
//   const role = "admin"; // just for testing
//   let sidebarRoutes = [];

//   if (role === "admin") {
//     sidebarRoutes = [
//       { name: "Dashboard Overview", path: "/dashboard", icon: <House className="w-5 h-5" /> },
//       { name: "Manage Users", path: "/dashboard/admin/manage-users", icon: <BookOpen className="w-5 h-5" /> },
//       { name: "Add Course", path: "/dashboard/admin/add-courses", icon: <School className="w-5 h-5" /> },
//       // new accordion route
//       {
//         name: "All Courses",
//         icon: <School className="w-5 h-5" />,
//         subRoutes: [
//           { name: "Free Courses", path: "/dashboard/admin/free-courses" },
//           { name: "Premium Courses", path: "/dashboard/admin/premium-courses" },
//         ],
//       },
//     ];
//   }

//   return (
//     <div className="p-0.5 bg-linear-to-r from-[#394ef4] via-[#ba66e7] to-[#00f2ff] rounded-xl ml-0 xl:ml-5">
//       <div className="bg-white dark:bg-[#192335] flex flex-col gap-4 rounded-xl p-6">
//         {sidebarRoutes.map((route, idx) => {
//           const isActive = pathname === route.path;

//           // check if this route has subRoutes (for accordion)
//           if (route.subRoutes) {
//             return (
//               <Accordion key={idx} type="single" collapsible className="w-full">
//                 <AccordionItem value={`accordion-${idx}`}>
//                   <AccordionTrigger className="flex justify-between items-center px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 border border-pink-600">
//                     <div className="flex items-center gap-3">
//                       {route.icon}
//                       <span>{route.name}</span>
//                     </div>
//                   </AccordionTrigger>
//                   <AccordionContent className="flex flex-col ml-6 mt-2">
//                     {route.subRoutes.map((sub, sidx) => {
//                       const isSubActive = pathname === sub.path;
//                       return (
//                         <Link
//                           key={sidx}
//                           href={sub.path}
//                           className={`px-3 py-2 rounded-lg transition-colors ${
//                             isSubActive
//                               ? "bg-linear-to-r from-[#394ef4] via-[#ba66e7] to-[#00f2ffdf] text-white font-semibold"
//                               : "hover:bg-gray-800 dark:hover:bg-gray-700 text-black dark:text-white"
//                           }`}
//                         >
//                           {sub.name}
//                         </Link>
//                       );
//                     })}
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             );
//           }

//           // normal link
//           return (
//             <Link
//               key={idx}
//               href={route.path}
//               className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
//                 isActive
//                   ? "bg-linear-to-r from-[#394ef4] via-[#ba66e7] to-[#00f2ffdf] text-white font-semibold"
//                   : "hover:bg-gray-800 text-black dark:text-white hover:text-white dark:hover:text-white border border-purple-600"
//               }`}
//             >
//               {route.icon}
//               <span>{route.name}</span>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
