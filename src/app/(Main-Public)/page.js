import Banner from '@/components/HomePage/BannerSection/Banner';
import React from 'react';

const HomePage = () => {
    return (
        <div className='bg-gray-100 py-12 lg:py-22 overflow-x-hidden'>
            <div className='container mx-auto '>

            <Banner/>
            </div>
        </div>
    );
};

export default HomePage;