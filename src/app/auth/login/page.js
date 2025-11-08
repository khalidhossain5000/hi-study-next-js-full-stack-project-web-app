"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e1015] text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-[#1a1f2b] rounded-2xl shadow-2xl p-8 border border-[#2b3345]"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center mb-6 text-white tracking-wide"
        >
          Welcome Back 👋
        </motion.h2>

        {/* Google Login */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full py-3 mb-4 flex items-center justify-center gap-3 bg-[#222b3b] border border-[#394ef4]/30 hover:border-[#394ef4] text-white font-medium rounded-lg shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
        >
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </motion.button>

        {/* Admin Login */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full py-3 mb-4 flex items-center justify-center gap-3 bg-transparent border border-[#394ef4]/50 hover:bg-linear-to-r hover:from-[#394ef4] hover:to-[#b966e7] font-medium rounded-lg transition-all duration-300"
        >
          <Shield size={20} className="text-[#b966e7]" />
          <span>Login as Admin</span>
        </motion.button>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center my-6"
        >
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-3 text-gray-400 text-sm uppercase tracking-wide">
            or
          </span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </motion.div>

        {/* Login Form */}
        <motion.form
          className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Email Address
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#141824] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#394ef4] placeholder-gray-500 transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#141824] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#394ef4] placeholder-gray-500 transition-all"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-[#394ef4] to-[#b966e7] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all"
          >
            Login
          </motion.button>
        </motion.form>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-gray-400 mt-6"
        >
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-[#b966e7] font-medium hover:underline"
          >
            Register now
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
