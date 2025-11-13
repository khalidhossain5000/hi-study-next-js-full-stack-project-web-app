import UpdateForm from '@/components/Dashboard/Admin/UpdateCourseForm/UpdateForm';
import React, { use } from 'react';

const UpdateCourse = ({params}) => {
    const {id}=use(params)

    console.log(id,'this is is id is ');
    return (
        <div>
            <h2>Update course form here</h2>
            <UpdateForm courseId={id}/>
        </div>
    );
};

export default UpdateCourse;