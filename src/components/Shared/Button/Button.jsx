import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center px-4 py-1 xl:px-9 xl:py-3 text-sm 2xl:px-12 overflow-hidden font-primary font-medium tracking-tighter text-white  group rounded-[5px] 2xl:text-xl cursor-pointer  bg-linear-to-r from-[#394ef4] to-[#b966e7] ${className}`}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#a818f6] rounded-full group-hover:w-56 group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-linear-to-b from-transparent via-transparent to-[#394ef4]"></span>
      <span className="relative">{children}</span>
    </button>
  );
};

export default Button;
