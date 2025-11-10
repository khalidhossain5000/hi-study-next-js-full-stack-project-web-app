"use client";

import React from "react";
import { Controller, useFieldArray } from "react-hook-form";
import { PlusCircle, Trash } from "lucide-react";

const ChapterForm = ({ control, chapterIndex, removeChapter }) => {
  // Nested field array for lessons inside this chapter
  const { fields: lessonFields, append: addLesson, remove: removeLesson } = useFieldArray({
    control,
    name: `chapters.${chapterIndex}.lessons`,
  });

  return (
    <div className="mb-4 border rounded-lg p-4 bg-gray-50 dark:bg-gray-700 relative">
      {/* Delete Chapter Button */}
      <button
        type="button"
        onClick={() => removeChapter(chapterIndex)}
        className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
      >
        <Trash size={16} />
      </button>

      {/* Chapter Title */}
      <Controller
        control={control}
        name={`chapters.${chapterIndex}.title`}
        render={({ field }) => (
          <input
            {...field}
            placeholder="Chapter Title"
            className="w-full p-3 mb-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
        )}
      />

      {/* Lessons */}
      {lessonFields.map((lesson, index) => (
        <div key={lesson.id} className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
          <Controller
            control={control}
            name={`chapters.${chapterIndex}.lessons.${index}.title`}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Lesson Title"
                className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
              />
            )}
          />
          <div className="flex gap-2">
            <Controller
              control={control}
              name={`chapters.${chapterIndex}.lessons.${index}.videoUrl`}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Video URL"
                  className="p-3 border rounded-lg flex-1 dark:bg-gray-700 dark:border-gray-600"
                />
              )}
            />
            <button
              type="button"
              onClick={() => removeLesson(index)}
              className="bg-red-600 text-white  mx-auto px-2 lg:px-3 rounded-lg hover:bg-red-700"
            >
              <Trash size={16} />
            </button>
          </div>
        </div>
      ))}

      {/* Add Lesson Button */}
      <button
        type="button"
        onClick={() => addLesson({ title: "", videoUrl: "" })}
        className="flex items-center gap-2 text-[#b966e7] hover:text-[#8d4dc0]"
      >
        <PlusCircle size={18} /> Add Lesson
      </button>
    </div>
  );
};

export default ChapterForm;
