"use client";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";
import SocialLogin from "@/components/Shared/SocialLogin/SocialLogin";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const Register = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
 
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result=await signIn("credentials",{
      redirect:true,
      callbackUrl:"/",
      name,
      email,
      password
    })
   console.log(result,'result from register')
   toast.success("Registered successfully!");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e1015] text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-[#1a1f2b] rounded-2xl shadow-2xl p-8 border border-[#2b3345]"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center mb-6 text-white tracking-wide"
        >
          Create Account
        </motion.h2>

        {/* Google Login */}

        <SocialLogin />

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
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
          className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          onSubmit={handleRegister}
        >
          {/* Name Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Full Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#141824] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#394ef4] placeholder-gray-500 transition-all"
              required
              name="name"
            />
          </div>

          {/* Email Field */}
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
              name="email"
            />
          </div>

          {/* Password Field */}
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
              name="password"
            />
          </div>

          {/* Register Button */}

          <AnimatedButton
            className="bg-linear-to-r from-[#b966e7] to-[#394ef4] hover:scale-105 lg:p-6 text-white w-full"
            variant="default"
            size="default"
            glow={false}
            textEffect="normal"
            uppercase={true}
            rounded="custom"
            asChild={false}
            hideAnimations={false}
            shimmerColor="#39FF14"
            shimmerSize="0.15em"
            shimmerDuration="3s"
            borderRadius="10px"
            background="rgba(0, 0, 0, 1)"
          >
            Register
          </AnimatedButton>
        </motion.form>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-sm text-gray-400 mt-6"
        >
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-[#b966e7] font-medium hover:underline"
          >
            Login here
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Register;
