import React from 'react';

const CoursePageCard = ({ course }) => {
    // Destructure required properties from the course object
    const { 
        courseImage, 
        type, 
        category, 
        courseName, 
        instructorName, 
        price,
        chapters, // Used to calculate the total number of lessons
        maxStudents, // Used for 'students enrolled'
    } = course;

    // Calculate total lessons
    const totalLessons = chapters?.reduce((total, chapter) => 
        total + (chapter.lessons?.length || 0), 0) || 0;

    // Format the price
    const formattedPrice = `$${parseFloat(price).toFixed(2)}`;

    return (
        // The main card container: white background, rounded corners, shadow, and hover effect for interactivity
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group">
            
            {/* 1. Course Image and Badges */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={courseImage} 
                    alt={courseName} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex space-x-2">
                    {/* Course Type Badge (e.g., Premium, Free) */}
                    <span className={`px-3 py-1 text-xs font-semibold uppercase rounded-full 
                        ${type === 'premium' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                        {type}
                    </span>
                    {/* Category Badge */}
                    <span className="px-3 py-1 text-xs font-semibold uppercase rounded-full bg-blue-500 text-white">
                        {category}
                    </span>
                </div>
            </div>

            {/* 2. Card Content */}
            <div className="p-5">
                
                {/* Course Name/Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight transition duration-300 hover:text-blue-600">
                    {courseName}
                </h3>
                
                {/* Instructor Name */}
                <p className="text-sm text-gray-500 mb-4">
                    By: <span className="font-medium text-gray-700">{instructorName}</span>
                </p>

                {/* --- */}
                
                {/* 3. Course Meta Data (Lessons, Students) */}
                <div className="flex justify-between items-center text-gray-600 border-t border-b py-3 mb-4">
                    <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-sm">{totalLessons} Lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.656-.126-1.283-.356-1.857M17 20H7m12-9a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-sm">{maxStudents} Students</span>
                    </div>
                </div>

                {/* 4. Price and Action Button */}
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-extrabold text-green-600">
                        {formattedPrice}
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition duration-300">
                        Read More
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default CoursePageCard;