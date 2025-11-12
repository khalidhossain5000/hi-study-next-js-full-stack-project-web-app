
import SingleCourse from '@/components/All-Course-Page/CourseSIngle/SingleCourse';

import React, { use } from 'react';

const CourseSinglePage = ({params}) => {

    const {id}=use(params)
    
   
    return (
        <div>
            

            <SingleCourse courseId={id}/>
        </div>
    );
};

export default CourseSinglePage;