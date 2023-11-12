import { AiOutlineDelete } from '@react-icons/all-files/ai/AiOutlineDelete';
import { AiOutlineStar } from '@react-icons/all-files/ai/AiOutlineStar';
import React from 'react';
import { Link } from 'react-router-dom';

const CartTable = ({ cart, handleDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr className='w-full'>
                        <th>#</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Price</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((book, index) => {
                            const { _id, img, name, author, rating, price } = book;
                            return <tr key={_id} className='w-full'>
                                <th>
                                    <span className='mask mask-squircle border-r-2 border-black p-3'>
                                        {index + 1}
                                    </span>
                                </th>
                                <td>
                                    <div className="flex justify-start items-center gap-3 p-3">
                                        <div>
                                            <img className=' h-24 w-24' src={img} />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div className="font-bold">{name}</div>
                                            <div className="flex items-center gap-2 text-sm opacity-50">
                                                <AiOutlineStar className='text-lg text-orange-500' />{rating}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{author}</span>
                                </td>
                                <td>${price}</td>
                                <th>
                                    <div className='flex w-full items-center justify-center'>
                                        <button onClick={() => handleDelete(_id)} className='ml-3 text-2xl text-orange-600 font-bold hover:text-orange-800' title='Delete'>
                                            <AiOutlineDelete />
                                        </button>
                                        <div className='divider divider-vertical'>OR</div>
                                        <Link to='/dashboard/payment'className='ml-3 text-lg text-orange-600 font-bold hover:text-orange-800' title='details'>
                                            Pay
                                        </Link>
                                    </div>
                                </th>
                            </tr>
                        })
                    }
                </ tbody>
            </table>
        </div>
    );
};

export default CartTable;