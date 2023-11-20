import { AiOutlineDelete } from '@react-icons/all-files/ai/AiOutlineDelete';
import { AiOutlineStar } from '@react-icons/all-files/ai/AiOutlineStar';
import React from 'react';
import { Link } from 'react-router-dom';

const OrdersList = ({ orders }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead className='text-center'>
                    <tr className='w-full'>
                        <th>#</th>
                        <th>Transaction Id</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Payment Date</th>
                        <th>Status</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        orders.map((order, index) => {
                            const { _id, transactionId, paid, status, paidAt, currency, totalPrice } = order;
                            return <tr key={_id} className='w-full'>
                                <th>
                                    <span className='mask mask-squircle border-r-2 border-black p-3'>
                                        {index + 1}
                                    </span>
                                </th>
                                <td>
                                    <div className="font-bold">{transactionId}</div>
                                </td>
                                <td>
                                    <div className="font-bold">{currency + ' ' + totalPrice}</div>
                                </td>
                                <td>
                                    {
                                        paid &&
                                        <span className="badge badge-success badge-md p-2 font-semibold">Paid</span>
                                    }
                                </td>
                                <td>
                                    <div className="font-bold">{paidAt.slice(0, 10)}</div>
                                </td>
                                <td>
                                    {
                                        status ?
                                        <div className="font-bold">
                                            Delivered
                                            </div>
                                            :
                                            <div className="font-bold">
                                            Pending
                                            </div> 
                                    }
                                </td>
                                <th>
                                    <Link
                                        className='px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-400'
                                        to={`/dashboard/payment/success?transactionId=${transactionId}`}>
                                        Download
                                    </Link>
                                </th>
                            </tr>
                        })
                    }
                </ tbody>
            </table>
        </div>
    );
};

export default OrdersList;