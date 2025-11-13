"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ReactPlayer from "react-player";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 

const EnrolledLayout = ({ courseId }) => {
  const { data: allCourses = [], isLoading } = useQuery({
    queryKey: ["all-courses"],
    queryFn: async () => {
      const res = await axios.get("/api/public/all-courses");
      return res.data.allCourses;
    },
  });

  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedLessonTitle, setSelectedLessonTitle] = useState("");
  if (isLoading) return <p>Course data loading...</p>;

  const singleEnrollDataInfo = allCourses.find((c) => c._id === courseId);
  if (!singleEnrollDataInfo) return <p>Course not found!</p>;

  const chapters = singleEnrollDataInfo.chapters;

  console.log(selectedLessonTitle);
  return (
    <div className="flex gap-6 p-6">
      {/* Left Side Accordion */}
      <div className="w-[25%] border-r border-gray-200 pr-4">
        <h2 className="text-xl font-semibold mb-4">
          {singleEnrollDataInfo.courseName}
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {chapters.map((chapter, idx) => (
            <AccordionItem key={idx} value={`chapter-${idx}`}>
              <AccordionTrigger className="text-lg font-medium">
                {chapter.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-1 mt-2">
                {chapter.lessons.map((lesson, lidx) => (
                  <button
                    key={lidx}
                    className={`text-left px-3 py-2 rounded hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 ${
                      selectedVideo === lesson.videoUrl
                        ? "bg-gray-200 dark:bg-gray-900 font-semibold"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedVideo(lesson.videoUrl);
                      setSelectedLessonTitle(lesson?.title);
                    }}
                  >
                    {lesson.title || `Lesson ${lidx + 1}`}
                  </button>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Right Side Video Player */}
      <div className="w-[75%] flex flex-col items-center justify-start">
        <div>
          {selectedLessonTitle ? (
            <h2 className="text-xl lg:text-2xl text-center text-gray-900 font-bold dark:text-gray-100 pb-6">
              Title : {selectedLessonTitle}
            </h2>
          ) : (
            "Select A Lesson To Get Started"
          )}
        </div>

        {selectedVideo ? (
          <ReactPlayer
            src={selectedVideo}
            controls
            width="100%"
            height="480px"
            className="rounded shadow-lg"
          />
        ) : (
          <p className="text-gray-500">Select a lesson to watch video</p>
        )}
      </div>
    </div>
  );
};

export default EnrolledLayout;
