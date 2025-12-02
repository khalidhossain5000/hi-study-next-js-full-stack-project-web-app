'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    // Container animation variants
    const containerVariants = {
        start: {
            transition: {
                staggerChildren: 0.2
            }
        },
        end: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Dot animation variants
    const dotVariants = {
        start: {
            y: "0%",
            scale: 1
        },
        end: {
            y: "100%",
            scale: 1.3
        }
    };

    // Rotating ring variants
    const ringVariants = {
        rotate: {
            rotate: 360,
            transition: {
                rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                }
            }
        }
    };

    // Pulsing background variants
    const pulseVariants = {
        pulse: {
            scale: [1, 1.02, 1],
            opacity: [0.3, 0.5, 0.3],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <motion.div
                className="relative"
                initial="initial"
                animate="animate"
            >
                {/* Background Pulse Effect */}
                <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
                    variants={pulseVariants}
                    animate="pulse"
                />
                
                {/* Main Loading Card */}
                <motion.div
                    className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Rotating Ring */}
                    <motion.div
                        className="absolute -top-4 -left-4 -right-4 -bottom-4 border-2 border-transparent rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                        variants={ringVariants}
                        animate="rotate"
                        style={{
                            background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)'
                        }}
                    />
                    
                    <div className="relative z-10 text-center">
                        {/* Animated Logo/Icon */}
                        <motion.div
                            className="mx-auto mb-8 relative"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 260, 
                                damping: 20,
                                delay: 0.2
                            }}
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto relative">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl"
                                    animate={{ 
                                        rotate: 360,
                                        borderRadius: ["20%", "50%", "20%"]
                                    }}
                                    transition={{
                                        rotate: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        },
                                        borderRadius: {
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }
                                    }}
                                />
                                <motion.div
                                    className="absolute inset-2 bg-slate-900 rounded-lg flex items-center justify-center"
                                    animate={{ 
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <span className="text-white font-bold text-lg">⚡</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Loading Text */}
                        <motion.h2
                            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Loading Excellence
                        </motion.h2>

                        {/* Animated Dots */}
                        <motion.div
                            className="flex justify-center space-x-2 mb-6"
                            variants={containerVariants}
                            initial="start"
                            animate="end"
                        >
                            {[0, 1, 2].map((index) => (
                                <motion.div
                                    key={index}
                                    className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                                    variants={dotVariants}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Progress Bar */}
                        <motion.div
                            className="w-full bg-white/10 rounded-full h-2 mb-4 overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>

                        {/* Percentage Text */}
                        <motion.div
                            className="text-white/60 text-sm font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            <motion.span
                                animate={{ 
                                    text: ["0%", "25%", "50%", "75%", "100%"]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                0%
                            </motion.span>
                        </motion.div>

                        {/* Subtle Description */}
                        <motion.p
                            className="text-white/40 text-xs sm:text-sm mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 }}
                        >
                            Preparing your experience...
                        </motion.p>
                    </div>
                </motion.div>

                {/* Floating Particles */}
                {[...Array(6)].map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                        initial={{
                            x: Math.random() * 400 - 200,
                            y: Math.random() * 400 - 200,
                            scale: 0
                        }}
                        animate={{
                            x: Math.random() * 400 - 200,
                            y: Math.random() * 400 - 200,
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Loading;