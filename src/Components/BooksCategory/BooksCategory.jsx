import React from 'react';
import Title from '../../Hooks/Title';
import { useLoaderData } from 'react-router-dom';
import { ImBooks } from "@react-icons/all-files/im/ImBooks";
import Category from './Category/Category';

const BooksCategory = () => {
    Title('Books Category');

    const booksCategory = useLoaderData();
    const { _id } = booksCategory;

    return (
        <div>
            <div className='my-6 flex items-center justify-between bg-gray-50 p-2 border-b-2 border-dashed w-3/4 lg:w-2/4 mx-auto border-black'>
                <ImBooks className='text-3xl'></ImBooks>
                <h1 className='font-trainOne text-2xl lg:text-4xl text-center'>Books Categories</h1>
                <ImBooks className='text-3xl'></ImBooks>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 p-4 justify-items-center">
                {
                    booksCategory.map(category => <Category key={_id} category={category} />)
                }
            </div>
        </div>
    );
};

export default BooksCategory;