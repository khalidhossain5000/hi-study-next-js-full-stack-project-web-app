/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import ButtonIcon from "@/components/Shared/Button/ButtonIcon";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Thumbnail Section */}
      <div className="relative overflow-hidden">
        <img
          src={course.courseImage}
          alt={course.courseName}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Dark overlay + Button */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pb-6"
          >
            <ButtonIcon className="">View Details</ButtonIcon>
          </motion.div>
        </div>
      </div>

      {/* Course Info Section */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 line-clamp-2">
          {course.courseName}
        </h3>

        {/* Category and Type */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {course.category}
          </span>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              course.type === "free"
                ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                : "bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-100"
            }`}
          >
            {course.type.toUpperCase()}
          </span>
        </div>

        {/* Instructor */}
        <div className="flex items-center mt-2">
          <img
            src={course.instructorImage}
            alt={course.instructorName}
            className="w-8 h-8 rounded-full mr-2 object-cover border border-gray-300 dark:border-gray-600"
          />
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {course.instructorName}
          </p>
        </div>

        {/* Optional Details */}
        <div className="mt-3 flex justify-between text-sm text-gray-500 dark:text-gray-400">
          {course.duration && <span>{course.duration}</span>}
          {course.difficulty && <span> {course.difficulty}</span>}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
