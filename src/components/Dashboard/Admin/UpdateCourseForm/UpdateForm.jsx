"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as ShadCalendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { PlusCircle, Video } from "lucide-react";
import ImageUpload from "../../layout/HandleImageUpload/CourseThumbnail/ImageUploader";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ChapterForm from "../Add-Course-Form/ChapterForm";
import PremiumChapterForm from "../Add-Course-Form/PremiumChapterForm";

// Options
const CATEGORY_OPTIONS = [
  "Web-Development",
  "Data-Science",
  "Mobile-Development",
  "Design",
  "Marketing",
  "AI-&-ML",
];

const UpdateForm = ({ courseId }) => {
  const { data: allCourses = [], isLoading } = useQuery({
    queryKey: ["all-courses"],
    queryFn: async () => {
      const res = await axios.get("/api/public/all-courses");
      return res.data.allCourses;
    },
  });

  const singleCourse = allCourses.find((c) => c._id === courseId);

  const [courseImage, setCourseImage] = useState(singleCourse?.courseImage || null);
  const [instructorImage, setInstructorImage] = useState(singleCourse?.instructorImage || null);
  const [startDate, setStartDate] = useState(singleCourse?.startDate ? new Date(singleCourse.startDate) : null);
  const [endDate, setEndDate] = useState(singleCourse?.endDate ? new Date(singleCourse.endDate) : null);
  const [startTime, setStartTime] = useState(singleCourse?.startTime || "");

  const { register, handleSubmit, watch, control, reset } = useForm({
    defaultValues: {
      courseName: singleCourse?.courseName || "",
      instructorName: singleCourse?.instructorName || "",
      category: singleCourse?.category || "",
      difficulty: singleCourse?.difficulty || "",
      duration: singleCourse?.duration || "",
      description: singleCourse?.description || "",
      type: singleCourse?.type || "free",
      price: singleCourse?.coursePrice?.toString() || "",
      maxStudents: singleCourse?.maxStudents?.toString() || "",
      batchName: singleCourse?.batchName || "",
      chapters:
        singleCourse?.chapters?.length > 0
          ? singleCourse.chapters
          : [{ title: "", lessons: [{ title: "", videoUrl: "" }] }],
      courseContents:
        singleCourse?.courseContents?.length > 0
          ? singleCourse.courseContents
          : [{ title: "", lessons: [{ title: "" }] }],
    },
  });

  // Free course chapters
  const {
    fields: chapterFields,
    append: addChapter,
    remove: removeChapter,
  } = useFieldArray({
    control,
    name: "chapters",
  });

  // Premium course content
  const {
    fields: courseContentsFields,
    append: appendPremiumChapter,
    remove: removePremiumChapter,
  } = useFieldArray({
    control,
    name: "courseContents",
  });

  const watchType = watch("type");

  const onSubmit = async (data) => {
    const courseData = {
      ...data,
      coursePrice: Number(data?.price),
      maxStudents: Number(data?.maxStudents),
      courseImage,
      instructorImage,
      startDate,
      endDate,
      startTime,
    };

    console.log("Updated Course Data:", courseData);

    const res = await axios.put(`/api/admin/update-course?id=${courseId}`, courseData);
    console.log("Response:", res);

    reset();
  };

  if (!singleCourse) return <p className="text-center text-gray-500">Loading...</p>;
















  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-5 px-1 md:px-2 lg:px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-5 lg:p-8 border border-gray-300 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-[#b966e7] to-[#394ef4] bg-clip-text text-transparent">
          Update Course
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Course & Instructor Image Upload */}
          <div className="grid md:grid-cols-2 gap-3">
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-3">
              <label className="block m-2 lg:m-0 lg:mb-2 font-medium">
                Course Thumbnail
              </label>
              <ImageUpload
                onUpload={(url) => setCourseImage(url)}
                imageUrl={singleCourse?.courseImage}
              />
            </div>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-3">
              <label className="block m-2 lg:m-0 lg:mb-2 font-medium">
                Instructor Image
              </label>
              <ImageUpload
                onUpload={(url) => setInstructorImage(url)}
                imageUrl={singleCourse?.instructorImage}
              />
            </div>
          </div>

          {/* Main Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <input {...register("courseName")} placeholder="Course Title" className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
            <select {...register("category")} className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
              <option value="">Select Category</option>
              {CATEGORY_OPTIONS.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <input {...register("instructorName")} placeholder="Instructor Name" className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
            <select {...register("type")} className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
              <option value="free">Free</option>
              <option value="premium">Premium</option>
            </select>
            <select {...register("difficulty")} className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
              <option value="">Difficulty Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <input {...register("duration")} placeholder="Duration (e.g. 6 weeks)" className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
          </div>

          <textarea {...register("description")} rows={4} placeholder="Course Description" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />

          {/* Free Course Chapters */}
          {watchType === "free" && (
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Video className="w-5 h-5 text-[#b966e7]" /> Chapters & Lessons
              </h3>
              {chapterFields.map((chapter, idx) => (
                <ChapterForm key={chapter.id} control={control} chapterIndex={idx} removeChapter={removeChapter} />
              ))}
              <button type="button" onClick={() => addChapter({ title: "", lessons: [{ title: "", videoUrl: "" }] })} className="flex items-center gap-2 text-[#b966e7] hover:text-[#8d4dc0]">
                <PlusCircle size={18} /> Add Chapter
              </button>
            </div>
          )}

          {/* Premium Course Content */}
          {watchType === "premium" && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <input {...register("price")} type="number" placeholder="Price" className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                <input {...register("maxStudents")} type="number" placeholder="Max Students" className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                <input {...register("batchName")} placeholder="Batch Name" className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Video className="w-5 h-5 text-[#b966e7]" /> Course Content
                </h3>
                {courseContentsFields.map((chapter, idx) => (
                  <PremiumChapterForm key={chapter.id} control={control} chapterIndex={idx} removeChapter={removePremiumChapter} />
                ))}
                <button type="button" onClick={() => appendPremiumChapter({ title: "", lessons: [{ title: "" }] })} className="flex items-center gap-2 text-[#b966e7] hover:text-[#8d4dc0]">
                  <PlusCircle size={18} /> Add Lecture
                </button>
              </div>
            </div>
          )}

          <button type="submit" className="w-full py-3 bg-gradient-to-r from-[#394ef4] to-[#b966e7] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all">
            Update Course
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateForm;
