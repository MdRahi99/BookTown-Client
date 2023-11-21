import React from 'react';
import {FaStar } from '@react-icons/all-files/fa/FaStar';
import { Link } from 'react-router-dom';

const FeaturedBooks = ({ featuredBooks }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 items-center gap-8 justify-between'>
            {
                featuredBooks.slice(0, 8).map(books => {
                    console.log(books);
                    const { _id, name, featured, img, price, rating } = books;
                    return <Link to={`/book-details/${_id}`} className="card hover:animate-pulse w-full shadow-2xl h-96 rounded-xl" 
                    key={_id} >
                        <figure><img className='p-2 w-96 lg:w-96 h-full rounded-xl' src={img} /></figure>
                        <div className="card-body">
                            <h2 className="card-title h-full">
                                {name}
                                <div className="badge badge-info">{featured && 'Featured'}</div>
                            </h2>
                            <div className="card-actions justify-end mt-4">
                                <div className="badge badge-ghost flex items-center gap-2 font-bold"><FaStar className='text-orange-400' />{rating}</div>
                                <div className="badge badge-ghost font-bold">${price}</div>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    );
};

export default FeaturedBooks;