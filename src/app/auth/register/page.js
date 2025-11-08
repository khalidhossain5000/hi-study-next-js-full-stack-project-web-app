"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e1015] text-white px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-[#1a1f2b] rounded-2xl shadow-2xl p-8 border border-[#2b3345]"
      >
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-6 text-white tracking-wide"
        >
          Create Account ✨
        </motion.h2>

        {/* Google Login */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 mb-4 flex items-center justify-center gap-3 bg-[#222b3b] border border-[#394ef4]/30 hover:border-[#394ef4] text-white font-medium rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
        >
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </motion.button>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="flex items-center my-6"
        >
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-3 text-gray-400 text-sm uppercase tracking-wide">
            or
          </span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </motion.div>

        {/* Register Form */}
        <motion.form
          variants={itemVariants}
          className="space-y-5"
        >
          <motion.div variants={itemVariants}>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Full Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02, boxShadow: "0 0 10px #394ef4" }}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#141824] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#394ef4] placeholder-gray-500 transition-all"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Email Address
            </label>
            <motion.input
              whileFocus={{ scale: 1.02, boxShadow: "0 0 10px #394ef4" }}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#141824] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#394ef4] placeholder-gray-500 transition-all"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.02, boxShadow: "0 0 10px #394ef4" }}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#141824] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#394ef4] placeholder-gray-500 transition-all"
              required
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-[#394ef4] to-[#b966e7] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all"
          >
            Register
          </motion.button>
        </motion.form>

        {/* Bottom Text */}
        <motion.p
          variants={itemVariants}
          className="text-center text-sm text-gray-400 mt-6"
        >
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-[#b966e7] font-medium hover:underline"
          >
            Login here
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
