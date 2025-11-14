"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Calendar, Mail, BookOpen, BadgeCheck } from "lucide-react";

const PremiumEnrolledCard = () => {
  const {
    data: premiumEnrolled = [],
    isLoading,
  } = useQuery({
    queryKey: ["premium-enrolled"],
    queryFn: async () => {
      const res = await axios.get("/api/public/premium-enroll");
      return res.data.result;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 p-5">
      {premiumEnrolled.map((item) => {
        const date = new Date(item.enrollDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });

        // Generate profile avatar from email
        const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${item.studentEmail}`;

        return (
          <div
            key={item._id}
            className="group relative rounded-2xl overflow-hidden p-[2px]
            bg-gradient-to-r from-[#394ef4] via-[#ba66e7] to-[#00f2ff] 
            shadow-xl hover:shadow-[0_0_25px_#00f2ff] hover:scale-[1.02]
            transition-all duration-300"
          >
            <div
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 h-full
              backdrop-blur-xl shadow-xl border border-white/10 dark:border-slate-700
              group-hover:bg-white/95 dark:group-hover:bg-slate-900 transition-all"
            >
              
              {/* Category Badge */}
              <span
                className="px-3 py-1 text-xs rounded-full font-semibold
                bg-gray-900 text-white dark:bg-[#1e293b] dark:text-purple-300
                inline-block mb-3 shadow-md"
              >
                {item.category}
              </span>

              {/* Avatar + Email */}
              <div className="flex items-center gap-3 mt-2">
                {/* Avatar */}
                <img
                  src={avatarUrl}
                  alt="avatar"
                  className="w-12 h-12 rounded-full shadow-lg border border-purple-400 dark:border-purple-600"
                />
                <div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{item.studentEmail}</span>
                  </div>
                </div>
              </div>

              {/* Course Name */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-snug mt-4">
                {item.courseName}
              </h2>

              {/* Course ID */}
              <div className="mt-2 flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <BookOpen className="w-4 h-4 text-green-500" />
                <span>Course ID: {item.courseId}</span>
              </div>

              {/* Payment */}
              <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                Payment Method:{" "}
                <span className="font-bold uppercase">{item.paymentMethod}</span>
              </p>

              {/* Txn ID */}
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Txn ID:{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-300">
                  {item.transactionId}
                </span>
              </p>

              {/* Paid + Status */}
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  ৳ {item.paid}
                </p>

                <p
                  className="flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full
                bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                >
                  <BadgeCheck className="w-4 h-4" /> {item.paymentStatus}
                </p>
              </div>

              {/* Enroll Date */}
              <div className="mt-4 flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Calendar className="w-4 h-4 text-pink-500" />
                <span>{date}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PremiumEnrolledCard;
