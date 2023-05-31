import React from 'react';
import Title from '../../Hooks/Title';
import { useLoaderData } from 'react-router-dom';

const BooksCategory = () => {
    Title('Books Category');

    const booksCategory = useLoaderData();
    const { img, name } = booksCategory;

    return (
        <div className='w-full lg:w-11/12 flex flex-col justify-center mx-auto my-12'>
            <img className='h-80' src={img} alt="" />
            <h3 className='text-2xl lg:text-4xl font-trainOne p-4 bg-emerald-500 text-white font-semibold text-center'>{name}</h3>
        </div>
    );
};

export default BooksCategory;