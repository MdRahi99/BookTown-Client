import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {

    const location = useLocation();
    const [axiosSecure] = useAxiosSecure();

    const query = new URLSearchParams(location.search);
    const tId = query.get('transactionId');
    const [order, setOrder] = useState({});

    useEffect(() => {
        axiosSecure.get(`/orders/by-transaction-id/${tId}`)
          .then((response) => {
            setOrder(response.data);
          })
          .catch((error) => {
            console.error('Error fetching product:', error);
          });
      }, [tId]);

    if(!order?._id){
        return <h1 className='text-2xl text-center text-orange-600 p-10 mt-10 lg:mt-40 font-bold'>No Order Found</h1>
    }

    const { address, category, currency, email, firstName, lastName, name, paid, paidAt, phone, postcode, price, transactionId, _id } = order;

    return (
        <div className='flex flex-col gap-4 p-8 bg-white rounded-xl'>

            <div className='flex flex-col gap-6'>
                <h3 className='text-2xl font-semibold font-roboto'>Welcome <span className='text-orange-600'>{`${firstName} ${lastName}`}</span></h3>
                <p className='text-lg'>Thank you for your purchase. We've received your order. When the order ships, we will send you a email with tracking info.</p>
                <p className='text-lg font-bold'>Your Order: <span className='border-b-2 border-dotted border-orange-600 p-1'>{transactionId}</span></p>
            </div>

            <div className="overflow-x-auto my-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-lg font-bold'>{name}</td>
                            <td className='text-lg font-bold'>{1}</td>
                            <td className='text-lg font-bold'>{currency} {price}</td>
                            <td className='text-lg font-bold'> {category}</td>
                            <td className='text-lg font-bold'>{paid && <span className='text-orange-600 font-bold'>Paid</span>}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='flex flex-col lg:flex-row p-4 lg:items-center gap-8 lg:gap-0 justify-between'>
                <div>
                    <h1 className='text-xl font-bold mb-2 border-b-2 border-black py-1'>Billing Details:</h1>
                    <p className='text-lg font-medium'>{firstName} {lastName}</p>
                    <p className='text-lg font-medium'>{phone}</p>
                    <p className='text-lg font-medium'>{email}</p>
                </div>
                <div>
                    <h1 className='text-xl font-bold mb-2 border-b-2 border-black py-1'>Shipping Details:</h1>
                    <p className='text-lg font-medium'>{firstName} {lastName}</p>
                    <p className='text-lg font-medium'>{postcode} {address}</p>
                    <p className='text-lg font-medium'>{phone}</p>
                </div>
            </div>

            <h1 className='text-center my-3'>If you have any questions, please email us: <span className='text-orange-600 font-bold'>support@booktown.com</span></h1>

            <button className='py-1 px-3 w-1/6 mx-auto print:hidden bg-black rounded-lg mt-6 hover:bg-orange-600 text-white font-semibold' onClick={() => window.print()}>Print</button>
        </div >
    );
};

export default PaymentSuccess;