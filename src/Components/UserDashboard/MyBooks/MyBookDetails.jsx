import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BiEdit } from "@react-icons/all-files/bi/BiEdit";

const MyBookDetails = () => {

    const bookDetails = useLoaderData();
    const { author, desc, email, img, name, price, rating, _id } = bookDetails;

    return (
        <div className='p-4 bg-white rounded-xl'>
            <div className='p-4 flex flex-col gap-4 w-full lg:w-3/4 mx-auto items-center justify-center bg-black text-white rounded-xl'>
                <img className='border-2 border-white rounded-xl h-96 w-96' src={img} alt="" />
                <h1 className='border-b-4 border-white text-2xl font-wallPoet uppercase'>
                    {name}
                </h1>
                <p className='text-lg text-orange-600'><span className='text-md text-white mr-2'>Author Name:</span>{author}</p>
                <p className='text-lg text-orange-600'><span className='text-md text-white mr-2'>Rating:</span>{rating}</p>
                <p className='text-lg text-orange-600'><span className='text-md text-white mr-2'>Price:</span>{price}</p>
                <p className='text-lg text-orange-600'><span className='text-md text-white mr-2'>Description:</span>{desc}</p>
                <div className='flex items-center justify-between gap-8'>
                    <Link to={`/dashboard/update-book/${_id}`}>
                        <BiEdit className='text-3xl hover:bg-green-800 bg-green-400 rounded' />
                    </Link>
                </div>

                <Link to='/dashboard/my-books' className='py-1 mt-6 font-roboto w-full text-center font-semibold text-xl hover:bg-slate-300 px-4 bg-white text-black rounded'>Back</Link>
            </div>

        </div>
    );
};

export default MyBookDetails;