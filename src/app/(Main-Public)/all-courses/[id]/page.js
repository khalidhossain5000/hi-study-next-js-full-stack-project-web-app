
import SingleCourse from '@/components/All-Course-Page/CourseSIngle/SingleCourse';

import React, { use } from 'react';

const CourseSinglePage = ({params}) => {

    const {id}=use(params)
    
   
    return (
        <div>
            <h2>Hello single pag is here</h2>

            <SingleCourse courseId={id}/>
        </div>
    );
};

export default CourseSinglePage;