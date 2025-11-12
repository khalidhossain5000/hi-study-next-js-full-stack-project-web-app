import { ArrowRight, BookCheck, MoveRight, UserRoundPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoursePageCard = ({ course }) => {
  // Destructure required properties from the course object
  const {
    courseImage,
    type,
    category,
    courseName,
    instructorName,
    instructorImage,
    price,
    chapters,
    maxStudents,
    description,
  } = course;

  // Calculate total lessons
  const totalLessons =
    chapters?.reduce(
      (total, chapter) => total + (chapter.lessons?.length || 0),
      0
    ) || 0;

  
  
 
 
  return (
    <div className="bg-white dark:bg-[#273041] p-5 md:p-[30px] hover:scale-105 transition duration-500 shadow-xl dark:shadow-lg shadow-gray-400 dark:shadow-gray-900 rounded-lg -translate-y-44">
      {/* thumbnail image */}
      <div>
        <Image
          src={courseImage}
          alt="Course thumbnail image here"
          width={500}
          height={300}
          className="rounded-lg xl:h-[250px]"
        />
      </div>

      {/* card body */}
      <div className="py-3 space-y-3">
        <div className="tag flex items-center justify-between py-3 lg:py-5">
          <h3 className="inline-block px-3 py-1 text-sm font-semibold text-white uppercase tracking-wider bg-indigo-600 rounded-full shadow-md">
            {category}
          </h3>
          <h5
            className={`px-2 xl:px-3 py-1 text-sm font-medium ${
              type === "free"
                ? "bg-linear-t-l from-rose-500 to bg-pink-400 rounded-full dark:text-black"
                : "dark:text-black rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 rounded-lg"
            }`}
          >
            {type}
          </h5>
        </div>
        <div>
          <h2 className=" text-xl xl:text-[26px] lg:font-black font-bold text-[#273041] dark:text-gray-100 font-poppins">
            {courseName.slice(0, 35)}.....
          </h2>
        </div>
        {/* lesson and start date max student */}
        <div className="flex items-center gap-4 ">
          {/* lesson and contents */}
          <div className="flex items-center gap-1 text-[#6b7385] dark:text-gray-100 text-sm font-semibold font-poppins">
            <BookCheck /> {totalLessons} Lessons
          </div>
          {/* max student for premium courses */}
          {type === "premium" && (
            <div className=" dark:text-gray-100 flex items-center gap-1 text-[#6b7385] text-sm font-semibold font-poppins">
              <UserRoundPen /> Max Students: {maxStudents}
            </div>
          )}
        </div>
        <div>
          {/* descripitons */}
          <p
            className="py-3 xl:text-lg text-[#6b7385] dark:text-gray-100 xl:font-semibold
"
          >
            {description.slice(0, 60)}.....
          </p>
        </div>
        {/* instructor image */}
        <div className="flex items-center gap-2">
          <Image
            src={course?.instructorImage}
            alt="Instructor Image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h2 className="flex items-center gap-1 text-[#6b7385]  text-sm font-semibold font-poppins">
            by <span className="font-bold text-gray-900 dark:text-yellow-500">{instructorName}</span>
          </h2>
        </div>
        {/* price and enorll / see more button */}
        <div className="flex items-center gap-5">
          <h5 className="text-[#6b7385] dark:text-amber-400 font-black text-xl">
            $ {type === "premium" ? price : "0"}
          </h5>
<Link href={`/all-courses/${course._id}`}>
          <h2 className="relative text-sm font-semibold text-[#192335] dark:text-white group cursor-pointer flex items-center gap-2">
            {" "}
            See More <ArrowRight size={20} />
            <span className="flex items-center absolute left-0 bottom-0 h-[3px] bg-[#b966e7] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>{" "}
          </h2>

</Link>

          <Link href={"/"}>
            <button
              className="relative inline-flex items-center justify-center 
                     px-7 py-2 whitespace-nowrap tracking-wide
                     rounded-full overflow-hidden
                     bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#8b5cf6]
                     text-white shadow-[0_0_25px_rgba(139,92,246,0.4)]
                     transition-all duration-500 ease-in-out
                     hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.7)]
                     before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                     before:translate-x-[-200%] hover:before:translate-x-[200%]
                     before:transition-transform before:duration-700"
            >
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default CoursePageCard;
