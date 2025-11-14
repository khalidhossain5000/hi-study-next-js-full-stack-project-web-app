import CategorySingle from '@/components/CategorySinglePageCard/CategorySinglePage/CategorySingle';
import React, { use } from 'react';

const SingleCategories = ({params}) => {
    const {name}=use(params)

    return (
        <div>
      
            <CategorySingle categoryName={name}/>
        </div>
    );
};

export default SingleCategories;