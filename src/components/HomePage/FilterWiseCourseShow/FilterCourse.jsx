

"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

import CategoryButton from "./CategoryButton";
import CourseCard from "./CourseCard";
import ButtonIcon from "@/components/Shared/Button/ButtonIcon";
import Link from "next/link";

const FilterCourse = () => {
  const { data: allCourses = [], isLoading } = useQuery({
    queryKey: ["all-courses"],
    queryFn: async () => {
      const res = await axios.get("/api/public/all-courses");
      return res.data.allCourses;
    },
  });

  const [activeCategory, setActiveCategory] = useState("All");

  if (isLoading) return <p>Course data loading...</p>;

  // Filtered courses dynamically based on activeCategory
  const filteredCourses =
    activeCategory === "All"
      ? allCourses.slice(0, 8)
      : allCourses.filter((c) => c.category === activeCategory).slice(0, 8);

  // Unique categories
  const categories = ["All", ...new Set(allCourses.map((c) => c.category))];

  return (
    <div className="py-10 text-center container mx-auto px-3 lg:px-0">
      <div className="titles py-6 lg:py-9 space-y-3">
        <h5 className="text-center text-sm lg:text-[18px] bg-linear-to-t from-[#394ef4] to-[#b966e7] bg-clip-text text-transparent font-bold">
            Our Course
          </h5>
          <h2 className="text-2xl lg:text-3xl xl:text-[44px] text-[#192335] text-center font-semibold font-gabriela dark:text-gray-100">Limitless Learning, More</h2>
           <h5 className="text-2xl lg:text-3xl xl:text-[44px] bg-linear-to-t from-[#394ef4] to-[#b966e7] bg-clip-text text-transparent font-poppins font-bold ">
            Possibilities
          </h5>

      </div>
      {/* Category Buttons */}
      <div className="py-6 lg:py-9 xl:py-14 flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <CategoryButton
            key={cat}
            active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </CategoryButton>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {filteredCourses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8 lg:mt-12  flex justify-center">
        <Link href={'/all-courses'}>
        <ButtonIcon>
         
          
        
          View {activeCategory}
        </ButtonIcon>
        </Link>
      </div>
    </div>
  );
};

export default FilterCourse;
