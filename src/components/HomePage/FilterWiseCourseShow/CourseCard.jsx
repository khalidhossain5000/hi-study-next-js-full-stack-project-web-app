/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import ButtonIcon from "@/components/Shared/Button/ButtonIcon";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-2xl transition-all duration-500"
    >
      {/* Premium Badge */}
      {course.type === "premium" && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            <span>⭐</span>
            <span>PREMIUM</span>
          </div>
        </div>
      )}

      {/* Free Badge */}
      {course.type === "free" && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            FREE
          </div>
        </div>
      )}

      {/* Thumbnail Section with Enhanced Overlay */}
      <div className="relative overflow-hidden">
        <div className="relative h-52 overflow-hidden">
          <img
            src={course.courseImage}
            alt={course.courseName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Enhanced Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <Link href={`/all-courses/${course?._id}`}>
              <ButtonIcon className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl shadow-2xl">
                View Details
              </ButtonIcon>
            </Link>
            
          </motion.div>
        </div>
      </div>

      {/* Course Info Section */}
      <div className="p-6">
        {/* Title */}
       <Link href={`/all-courses/${course?._id}`}>
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
          {course.courseName}
        </h3>
       </Link>

        {/* Description Preview */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Category and Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full">
            {course.category}
          </span>
          {course.type === "premium" && course.price && (
            <div className="text-right">
              <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                ₹{course.price}
              </span>
            </div>
          )}
        </div>

        {/* Instructor Info */}
        <div className="flex items-center gap-3 py-3 border-t border-gray-200 dark:border-gray-700">
          <img
            src={course.instructorImage}
            alt={course.instructorName}
            className="w-10 h-10 rounded-full object-cover border-2 border-purple-200 dark:border-purple-800"
          />
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
              {course.instructorName}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Instructor
            </p>
          </div>
        </div>

        {/* Course Meta Info */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            {course.duration && (
              <div className="flex items-center gap-1">
                <span>⏱️</span>
                <span>{course.duration}</span>
              </div>
            )}
            {course.difficulty && (
              <div className="flex items-center gap-1">
                <span>🎯</span>
                <span className="capitalize">{course.difficulty}</span>
              </div>
            )}
          </div>

          {/* Students Count */}
          {course.maxStudents && (
            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <span>👥</span>
              <span>{course.maxStudents}</span>
            </div>
          )}
        </div>

        {/* Start Date */}
        {course.startDate && (
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500 dark:text-gray-400">Starts:</span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {new Date(course.startDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

export default CourseCard;
