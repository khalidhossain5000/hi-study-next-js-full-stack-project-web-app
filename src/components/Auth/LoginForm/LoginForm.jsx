"use client";
import React, { useState } from "react";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";
import SocialLogin from "@/components/Shared/SocialLogin/SocialLogin";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      redirect: true,
      callbackUrl: "/",
      email,
      password,
      redirect: false,
    });

    if(result.ok){
      router.push(callbackUrl);
    }
   console.log(result,'login result this is sher e');
  };
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
        <SocialLogin />

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
          onSubmit={handleLogin}
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
              name="email"
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
              name="password"
            />
          </div>
          {error && <p className="text-red-200">{error}</p>}
          <AnimatedButton
            className="bg-linear-to-r from-[#b966e7] to-[#394ef4] hover:scale-105 lg:p-6 text-white w-full css"
            variant="default"
            size="default"
            glow={false}
            textEffect="glitch"
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
            Login
          </AnimatedButton>
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

export default LoginForm;
