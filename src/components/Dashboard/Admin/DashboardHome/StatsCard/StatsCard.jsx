"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Users, BookOpen, Crown } from "lucide-react";

const StatsCard = () => {
  const {
    data: stats = {},
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axios.get("/api/admin/stats");
      return res.data.stats;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-red-500 text-center">
          <p>Error loading stats</p>
          <button
            onClick={() => refetch()}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );

  const statCards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: Users,
      bgGradient: "bg-gradient-to-tr from-blue-400 to-blue-200",
      textColor: "text-blue-700 dark:text-gray-900",
    },
    {
      title: "Total Courses",
      value: stats.totalCourses,
      icon: BookOpen,
      bgGradient: "bg-gradient-to-tr from-green-400 to-green-200",
      textColor: "text-green-700 dark:text-gray-900",
    },
    {
      title: "Premium Revenue",
      value: `$${stats.premiumRevenue}`,
      icon: Crown,
      bgGradient: "bg-gradient-to-tr from-yellow-400 to-yellow-200",
      textColor: "text-yellow-700 dark:text-gray-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {statCards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${card.bgGradient} dark:bg-gray-800`}
          >
            <div className="absolute top-4 right-4 opacity-20 scale-150">
              <IconComponent size={80} />
            </div>
            <div className="relative z-10">
              <h3 className={`text-lg font-semibold mb-2 ${card.textColor}`}>
                {card.title}
              </h3>
              <p className={`text-3xl font-bold ${card.textColor}`}>
                {card.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCard;
