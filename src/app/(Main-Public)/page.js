import Banner from '@/components/HomePage/BannerSection/Banner';
import FilterCourse from '@/components/HomePage/FilterWiseCourseShow/FilterCourse';
import Info from '@/components/HomePage/InfoSection/Info';
import React from 'react';

const HomePage = () => {
    return (
        <div className=''>
           

            <Banner/>
            <Info/>
            <FilterCourse/>
        </div>
    );
};

export default HomePage;