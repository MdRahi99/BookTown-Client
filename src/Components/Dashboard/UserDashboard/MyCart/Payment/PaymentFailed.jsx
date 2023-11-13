import React from 'react';
import { Link } from 'react-router-dom';

const PaymentFailed = () => {
    return (
        <div className='w-full lg:w-1/2 mx-auto flex flex-col gap-8 p-10 bg-white rounded-lg my-20'>
            <h1 className='text-3xl font-bold text-center'>Oops!</h1>
            <p className='w-full lg:w-2/3 text-orange-400 font-bold mx-auto'>We've got some bad news. Your order has been cancelled. We couldn't process your online payment</p>
            <Link to='/dashboard/my-cart' className='text-center uppercase text-sm px-3 py-2 bg-black hover:bg-orange-600 text-white w-1/2 mx-auto rounded-md font-bold'>Try Again</Link>
        </div>
    );
};

export default PaymentFailed;