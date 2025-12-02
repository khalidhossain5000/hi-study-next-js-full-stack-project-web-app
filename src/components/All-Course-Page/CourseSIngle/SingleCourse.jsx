"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Clock8, Hourglass, Play, UserRoundCog } from "lucide-react";
import React from "react";
import PreviewAccordion from "./CourseContentPrveviewAccordion/PreviewAccordion";
import VideoPreview from "./CourseContentPrveviewAccordion/VideoPreview";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

const SingleCourse = ({ courseId }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: allCourses = [], isLoading } = useQuery({
    queryKey: ["all-courses"],
    queryFn: async () => {
      const res = await axios.get("/api/public/all-courses");
      return res.data.allCourses;
    },
  });

  if (isLoading || status === "loading") return <p>Course data loading...</p>;

  const singleData = allCourses.find((c) => c._id === courseId);

  if (!singleData) return <p>Course not found!</p>;

  const {
    courseName,
    _id,
    type,
    category,
    startDate,
    publishedAt,
    instructorName,
    chapters,
    courseContents,
    courseImage,
    price,
  } = singleData;

  const formattedDate = new Date(publishedAt)
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("-");

  const formattedStart = new Date(startDate)
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("-");

  const handleFreeEnroll = async () => {
    const freeEnrollData = {
      studentEmail: session?.user?.email,
      role: session?.user?.role,
      courseId: _id,
      courseName,
      type,
      isEnrolled: true,
    };

    try {
      const res = await axios.post(
        "/api/admin/free-enroll-student-info",
        freeEnrollData
      );

      if (res.data?.result.insertedId) {
        await Swal.fire({
          title: "Enrollment Successful!",
          text: "You have been successfully enrolled in this course.",
          icon: "success",
          confirmButtonText: "OK",
          timer: 2000,
          showConfirmButton: false,
        });

        Swal.fire({
          title: "Redirecting...",
          text: "Please wait, we are taking you to your dashboard.",
          allowOutsideClick: false,
          allowEscapeKey: false,
          didOpen: () => Swal.showLoading(),
          timer: 2000,
          timerProgressBar: true,
        });

        setTimeout(() => {
          router.push(`/free-enrolled-course-dashboard/${courseId}`);
        }, 2000);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Already Enrolled!",
        text: "You have already enrolled in this course.",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      {/* Banner */}
      <div className="py-22 xl:py-44 bg-linear-to-tl from-[#8a9df6] via-[#d1cdf9] to-[#be99f1] dark:bg-gradient-to-tl dark:from-[#10013e] dark:via-[#1e3065] dark:to-[#d906f1]">
        <div className="contentss max-w-7xl mx-auto text-center lg:text-left">
          <h5 className="text-center text-[18px] md:text-xl lg:text-3xl xl:text-5xl font-medium xl:font-black font-gabriela bg-linear-to-t from-[#394ef4] to-[#b966e7] dark:from-[#d906f1] dark:via-[#d1cdf9] dark:to-[#394ef4] bg-clip-text text-transparent">
            {courseName}
          </h5>

          {/* Info */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 pt-6">
            <h2 className="flex gap-3 items-center text-sm text-gray-700 dark:text-gray-100 font-semibold">
              <UserRoundCog
                size={40}
                className="bg-[#d3dafd] dark:bg-indigo-900 p-2 rounded-full text-black dark:text-gray-100"
              />
              By{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {instructorName}
              </span>
            </h2>

            <h2 className="flex gap-3 items-center text-sm text-gray-700 dark:text-gray-100 font-semibold">
              <Clock8
                size={40}
                className="bg-[#d3dafd] dark:bg-indigo-900 p-2 rounded-full text-black dark:text-gray-100"
              />
              Published{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {formattedDate}
              </span>
            </h2>

            <h2 className="flex gap-3 items-center text-sm text-gray-700 dark:text-gray-100 font-semibold">
              <Hourglass
                size={40}
                className="bg-[#d3dafd] dark:bg-indigo-900 p-2 rounded-full text-black dark:text-gray-100"
              />
              Start Date:{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {formattedStart}
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Course content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5  items-start mt-12">
        {/* Accordion */}
        <div className="pb-14 lg:flex-3 mx-3 xl:mx-0 w-full lg:w-2/3 ">
          <PreviewAccordion
            chaptersData={type === "premium" ? courseContents : chapters}
          />
        </div>

        {/* Video preview & buttons */}
        <div className="lg:flex-1 p-3 lg:p-6 border-2 border-pink-600 rounded-lg mx-3 lg:mx-0">
          <VideoPreview singleData={singleData} />

          <div className="py-6">
            {/* Free course enroll */}
            {type === "free" && (
              <button
                onClick={handleFreeEnroll}
                className="px-4 py-1 xl:px-9 xl:py-3 text-sm 2xl:px-12 overflow-hidden font-primary font-medium tracking-tighter text-white group rounded-[5px] 2xl:text-xl cursor-pointer bg-linear-to-r from-[#394ef4] to-[#b966e7] w-9/12 mx-auto lg:w-full"
              >
                Enroll Now
              </button>
            )}

            {/* Premium pricing */}
            {type === "premium" && (
              <>
                <h2 className="text-gray-900 font-bold pb-5 text-xl">
                  ${price}
                </h2>
                <Link href={`/payment/${_id}`}>
                  <button className="px-4 py-1 xl:px-9 xl:py-3 text-sm 2xl:px-12 overflow-hidden font-primary font-medium tracking-tighter text-white group rounded-[5px] 2xl:text-xl cursor-pointer bg-linear-to-r from-[#394ef4] to-[#b966e7] w-full">
                    Buy Now
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
