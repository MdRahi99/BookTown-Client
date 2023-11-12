// import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import { Link, useParams } from 'react-router-dom';

const PaymentInfo = ({ productInfo, index }) => {

    // const [productInfo, setProductInfo] = useState([]);
    // const [axiosSecure] = useAxiosSecure();
    // const { id } = useParams();

    // useEffect(() => {
    //     axiosSecure.get(`/carts/${id}`)
    //         .then((response) => {
    //             setProductInfo(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching product:', error);
    //         });
    // }, [id]);

    const { name, img, price, author, rating } = productInfo;

    return (
        <div>
            <h1 className='bg-black h-6 w-6 mb-1 font-bold text-center rounded-full text-white'>{index + 1}</h1>
            <div className='flex flex-col lg:flex-row w-full items-center gap-8 border-2 border-dotted border-black p-4'>
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

export default PaymentInfo;


{/* <div className='flex items-center gap-2'>
    <Link to='/dashboard/payment' className='w-full text-center bg-black text-white p-1 rounded-xl font-bold hover:bg-[#3b3a3a]'>Pay</Link>
    <Link to='/dashboard/my-cart' className='w-full text-center bg-black text-white p-1 rounded-xl font-bold hover:bg-[#3b3a3a]'>Back</Link>
</div> */}