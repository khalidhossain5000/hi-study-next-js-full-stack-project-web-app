import CoursesTable from '@/components/Dashboard/Admin/All-Courses/CoursesTable/CoursesTable';
import React from 'react';

const AllCourses = () => {
    return (
        <div>
            <h2>All courses</h2>
            <div className="hidden xl:block">
                <CoursesTable/>
            </div>
        </div>
    );
};

export default AllCourses;