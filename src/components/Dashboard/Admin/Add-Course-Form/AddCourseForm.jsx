/* eslint-disable react-hooks/incompatible-library */
"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as ShadCalendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { PlusCircle, Video } from "lucide-react";
import ImageUpload from "../../layout/HandleImageUpload/CourseThumbnail/ImageUploader";
import ChapterForm from "./ChapterForm";

// Options
const CATEGORY_OPTIONS = [
  "Web Development",
  "Data Science",
  "Mobile Development",
  "Design",
  "Marketing",
  "AI & ML",
];


const CourseForm = () => {
  const [courseImage, setCourseImage] = useState(null);
  const [instructorImage, setInstructorImage] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState("");

  const { register, handleSubmit, watch, control, reset } = useForm({
    defaultValues: {
      type: "free",
      chapters: [{ title: "", lessons: [{ title: "", videoUrl: "" }] }],
    },
  });

  const { fields: chapterFields, append: addChapter, remove: removeChapter } = useFieldArray({
    control,
    name: "chapters",
  });

  const watchType = watch("type");

  const onSubmit = (data) => {
    console.log("Course Data:", { ...data, courseImage, instructorImage, startDate, endDate, startTime });
    reset();
    setCourseImage(null);
    setInstructorImage(null);
    setStartDate(null);
    setEndDate(null);
    setStartTime("");
  };



  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-5 px-1 md:px-2 lg:px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-5 lg:p-8 border border-gray-300 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-[#b966e7] to-[#394ef4] bg-clip-text text-transparent">
          Add New Course
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Course & Instructor Image Upload */}
          <div className="grid md:grid-cols-2 gap-3 ">
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-3">
              <label className="block m-2 lg:m-0  lg:mb-2 font-medium">Course Thumbnail</label>
              <ImageUpload onUpload={(url) => setCourseImage(url)} imageUrl={courseImage} />
            </div>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-3">
              <label className="block m-2 lg:m-0 lg:mb-2 font-medium">Instructor Image</label>
              <ImageUpload onUpload={(url) => setInstructorImage(url)} imageUrl={instructorImage} />
            </div>
          </div>

          {/* Two-column main fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              {...register("title")}
              placeholder="Course Title"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
            <select {...register("category")} className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
              <option value="">Select Category</option>
              {CATEGORY_OPTIONS.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>

            <input
              {...register("instructorName")}
              placeholder="Instructor Name"
              className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />

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

          {/* Course Description */}
          <textarea
            {...register("description")}
            rows={4}
            placeholder="Course Description"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />

          {/* Free Course Chapters + Lessons */}
          {watchType === "free" && (
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Video className="w-5 h-5 text-[#b966e7]" /> Chapters & Lessons
              </h3>
              {chapterFields.map((chapter, idx) => (
                <ChapterForm
                  key={chapter.id}
                  control={control}
                  chapterIndex={idx}
                  removeChapter={removeChapter}
                />
              ))}
              <button
                type="button"
                onClick={() => addChapter({ title: "", lessons: [{ title: "", videoUrl: "" }] })}
                className="flex items-center gap-2 text-[#b966e7] hover:text-[#8d4dc0]"
              >
                <PlusCircle size={18} /> Add Chapter
              </button>

              {/* Free Course Start/End Dates */}
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block mb-2 font-medium">Start Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full dark:bg-gray-700 dark:border-gray-600">
                        {startDate ? format(startDate, "PPP") : "Select Start Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 dark:bg-gray-800">
                      <ShadCalendar mode="single" selected={startDate} onSelect={setStartDate} />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="block mb-2 font-medium">End Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full dark:bg-gray-700 dark:border-gray-600">
                        {endDate ? format(endDate, "PPP") : "Select End Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 dark:bg-gray-800">
                      <ShadCalendar mode="single" selected={endDate} onSelect={setEndDate} />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          )}

          {/* Premium Course Fields */}
          {watchType === "premium" && (
            <div className="grid md:grid-cols-2 gap-6">
              <input {...register("price")} type="number" placeholder="Price" className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
              <input {...register("maxStudents")} type="number" placeholder="Max Students" className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />

              <input {...register("batchName")} placeholder="Batch Name" className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />

              {/* Start Date + Time as two fields in one row */}
              <div className="grid grid-cols-2 gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full dark:bg-gray-700 dark:border-gray-600">
                      {startDate ? format(startDate, "PPP") : "Select Start Date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 dark:bg-gray-800">
                    <ShadCalendar mode="single" selected={startDate} onSelect={setStartDate} />
                  </PopoverContent>
                </Popover>
                <input type="time" className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full dark:bg-gray-700 dark:border-gray-600">
                    {endDate ? format(endDate, "PPP") : "Select End Date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 dark:bg-gray-800">
                  <ShadCalendar mode="single" selected={endDate} onSelect={setEndDate} />
                </PopoverContent>
              </Popover>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#394ef4] to-[#b966e7] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all"
          >
            Add Course
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default CourseForm;
