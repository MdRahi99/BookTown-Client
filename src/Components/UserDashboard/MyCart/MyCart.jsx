import React from 'react';
import Title from '../../../Hooks/Title';
import useCart from "../../../Hooks/useCart";
import { MdPayment } from '@react-icons/all-files/md/MdPayment';
import { AiOutlineDelete } from '@react-icons/all-files/ai/AiOutlineDelete';

const MyCart = () => {

    Title('My Cart');
    const [cart] = useCart();

    return (
        <div className='mx-4 my-6'>
            <h1 className='text-xl font-bold text-center p-4 border-b-2 border-black uppercase mb-6 rounded-xl'>Added Books</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    cart.map(book => {
                        const { menuItemId, name, price } = book;
                        return <div key={menuItemId}
                            className='bg-slate-300 border-y-2 border-black p-3 rounded-xl'>
                            <div className='flex w-full items-center justify-between gap-8'>
                                <div className='flex flex-col lg:flex-row w-full items-center gap-4'>
                                    <h1 className='text-lg font-bold w-full lg:w-1/3 opacity-80 rounded-xl px-2 py-1 bg-black text-white'>Name:<span className='py-1 rounded text-white ml-1'> {name}</span></h1>
                                    <h1 className='text-lg font-bold w-full lg:w-1/3 opacity-80 rounded-xl px-2 py-1 bg-black black text-white'>Price:<span className='py-1 rounded ml-1'>${price}</span></h1>
                                </div>
                                <button
                                    className='text-2xl font-bold hover:text-slate-600' title='Checkout'>
                                    <MdPayment />
                                </button>
                                <button className='text-2xl text-orange-600 font-bold hover:text-orange-800' title='Delete'>
                                    <AiOutlineDelete />
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default MyCart;