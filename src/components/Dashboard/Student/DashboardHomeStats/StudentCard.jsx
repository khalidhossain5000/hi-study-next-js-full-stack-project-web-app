'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React from 'react';
import { BookOpen, Users, Crown, GraduationCap, TrendingUp, Star, Award, Rocket } from 'lucide-react';

const StudentCard = () => {
    const { data: session } = useSession();
    const email = session?.user?.email;
    
    const {
        data: userStats = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["student current login stats", email],
        queryFn: async () => {
            const res = await axios.get(`/api/student/dashboard-stats?email=${email}`);
            return res.data.studentStats;
        },
        enabled: !!session?.user?.email,
    });

    // Enhanced card configuration with beautiful gradients and icons
    const getCardConfig = (label) => {
        const configs = {
            "Total Enrolled Courses": {
                icon: BookOpen,
                gradient: "from-blue-500 to-purple-600",
                lightBg: "bg-gradient-to-br from-blue-50 to-purple-50",
                darkBg: "bg-gradient-to-br from-blue-900/20 to-purple-900/20",
                textColor: "text-blue-600 dark:text-blue-400",
                accentColor: "bg-blue-500"
            },
            "Free Enrolled Courses": {
                icon: Users,
                gradient: "from-green-500 to-teal-600",
                lightBg: "bg-gradient-to-br from-green-50 to-teal-50",
                darkBg: "bg-gradient-to-br from-green-900/20 to-teal-900/20",
                textColor: "text-green-600 dark:text-green-400",
                accentColor: "bg-green-500"
            },
            "Premium Enrolled Courses": {
                icon: Crown,
                gradient: "from-amber-500 to-orange-600",
                lightBg: "bg-gradient-to-br from-amber-50 to-orange-50",
                darkBg: "bg-gradient-to-br from-amber-900/20 to-orange-900/20",
                textColor: "text-amber-600 dark:text-amber-400",
                accentColor: "bg-amber-500"
            }
        };
        return configs[label] || {
            icon: GraduationCap,
            gradient: "from-gray-500 to-gray-600",
            lightBg: "bg-gradient-to-br from-gray-50 to-gray-100",
            darkBg: "bg-gradient-to-br from-gray-900/20 to-gray-800/20",
            textColor: "text-gray-600 dark:text-gray-400",
            accentColor: "bg-gray-500"
        };
    };

    if (isLoading)
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-4">
                    Learning Dashboard
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Track your learning progress and achievements
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userStats.map((stat, index) => {
                    const config = getCardConfig(stat.label);
                    const IconComponent = config.icon;
                    
                    return (
                        <div
                            key={index}
                            className={`
                                relative overflow-hidden rounded-2xl p-8 
                                transition-all duration-500 ease-out
                                hover:scale-105 hover:shadow-2xl
                                border border-gray-200 dark:border-gray-700
                                ${config.lightBg} dark:${config.darkBg}
                                group cursor-pointer
                            `}
                        >
                            {/* Background Icon */}
                            <div className={`absolute -right-6 -top-6 opacity-10 group-hover:opacity-20 transition-all duration-500 ${config.textColor}`}>
                                <IconComponent className="w-32 h-32" />
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon Badge */}
                                <div className={`inline-flex p-3 rounded-2xl ${config.accentColor} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className="w-6 h-6 text-white" />
                                </div>

                                {/* Stat Number */}
                                <div className="mb-2">
                                    <span className="text-5xl font-bold text-gray-800 dark:text-white block">
                                        {stat.count}
                                    </span>
                                    <div className="flex items-center gap-2 mt-2">
                                        <TrendingUp className={`w-4 h-4 ${config.textColor}`} />
                                        <span className={`text-sm font-semibold ${config.textColor}`}>
                                            Active Courses
                                        </span>
                                    </div>
                                </div>

                                {/* Label */}
                                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                                    {stat.label}
                                </h3>

                                {/* Progress Indicator */}
                                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    <span>Progress</span>
                                    <span>{Math.min(stat.count * 10, 100)}%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                    <div 
                                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${config.accentColor}`}
                                        style={{ 
                                            width: `${Math.min(stat.count * 10, 100)}%` 
                                        }}
                                    />
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                                    <Star className={`w-8 h-8 ${config.textColor}`} />
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                                <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-900" />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Achievement Section */}
            {userStats.some(stat => stat.count > 0) && (
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                        <Rocket className="w-5 h-5" />
                        <span className="font-semibold">Keep going! You are doing amazing</span>
                        <Award className="w-5 h-5" />
                    </div>
                </div>
            )}

            {/* Empty State */}
            {userStats.length === 0 && !isLoading && (
                <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                        <GraduationCap className="w-10 h-10 text-gray-500 dark:text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                        Start Your Learning Journey
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                        Enroll in courses to see your statistics and track your progress here.
                    </p>
                    <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Browse Courses
                    </button>
                </div>
            )}
        </div>
    );
};

export default StudentCard;