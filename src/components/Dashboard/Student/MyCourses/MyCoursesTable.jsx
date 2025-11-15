'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // ShadCN Table Import

const MyCoursesTable = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;

  const { data: myCourses = { premiumEnroll: [], freeEnroll: [] }, isLoading } =
    useQuery({
      queryKey: ["my-courses", email],
      queryFn: async () => {
        const res = await axios.get(`/api/student/enrollment-info?email=${email}`);
        return res.data;
      },
      enabled: !!email,
    });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );

  const combinedCourses = [...myCourses.premiumEnroll, ...myCourses.freeEnroll];

  if (!combinedCourses.length)
    return (
      <p className="text-center text-red-500 py-10">
        No enrolled courses found!
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-5 text-center dark:text-white">
        My Enrolled Courses
      </h2>

      {/* Table for lg and up */}
      <div className="hidden lg:block">
        <Table className="w-full dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableHead>Course Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Enroll Date</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {combinedCourses.map((course) => {
              const courseType =
                course.type || (myCourses.premiumEnroll.includes(course) ? "premium" : "free");

              return (
                <TableRow
                  key={course._id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <TableCell className="font-medium text-gray-800 dark:text-gray-200">
                    {course.courseName}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
                        courseType === "premium"
                          ? "bg-yellow-500 dark:bg-yellow-600"
                          : "bg-green-500 dark:bg-green-600"
                      }`}
                    >
                      {courseType.toUpperCase()}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    {course.paymentStatus ? course.paymentStatus : "N/A"}
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    {course.enrollDate
                      ? new Date(course.enrollDate).toLocaleDateString()
                      : "N/A"}
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    {course.paid ? `৳ ${course.paid}` : "Free"}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Card view for small screens */}
      <div className="lg:hidden flex flex-col gap-4">
        {combinedCourses.map((course) => {
          const courseType =
            course.type || (myCourses.premiumEnroll.includes(course) ? "premium" : "free");

          return (
            <div
              key={course._id}
              className="p-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md dark:bg-[#0f172a] bg-white"
            >
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                {course.courseName}
              </h3>
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
                    courseType === "premium"
                      ? "bg-yellow-500 dark:bg-yellow-600"
                      : "bg-green-500 dark:bg-green-600"
                  }`}
                >
                  {courseType.toUpperCase()}
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {course.paid ? `৳ ${course.paid}` : "Free"}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                Payment Status: {course.paymentStatus || "N/A"}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Enroll Date:{" "}
                {course.enrollDate
                  ? new Date(course.enrollDate).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCoursesTable;
