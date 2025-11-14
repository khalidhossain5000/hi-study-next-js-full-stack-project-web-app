import Test from '@/components/Dashboard/Admin/All-Courses/CoursesTable/Test';
import Banner from '@/components/HomePage/BannerSection/Banner';
import AllCategories from '@/components/HomePage/Categories/Categories';
import FilterCourse from '@/components/HomePage/FilterWiseCourseShow/FilterCourse';
import Info from '@/components/HomePage/InfoSection/Info';
import React from 'react';

const HomePage = () => {
    return (
        <div className=''>
           
           {/* <h2 className='text-2xl text-red-600 lg:text-5xl text-center font-black lxl:text-indigo-600 2xl:text-pink-600'>Hello testing breakpoint custom breakpoint</h2> */}
<Test/>
            <Banner/>
            <Info/>
            <AllCategories/>
            <FilterCourse/>
        </div>
    );
};

export default HomePage;