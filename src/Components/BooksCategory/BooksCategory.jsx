import React from 'react';
import Title from '../../Hooks/Title';
import { useLoaderData } from 'react-router-dom';

const BooksCategory = () => {
    Title('Books Category');

    const booksCategory = useLoaderData();
    const { img, category } = booksCategory;

    return (
        <div className='w-full flex flex-col justify-center mx-auto'>
            <img className='h-80 rounded-t-2xl' src={img} alt="" />
            <h3 className='text-2xl lg:text-4xl rounded-b-2xl font-trainOne p-4 bg-emerald-500 text-white font-semibold text-center'>{category}</h3>
        </div>
    );
};

export default BooksCategory;