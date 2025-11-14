"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Calendar, Clock, User, Tag } from "lucide-react";

const CategoryArchive = ({ categoryName }) => {
  const { data: allCourses = [], isLoading } = useQuery({
    queryKey: ["all-courses"],
    queryFn: async () => {
      const res = await axios.get("/api/public/all-courses");
      return res.data.allCourses;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );

  // Filter courses by category
  const filteredCourses = allCourses.filter(
    (course) => course.category === categoryName
  );

  if (!filteredCourses.length)
    return <p className="text-center text-red-500 py-10">No courses found!</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        {categoryName} Courses
      </h1>

      {/* COURSES GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredCourses.map((course) => {
          const startDate = new Date(course.startDate).toLocaleDateString();
          const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructorName}`;

          return (
            <div
              key={course._id}
              className="group relative rounded-2xl overflow-hidden p-[2px]
              bg-gradient-to-r from-[#394ef4] via-[#ba66e7] to-[#00f2ff] 
              shadow-xl hover:shadow-[0_0_25px_#00f2ff] hover:scale-[1.02]
              transition-all duration-300"
            >
              <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 h-full backdrop-blur-xl shadow-xl border border-white/10 dark:border-slate-700 group-hover:bg-white/95 dark:group-hover:bg-slate-900 transition-all">
                {/* Course Type Badge */}
                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold inline-block mb-3 shadow-md ${
                    course.type === "premium"
                      ? "bg-yellow-500 text-white dark:bg-yellow-600"
                      : "bg-green-500 text-white dark:bg-green-600"
                  }`}
                >
                  {course.type.toUpperCase()}
                </span>

                {/* Course Image */}
                <img
                  src={course.courseImage}
                  alt={course.courseName}
                  className="rounded-xl w-full mb-4 h-40 object-cover"
                />

                {/* Course Name */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {course.courseName}
                </h2>

                {/* Instructor Info */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={avatarUrl}
                    alt={course.instructorName}
                    className="w-10 h-10 rounded-full border border-purple-400 dark:border-purple-600"
                  />
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                    {course.instructorName}
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{startDate}</span>
                  </div>
                  {course.duration && (
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="w-4 h-4 text-pink-500" />
                      <span>{course.duration}</span>
                    </div>
                  )}
                </div>

                {/* Enroll / Price */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {course.price ? `৳ ${course.price}` : "Free"}
                  </p>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryArchive;
