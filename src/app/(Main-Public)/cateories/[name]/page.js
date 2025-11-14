import React, { use } from 'react';

const SingleCategories = ({params}) => {
    const {name}=use(params)

    return (
        <div>
            <h2>welcome to cateory {name}</h2>
        </div>
    );
};

export default SingleCategories;