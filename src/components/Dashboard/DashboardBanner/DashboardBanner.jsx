import React from 'react';
import bgImage from '../../../assets/student-bg/n.jpg'
const DashboardBanner = () => {
    return (
        <div className=''
        >
            <div className='bg-linear-[270deg,#394ef4,#ba66e7] dark:bg-linear-[90deg,#2f57efbf,#oc586eeab]   opacity-50 h-full w-full lg:pt-[60px] lg:pb-[250px] py-20 md:px-10 z-0 relative'></div>
            <div className="bg-imgwith-info container mx-auto bg-no-repeat bg-cover bg-center rounded-lg flex flex-col md:flex-row items-center justify-between py-52 px-12 -mt-52 z-10 relative" style={{backgroundImage: `url(${bgImage.src})`}}>
<div className=''>
    <h2>Reach Higher, Achieve More</h2>
</div>
            </div>
        </div>
    );
};

export default DashboardBanner;


// dark:bg-- linear-gradient(90deg, #2f57efbf 0%, #c586eeab 100%)