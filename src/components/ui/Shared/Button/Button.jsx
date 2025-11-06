import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`rounded-[5px] font-medium text-white py-3 text-xl cursor-pointer px-12 bg-linear-to-r from-[#2f57ef] to-[#b966e7] ${className}`} 
    >
      {children}
    </button>
  );
};

export default Button;
