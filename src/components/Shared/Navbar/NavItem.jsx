'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItem = () => {
    const {data:session}=useSession();
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
    const pathName=usePathname()
    return (
        <div className=''>
            <ul className="flex items-center gap-3 2xl:gap-5 text-[17px] font-medium ">
         
            {
                routes.map((route,i)=> <li key={i}><Link className={pathName===route.path ? "text-[#394ef4] font-semibold xl:text-xl border-b" : "text-gray-700 hover:text-blue-500 transtion duration-200 text-sm  dark:text-white"} href={route.path}>{route.name}</Link></li>)
            }
            
        </ul>
        </div>
    );
};

export default NavItem;