'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItem = () => {
    const routes = [
      { name: "Home", path: "/" },
      { name: "All Courses", path: "/courses" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Dashboard", path: "/dashboard" },
      { name: "All Instructors", path: "/instructors"  },
      { name: "Premium Courses", path: "/premium-courses" },
      { name: "My Courses", path: "/my-courses"  },
      { name: "My Wishlist", path: "/wishlist" },
    ];
    const pathName=usePathname()
    return (
        <div>
            <ul className="flex items-center gap-6 text-[17px] font-medium ">
         
            {
                routes.map((route,i)=> <li key={i}><Link className={pathName===route.path ? "text-blue-500 font-bold text-2xl" : "text-gray-700 dark:text-white"} href={route.path}>{route.name}</Link></li>)
            }
            
        </ul>
        </div>
    );
};

export default NavItem;