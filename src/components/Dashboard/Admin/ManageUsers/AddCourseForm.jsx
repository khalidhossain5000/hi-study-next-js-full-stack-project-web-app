"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {
  Upload,
  Video,
  Calendar,
  PlusCircle,
  Trash,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as ShadCalendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import ImageUpload from "../../layout/HandleImageUpload/CourseThumbnail/ImageUploader";

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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const { register, handleSubmit, watch, control, reset } = useForm({
    defaultValues: {
      type: "free",
      lessons: [{ title: "", videoUrl: "" }],
    },
  });

  const {
    fields: lessonFields,
    append: addLesson,
    remove: removeLesson,
  } = useFieldArray({
    control,
    name: "lessons",
  });

  const watchType = watch("type");

  const onSubmit = (data) => {
    console.log("Course Data:", { ...data, startDate, endDate, startTime });
    reset();
    setPreviewImage(null);
    setStartDate(null);
    setEndDate(null);
    setStartTime("");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-5 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-300 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-[#b966e7] to-[#394ef4] bg-clip-text text-transparent">
          Add New Course
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Image Upload */}
          <div className="flex flex-col items-center ">
            <label className="lg:pb-5  lg:font-semibold lg:text-xl block text-gray-900 dark:text-gray-200 mb-2">
              Upload Course Thumbnail Image
            </label>
            <div className="border-2 border-dashed border-gray-500 rounded-md p-12 w-full">
              <ImageUpload
                onUpload={(url) => setImageUrl(url)}
                imageUrl={imageUrl}
              />
              {imageUrl && (
                <p className="text-[#e76f51] text-sm mt-2">
                  Image uploaded successfully!
                </p>
              )}
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Course Title</label>
              <input
                {...register("title")}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="Course Title"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Category</label>
              <select
                {...register("category")}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="" disabled>
                  Select Category
                </option>
                {CATEGORY_OPTIONS.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Instructor Name</label>
              <input
                {...register("instructorName")}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="Instructor Name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Course Type</label>
              <select
                {...register("type")}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="free">Free</option>
                <option value="premium">Premium</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Difficulty Level</label>
              <select
                {...register("difficulty")}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="">Select Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Duration</label>
              <input
                {...register("duration")}
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="e.g. 6 weeks"
              />
            </div>
          </div>

          {/* Course Description */}
          <div>
            <label className="block mb-2 font-medium">Course Description</label>
            <textarea
              {...register("description")}
              rows={4}
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              placeholder="Describe the course..."
            ></textarea>
          </div>

          {/* Free Lessons */}
          {watchType === "free" && (
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Video className="w-5 h-5 text-[#b966e7]" /> Lessons
              </h3>
              {lessonFields.map((field, index) => (
                <div key={field.id} className="grid md:grid-cols-2 gap-4 mb-3">
                  <input
                    {...register(`lessons.${index}.title`)}
                    placeholder="Lesson Title"
                    className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  />
                  <div className="flex gap-2">
                    <input
                      {...register(`lessons.${index}.videoUrl`)}
                      placeholder="Video URL"
                      className="p-3 border rounded-lg flex-1 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <button
                      type="button"
                      onClick={() => removeLesson(index)}
                      className="bg-red-600 text-white px-3 rounded-lg hover:bg-red-700"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addLesson({ title: "", videoUrl: "" })}
                className="mt-2 flex items-center gap-2 text-[#b966e7] hover:text-[#8d4dc0]"
              >
                <PlusCircle size={18} /> Add Lesson
              </button>

              {/* Start & End Date for Free */}
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block mb-2 font-medium">Start Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full dark:bg-gray-700 dark:border-gray-600"
                      >
                        {startDate
                          ? format(startDate, "PPP")
                          : "Select Start Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 dark:bg-gray-800">
                      <ShadCalendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="block mb-2 font-medium">End Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full dark:bg-gray-700 dark:border-gray-600"
                      >
                        {endDate ? format(endDate, "PPP") : "Select End Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 dark:bg-gray-800">
                      <ShadCalendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          )}

          {/* Premium Fields */}
          {watchType === "premium" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Price</label>
                <input
                  {...register("price")}
                  type="number"
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  placeholder="e.g. 1500"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Max Students</label>
                <input
                  {...register("maxStudents")}
                  type="number"
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  placeholder="e.g. 50"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Batch Name</label>
                <input
                  {...register("batchName")}
                  placeholder="Batch 1 - Nov 2025"
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              {/* Start Date + Time Side by Side */}
              <div className="md:col-span-1 flex gap-2 items-end">
                <div className="flex-1">
                  <label className="block mb-2 font-medium">Start Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full dark:bg-gray-700 dark:border-gray-600"
                      >
                        {startDate
                          ? format(startDate, "PPP")
                          : "Select Start Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 dark:bg-gray-800">
                      <ShadCalendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex-1">
                  <label className="block mb-2 font-medium">Time</label>
                  <input
                    type="time"
                    className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">End Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full dark:bg-gray-700 dark:border-gray-600"
                    >
                      {endDate ? format(endDate, "PPP") : "Select End Date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 dark:bg-gray-800">
                    <ShadCalendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
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
