import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {

    const location = useLocation();
    const [axiosSecure] = useAxiosSecure();

    const query = new URLSearchParams(location.search);
    const tId = query.get('transactionId');
    const [order, setOrder] = useState({});

    axiosSecure.get(`/orders/by-transaction-id/${tId}`).then(data => {
        setOrder(data.data)
    })

    const { address, category, currency, email, firstName, lastName, name, paid, paidAt, phone, postcode, price, product, transactionId, _id } = order;

    return (
        <div className='p-8 bg-white rounded-xl'>
            <h1 className='text-xl font-bold'>Welcome {`${firstName} ${lastName}`}</h1>
            <button className='py-1 px-3 print:hidden bg-black rounded-lg my-6 hover:bg-orange-600 text-white font-semibold' onClick={() => window.print()}>Print</button>
        </div>
    );
};

export default PaymentSuccess;