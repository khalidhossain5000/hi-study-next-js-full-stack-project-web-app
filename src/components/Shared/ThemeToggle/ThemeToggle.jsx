"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: { rotate: 360, scale: [1, 1.2, 1], transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const buttonVariants = {
    light: { backgroundColor: "#facc15", borderColor: "#eab308" },
    dark: { backgroundColor: "#1f2937", borderColor: "#fcd34d" },
  };

  return (
    <motion.button
      size="icon"
      className="flex items-center justify-center w-12 h-12 p-2 rounded-full cursor-pointer"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variants={buttonVariants}
      animate={isDark ? "dark" : "light"}
      whileHover={{ scale: 1.15, rotate: 8 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? (
        <motion.div
          key="moon"
          variants={iconVariants}
          initial="initial"
          animate="animate"
        >
          <Moon className="w-6 h-6 text-white" />
        </motion.div>
      ) : (
        <motion.div
          key="sun"
          variants={iconVariants}
          initial="initial"
          animate="animate"
        >
          <Sun className="w-6 h-6 text-yellow-600" />
        </motion.div>
      )}
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
