/* eslint-disable @next/next/no-img-element */
"use client";
import DefaultMessage from "@/components/Dashboard/layout/DefaultMessage/DefaultMessage";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const CoursesTable = () => {
  const { data: allCourses = [], isLoading ,refetch} = useQuery({
    queryKey: ["all-courses"],
    queryFn: async () => {
      const res = await axios.get("/api/public/all-courses");
      return res.data.allCourses;
    },
  });

  if (isLoading) return <p>Course data loading...</p>;
 

   // delete api

  const handleDeletecourse = async (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this Course permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`/api/admin/add-course?id=${userId}`);

          if (res.data.success) {
            Swal.fire(
              "Deleted!",
              "User has been deleted successfully.",
              "success"
            );
            refetch();
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire("Error!", "Failed to delete user.", "error");
        }
      }
    });
  };
  return (
    <div>
      {allCourses.length === 0 && <DefaultMessage />}

      {allCourses.length > 0 && (
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <TableHeader className="bg-gray-50 dark:bg-gray-800">
              <TableRow>
                <TableHead className="w-[50px] text-center">S/L</TableHead>
                <TableHead className="text-left">Image</TableHead>
                <TableHead className="text-left">Type</TableHead>
                <TableHead className="text-left">Category</TableHead>
                <TableHead className="text-left">PublishedAt</TableHead>
                <TableHead className="text-left">Price</TableHead>
                <TableHead className="text-left">Total Enrolled</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {allCourses.map((course, i) => (
                <TableRow
                  key={course._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <TableCell className="text-center font-medium">
                    {i + 1}
                  </TableCell>

                  <TableCell>
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                      <img
                        src={course.courseImage}
                        alt={"Course thumbnail"}
                        className="object-cover"
                      />
                    </div>
                  </TableCell>

                  <TableCell className="font-medium">
                    {course.courseName || "NoNameFound"}
                  </TableCell>
                  <TableCell className={`text-sm font-bold ${course.type ==='free' ? 'text-gray-600 dark:text-gray-300' : 'text-amber-600'}`}>
                    {course.type}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {course?.category}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {course?.publishedAt.split('T')[0]}
                  </TableCell>
                  <TableCell className="capitalize text-gray-700 dark:text-gray-200">
                    {course.coursePrice || 'Free'}
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {course.role !== "admin" && (
                        <Link href={`/dashboard/admin/update-course/${course._id}`}>
                        <button
                          
                          className="px-3 py-1 text-xs font-medium rounded-md bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                        >
                          Update Course
                        </button>
                        </Link>
                      )}

                      
                      <button
                        onClick={() => handleDeletecourse(course._id)}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
                      >
                        Delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default CoursesTable;
