// "use client";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import React, { useState } from "react";
// import CategoryButton from "./CategoryButton";

// const FilterCourse = () => {
//   // State for filtered courses & active category
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("All");
  
//   //fetch all courses data
//   const { data: allCourses = [], isLoading } = useQuery({
//     queryKey: ["all-courses"],
//     queryFn: async () => {
//       const res = await axios.get("/api/public/all-courses");
//       return res.data.allCourses;
//     },
//   });

//   if (isLoading) return <p>Course data loading here</p>;
//   // Handle category click
//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//     if (category === "All") {
//       setFilteredCourses(allCourses.slice(0, 8));
//     } else {
//       const filtered = allCourses.filter((c) => c.category === category);
//       setFilteredCourses(filtered.slice(0, 8));
//     }
//   };
//   const categories = ["All", ...new Set(allCourses.map((c) => c.category))];
//   console.log(categories, "this is all courses data with filter wise");
//   return (
//     <div className="py-10 text-center">
//       {/* Category Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 mb-6">
//         {categories.map((cat) => (
//           <CategoryButton
//             key={cat}
//             active={activeCategory === cat}
//             onClick={() => handleCategoryClick(cat)}
//           >
//             {cat}
//           </CategoryButton>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterCourse;


// LATEST CODE FOR CHECK HOW IT WORKS



"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

import CategoryButton from "./CategoryButton";
import CourseCard from "./CourseCard";


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
      : allCourses.filter(c => c.category === activeCategory).slice(0, 8);

  // Unique categories
  const categories = ["All", ...new Set(allCourses.map(c => c.category))];

  return (
    <div className="py-10 text-center container mx-auto">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map(cat => (
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {filteredCourses.map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8">
        <button
          onClick={() => {
            if (activeCategory === "All") {
              window.location.href = "/courses";
            } else {
              window.location.href = `/category/${activeCategory.toLowerCase()}`;
            }
          }}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md hover:scale-105 transition"
        >
          View {activeCategory}
        </button>
      </div>
    </div>
  );
};

export default FilterCourse;




