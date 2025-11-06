import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const AnimatedLucideHamburger = ({ isOpen, setIsOpen, className = "" }) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`relative w-16 h-16 flex justify-center items-center cursor-pointer ${className}`}
    >
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { rotate: 0, scale: 1, y: 0 },
          open: { rotate: 360, scale: 1.3, y: -5 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          key={isOpen ? "x" : "menu"}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {isOpen ? <X size={40} className="text-black" /> : <Menu size={40} className="text-black" />}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedLucideHamburger;
