import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lock } from "lucide-react";

const PreviewAccordion = ({ chaptersData }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-5xl mx-auto py-6 "
    >
      {chaptersData.map((chapter, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className="border border-gray-500 dark:border-gray-600 rounded-lg mb-3 bg-gray-50 dark:bg-gray-900 shadow-sm "
        >
          {/* Chapter Title */}
          <AccordionTrigger
            className="flex justify-between items-center gap-2 p-4 font-semibold text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
          >
            {chapter.title}
          </AccordionTrigger>

          {/* Lessons */}
          <AccordionContent className="flex flex-col gap-3 p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            {chapter.lessons.map((lesson, idx) => (
              <a
                key={idx}
    
        
      
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-150"
              >
                <Lock className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-100 font-medium">
                  {lesson.title}
                </span>
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PreviewAccordion;
