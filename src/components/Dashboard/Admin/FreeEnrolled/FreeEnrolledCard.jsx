'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const FreeEnrolledCard = () => {
  const {
    data: freeEnrolled = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axios.get("/api/admin/free-enroll-student-info");
      return res.data.result;
    },
  });

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg max-w-md mx-auto">
      <p>Error loading users: {error.message}</p>
      <button 
        onClick={() => refetch()}
        className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
      >
        Retry
      </button>
    </div>
  );

  console.log(freeEnrolled);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Free Course Enrollments
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Manage student enrollments for free courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6">
          {freeEnrolled.map((enrollment) => (
            <div 
              key={enrollment._id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden transform hover:-translate-y-1"
            >
              {/* Header with status badge */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                    {enrollment.type.toUpperCase()}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    enrollment.isEnrolled 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                  }`}>
                    {enrollment.isEnrolled ? 'Enrolled' : 'Not Enrolled'}
                  </span>
                </div>
                
                {/* Course name */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {enrollment.courseName}
                </h3>
                
                {/* Role */}
                <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium px-2.5 py-0.5 rounded">
                  {enrollment.role}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Student email */}
                <div className="mb-4">
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400 block mb-1">
                    Student Email
                  </label>
                  <p className="text-gray-900 dark:text-white font-mono text-sm truncate" title={enrollment.studentEmail}>
                    {enrollment.studentEmail}
                  </p>
                </div>

                {/* Course ID */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400 block mb-1">
                    Course ID
                  </label>
                  <p className="text-gray-900 dark:text-white font-mono text-xs truncate" title={enrollment.courseId}>
                    {enrollment.courseId}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm">
                    View Details
                  </button>
                  <button className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm">
                    Message
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>Enrollment ID:</span>
                  <span className="font-mono">{enrollment._id.slice(-8)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {freeEnrolled.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No Enrollments Found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                There are no free course enrollments at the moment.
              </p>
              <button 
                onClick={() => refetch()}
                className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Refresh
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

};

export default FreeEnrolledCard;