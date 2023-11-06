import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { Link, useParams } from 'react-router-dom';

const CartInfo = () => {

    const [productInfo, setProductInfo] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const { id } = useParams();

    useEffect(() => {
        axiosSecure.get(`/carts/${id}`)
            .then((response) => {
                setProductInfo(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
            });
    }, [id]);


    const { category, name, img, price, author } = productInfo;
    const shipping = 10;

    const handleCheckout = () => {
        alert('Payment Done')
    }

    return (
        <div className='flex flex-col lg:flex-row w-full lg:w-5/6 mx-auto my-10 justify-between px-12 py-10 shadow-2xl rounded-xl bg-white shadow-white'>
            <div className='w-full lg:w-2/3'>
                <h1 className='text-2xl border-b-4 border-black p-2 rounded-r-xl font-bold my-6'>{category}</h1>
                <div className='flex items-center gap-4'>
                    <div>
                        <img className='h-32 w-32' src={img} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold'>{name}</h1>
                        <p className='text-lg text-slate-600'>{author}</p>
                    </div>
                </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className='w-full lg:w-1/3 flex flex-col gap-4'>
                <h1 className='text-2xl border-b-4 border-black p-2 rounded-r-xl font-bold my-3'>Summary</h1>
                <p className='text-lg'>Subtotal: <span className='text-orange-500 font-bold'>${price}</span></p>
                <p className='text-lg'>Shipping: <span className='text-orange-500 font-bold'>${shipping}</span></p>
                <p className='text-lg'>Total: <span className='text-orange-500 font-bold'>${price + shipping}</span></p>
                <div className='flex items-center gap-2'>
                    <button onClick={handleCheckout} className='w-full bg-black text-white p-1 rounded-xl font-bold hover:bg-[#3b3a3a]'>Pay</button>
                    <Link to='/dashboard/my-cart' className='w-full text-center bg-black text-white p-1 rounded-xl font-bold hover:bg-[#3b3a3a]'>Back</Link>
                </div>
            </div>
        </div>
    );
};

export default CartInfo;