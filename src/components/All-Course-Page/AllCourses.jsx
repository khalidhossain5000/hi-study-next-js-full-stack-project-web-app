"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import CoursePageCard from "./CoursePageCard";

const AllCourses = () => {
  const { data: allCourses = [], isLoading } = useQuery({
    queryKey: ["all-courses"],
    queryFn: async () => {
      const res = await axios.get("/api/public/all-courses");
      return res.data.allCourses;
    },
  });

  if (isLoading) return <p>Course data loading...</p>;
  return (
    <div>
      <div className="pt-[60px] pb-[235px] bg-linear-to-tl from-[#8a9df6] via-[#d1cdf9] to-[#be99f1] dark:bg-gradient-to-tl dark:from-[#4b3c7a] dark:via-[#5c4d8b] dark:to-[#7a5fb0]
">
        <div className="contentss max-w-7xl mx-auto text-center lg:text-left">
          <div className="texts flex items-center gap-6 px-2 xl:px-0">
            <h2 className="text-2xl lg:text-3xl xl:text-[44px] text-[#192335] lg:text-left text-center font-semibold font-gabriela dark:text-gray-100">
              All Courses
            </h2>
            <div className="coursecount rbt">
              <h2 className="text-[17px] font-semibold">
                🎉 {allCourses.length} Courses
              </h2>
            </div>
          </div>
          <div>
            <p className="text-[16px] dark:text-white text-[#192335] mt-5">
              Courses that help beginner designers become true unicorns.
            </p>
          </div>
        </div>
      </div>

      {/* course card */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-12">
        {allCourses.map((course) => (
          <CoursePageCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
