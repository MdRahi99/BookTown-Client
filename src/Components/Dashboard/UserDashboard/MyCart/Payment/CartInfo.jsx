import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';

const CartInfo = ({productInfo}) => {

    const { name, img, price, author, rating } = productInfo;

    return (
        <div>
            <div className='flex flex-col lg:flex-row w-full items-center gap-8 border-2 border-dotted border-black p-4 bg-white'>
                <div className='w-full lg:w-1/3'>
                    <img className='w-full h-64 lg:h-44' src={img} alt="" />
                </div>
                <div className='flex flex-col w-full lg:w-2/3 gap-2'>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <p className='text-lg text-slate-600'>{author}</p>
                    <p className='text-lg'>Rating: <span className='text-orange-500 font-bold'>{rating}</span></p>
                    <p className='text-lg'>Price: <span className='text-orange-500 font-bold'>${price}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CartInfo;