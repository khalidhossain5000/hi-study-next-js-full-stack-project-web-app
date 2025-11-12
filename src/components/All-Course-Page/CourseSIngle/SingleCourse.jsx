"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const SingleCourse = ({ courseId }) => {
  const { data: allCourses = [], isLoading } = useQuery({
    queryKey: ["all-courses"],
    queryFn: async () => {
      const res = await axios.get("/api/public/all-courses");
      return res.data.allCourses;
    },
  });

  if (isLoading) return <p>Course data loading...</p>;
  const singleData = allCourses.find((c) => c._id === courseId);
const{courseName,type,category,startDate,publishedAt,instructorName}=singleData
  return (
    <div>
      {/* banner */}
      <div
        className="pt-[60px] pb-[235px] bg-linear-to-tl from-[#8a9df6] via-[#d1cdf9] to-[#be99f1] dark:bg-gradient-to-tl dark:from-[#4b3c7a] dark:via-[#5c4d8b] dark:to-[#7a5fb0]
"
      >
        <div className="contentss max-w-7xl mx-auto text-center lg:text-left">
          <div className=" px-2 xl:px-0">
             <h5 className="text-center text-[18px] md:text-xl lg:text-3xl xl:text-5xl font-medium xl:font-black font-gabriela bg-linear-to-t from-[#394ef4] to-[#b966e7] bg-clip-text text-transparent">
           {courseName}
          </h5>

<div className="flex items-center gap-5 border-y justify-center py-6 mt-12 border-dashed border-gray-600">
<div className="coursecount rbt">
              <h2 className="text-[17px] font-semibold">
                {category}
              </h2>

            </div>

            <div className="types rbt">
                <h2><h2 className={`text-[17px] font-semibold ${type==='premium' ? 'text-emerald-500' : 'text-black'}`}>
                {type}
              </h2></h2>
            </div>
</div>
            
          </div>
          <div>
            <p className="text-[16px] dark:text-white text-[#192335] mt-5">
              Courses that help beginner designers become true unicorns.
            </p>
          </div>
        </div>
      </div>
      {/* course items */}
    </div>
  );
};

export default SingleCourse;
