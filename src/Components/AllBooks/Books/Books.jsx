import React from 'react';
import { Link } from 'react-router-dom';
import { FcRating } from "@react-icons/all-files/fc/FcRating";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

const Books = ({ book }) => {
    const { _id, img, name, author, rating, price } = book;
    return (
        <div className='rounded-2xl flex flex-col gap-3 shadow-xl outline-dashed outline-[#b3b4b4] p-4 h-full relative'>
            <div>
                <img className='w-full h-64 rounded-xl' src={img} alt="" />
            </div>
            <div className='flex h-24 justify-between items-center'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl font-bold font-roboto uppercase'>{name}</h1>
                    <p className='text-slate-500'>{author}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FcRating className='font-bold text-xl'></FcRating>
                    <p className='font-semibold'>{rating}</p>
                </div>
            </div>
            <div className='flex justify-between p-1 text-center rounded-2xl w-full'>
                <p className='text-2xl font-semibold'><small className='text-2xl font-bold'>$</small>{price}</p>
                <Link
                    to={`/book-details/${_id}`}
                    className='flex gap-2 items-center animate-pulse'>
                    <h1>View Details</h1>
                    <FaArrowRight></FaArrowRight>
                </Link>
            </div>
        </div>
    );
};

export default Books;