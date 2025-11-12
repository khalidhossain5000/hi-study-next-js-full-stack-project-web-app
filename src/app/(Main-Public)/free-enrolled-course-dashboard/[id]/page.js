import EnrolledLayout from '@/components/Free-enrolled-info-page/EnrollLayout/EnrolledLayout';
import React, { use } from 'react';

const FreeEnrolledCourseDashboardPage = ({params}) => {
    const {id:courseId}=use(params)
    console.log(courseId,'course id');
    return (
        <div>
            <h2>This is course id page</h2>
            <EnrolledLayout courseId={courseId}/>
        </div>
    );
};

export default FreeEnrolledCourseDashboardPage;