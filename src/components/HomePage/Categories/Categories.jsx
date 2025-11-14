/* eslint-disable @next/next/no-img-element */
import React from "react";
import web from "../../../assets/home/categories/web-design.png";
import design from "../../../assets/home/categories/design.png";
import ai from "../../../assets/home/categories/smartphone.png";
import language from "../../../assets/home/categories/personal.png";
import it from "../../../assets/home/categories/server.png";
import data from "../../../assets/home/categories/infographic.png";
import finance from "../../../assets/home/categories/paint-palette.png";
import sales from "../../../assets/home/categories/pantone.png";

const CATEGORY = [
  {
    name: "Web-Development",
    image: web,
  },
  {
    name: "Data-Science",
    image: data,
  },
  {
    name: "Mobile-Development",
    image: ai,
  },
  {
    name: "Design",
    image: design,
  },
  {
    name: "Marketing",
    image: sales,
  },
  {
    name: "AI-&-ML",
    image: it,
  },
  {
    name: "Graphic Design",
    image: finance,
  },
  {
    name: "Language",
    image: language,
  },
];

const AllCategories = () => {
  return (
    <div className="container mx-auto py-12 xl:py-24">
      <div className="bg-[#bce0fd] text-center max-w-44 mx-auto rounded-xl">
        <h5 className="text-sm lg:text-[18px] bg-linear-to-t from-[#394ef4] to-[#b966e7] bg-clip-text text-transparent font-bold">
          Categories
        </h5>
      </div>
      <h2 className="py-6 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-center text-[#192335] dark:text-gray-100">
        Explore Top Courses Caterories <br />
        That Change Yourself
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-12">
        {CATEGORY.map((cat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#273041] shadow-2xl dark:shadow-xl rounded-xl p-6 xl:p-[50px] hover:scale-105 hover:cursor-pointer transition duration-500"
          >
            <div className="flex justify-center">
              <img src={cat.image.src} className="w-24 mb-6" alt="" />
            </div>
            <h2 className="text-[#192335] dark:text-gray-100 text-sm lg:text-xl font-semibold lg:font-bold text-center my-4">
              {cat.name}
            </h2>
            <h5 className="text-center font-bold">0 Courses</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
