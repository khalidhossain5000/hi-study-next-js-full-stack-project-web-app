import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Course Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={course.courseImage}
          alt={course.courseName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Course Info */}
      <div className="p-4">
        {/* Course Title */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
          {course.courseName}
        </h3>

        {/* Category & Type */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            {course.category}
          </span>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              course.type === "free"
                ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                : "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100"
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
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {course.instructorName}
          </p>
        </div>

        {/* Optional: Course Duration / Difficulty */}
        <div className="mt-2 flex justify-between text-sm text-gray-500 dark:text-gray-400">
          {course.duration && <span>{course.duration}</span>}
          {course.difficulty && <span>{course.difficulty}</span>}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
