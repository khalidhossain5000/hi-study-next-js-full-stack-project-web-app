"use client";

import React, { useState } from "react";
import { Controller, useFieldArray } from "react-hook-form";
import { PlusCircle, Trash, ChevronDown, ChevronUp } from "lucide-react";

const PremiumChapterForm = ({ control, chapterIndex, removeChapter }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Nested field array for lessons inside this lecture
  const { fields: lessonFields, append: addLesson, remove: removeLesson } = useFieldArray({
    control,
    name: `courseContents.${chapterIndex}.lessons`,
  });

  return (
    <div className="mb-4 border rounded-lg bg-gray-50 dark:bg-gray-700 relative">
      {/* Lecture Header */}
      <div
        className="flex justify-between items-center p-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Controller
          control={control}
          name={`courseContents.${chapterIndex}.title`}
          render={({ field }) => (
            <input
              {...field}
              placeholder="Lecture Title"
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          )}
        />
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              removeChapter(chapterIndex);
            }}
            className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
          >
            <Trash size={16} />
          </button>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      {/* Lessons Section */}
      {isOpen && (
        <div className="p-3 border-t border-gray-300 dark:border-gray-600">
          {lessonFields.map((lesson, index) => (
            <div key={lesson.id} className="grid grid-cols-1 md:grid-cols-2  gap-2 mb-2">
              <Controller
                control={control}
                name={`courseContents.${chapterIndex}.lessons.${index}.title`}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Lesson Title"
                    className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  />
                )}
              />
              <div className="flex gap-2 ">
                <button
                  type="button"
                  onClick={() => removeLesson(index)}
                  className="bg-red-600 text-white px-2 rounded-lg hover:bg-red-700"
                >
                  <Trash size={16} />
                </button>
              </div>
            </div>
          ))}

          {/* Add Lesson Button */}
          <button
            type="button"
            onClick={() => addLesson({ title: "" })}
            className="flex items-center gap-2 text-[#b966e7] hover:text-[#8d4dc0]"
          >
            <PlusCircle size={18} /> Add Lesson
          </button>
        </div>
      )}
    </div>
  );
};

export default PremiumChapterForm;
