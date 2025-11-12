"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Clock8, Hourglass, Play, UserRoundCog } from "lucide-react";
import React from "react";
import PreviewAccordion from "./CourseContentPrveviewAccordion/PreviewAccordion";
import VideoPreview from "./CourseContentPrveviewAccordion/VideoPreview";
import ButtonIcon from "@/components/Shared/Button/ButtonIcon";
import Button from "@/components/Shared/Button/Button";

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
  const {
    courseName,
    type,
    category,
    startDate,
    publishedAt,
    instructorName,
    chapters,
    courseImage,
  } = singleData;
  const formattedDate = new Date(publishedAt)
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("-");

  const formattedStart = new Date(startDate)
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("-");
  console.log(singleData);
  return (
    <div>
      {/* banner */}
      <div
        className="py-22 xl:py-44 bg-linear-to-tl from-[#8a9df6] via-[#d1cdf9] to-[#be99f1] dark:bg-gradient-to-tl dark:from-[#10013e] dark:via-[#1e3065] dark:to-[#d906f1]
"
      >
        <div className="contentss max-w-7xl mx-auto text-center lg:text-left">
          <div className=" px-2 xl:px-0">
            <h5 className="text-center text-[18px] md:text-xl lg:text-3xl xl:text-5xl font-medium xl:font-black font-gabriela bg-linear-to-t from-[#394ef4] to-[#b966e7] dark:from-[#d906f1] dark:via-[#d1cdf9] dark:to-[#394ef4] bg-clip-text text-transparent">
              {courseName}
            </h5>

            <div className="flex items-center gap-5 border-y justify-center py-6 mt-12 border-dashed border-gray-600">
              <div className="coursecount rbt">
                <h2 className="text-[17px] font-semibold">{category}</h2>
              </div>

              <div className="types rbt">
                <h2
                  className={`text-[17px] font-semibold ${
                    type === "premium" ? "text-emerald-500" : "text-black"
                  }`}
                >
                  {type}
                </h2>
              </div>
            </div>
          </div>
          {/* more info */}
          <div className="flex items-center justify-center gap-5 pt-6">
            <h2 className=" flex gap-3 items-center text-sm text-gray-700 dark:text-gray-100  font-semibold">
              <UserRoundCog
                size={40}
                className="bg-[#d3dafd] dark:bg-indigo-900 p-2 rounded-full text-black dark:text-gray-100"
              />
              By{" "}
              <span className="font-medium  text-gray-900 dark:text-gray-100">
                {instructorName}
              </span>
            </h2>

            {/* published date */}
            <h2 className=" flex gap-3 items-center text-sm text-gray-700 dark:text-gray-100  font-semibold">
              <Clock8
                size={40}
                className="bg-[#d3dafd] dark:bg-indigo-900 p-2 rounded-full text-black dark:text-gray-100"
              />
              Published{" "}
              <span className="font-medium dark:text-gray-100  text-gray-900">
                {formattedDate}
              </span>
            </h2>

            {/* published date */}
            <h2 className=" flex gap-3 items-center text-sm text-gray-700 dark:text-gray-100 font-semibold">
              <Hourglass
                size={40}
                className="bg-[#d3dafd] dark:bg-indigo-900 p-2 rounded-full text-black dark:text-gray-100"
              />
              Start Date :{" "}
              <span className="font-medium  text-gray-900 dark:text-gray-100">
                {formattedStart}
              </span>
            </h2>
          </div>
        </div>
      </div>
      {/* course items */}
      {/* Accodion start with layout of video play */}
      <div className="container mx-auto flex items-center mt-12">
        <div className="pb-14 flex-3">
          <PreviewAccordion chaptersData={chapters} />
        </div>
        {/* preview video div conatiner */}
        <div className="flex-1 p-6 border-2 border-pink-600 rounded-lg">
          <VideoPreview singleData={singleData}/>
          {/* other contents */}
          <div className=" py-6 ">
            {singleData?.type ==='free' && <button className="px-4 py-1 xl:px-9 xl:py-3 text-sm 2xl:px-12 overflow-hidden font-primary font-medium tracking-tighter text-white  group rounded-[5px] 2xl:text-xl cursor-pointer  bg-linear-to-r from-[#394ef4] to-[#b966e7] w-full">Enroll Now</button>}

            {/* add card */}

            <div>
              {/* prices */}
              {
                singleData?.type==='premium' && <h2 className="text-gray-900 font-bold pb-5 text-xl">${singleData?.price}</h2>
              }
              {
              singleData?.type==='premium' && <button className="px-4 py-1 xl:px-9 xl:py-3 text-sm 2xl:px-12 overflow-hidden font-primary font-medium tracking-tighter text-white  group rounded-[5px] 2xl:text-xl cursor-pointer  bg-linear-to-r from-[#394ef4] to-[#b966e7] w-full">Add To Cart</button>
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
