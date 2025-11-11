import React from "react";

const CategoryButton = ({ children, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 rounded-full font-medium transition-all duration-300
        border-2
        ${
          active
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg"
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600"
        }
        hover:scale-105
      `}
    >
      {children}
    </button>
  );
};

export default CategoryButton;
