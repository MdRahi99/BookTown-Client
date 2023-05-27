import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {name, img} = category;
    return (
        <div className='flex flex-col bg-gray-300 mb-4 lg:bg-white lg:mb-0'>
            <img className='h-56 w-80 lg:absolute lg:opacity-40' src={img} alt="" />
            <Link className='flex items-center justify-center my-4 lg:my-0 font-wallPoet uppercase hover:bg-white hover:border-x-2 text-lg text-center h-16 w-72 m-auto opacity-100 animate-pulse lg:animate-none border-y-2 border-slate-900 p-2 lg:relative lg:top-24 lg:left-3'>{name}</Link>
        </div>
    );
};

export default Category;