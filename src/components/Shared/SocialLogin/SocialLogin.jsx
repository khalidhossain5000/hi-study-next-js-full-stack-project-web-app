'use client'
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

const SocialLogin = () => {
    const [loading, setLoading] = useState(false);
     const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signIn("google", { redirect: false,callbackUrl: "/" });
      console.log(result);
       setLoading(false);
    } catch (error) {
      console.error(error);
     setLoading(false);
    }
  };
    return (
        <motion.button
        onClick={handleGoogleSignIn}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full py-3 mb-4 flex items-center justify-center gap-3 bg-[#222b3b] border border-[#394ef4]/30 hover:border-[#394ef4] text-white font-medium rounded-lg shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
        >
          <FcGoogle size={22} />
            <span>{loading ? 'Loading...' : 'Continue with Google'}</span>
        </motion.button>
    );
};

export default SocialLogin;