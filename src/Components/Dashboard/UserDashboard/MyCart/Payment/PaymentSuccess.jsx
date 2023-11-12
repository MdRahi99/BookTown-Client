import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {

    const location = useLocation();
    const [axiosSecure] = useAxiosSecure();

    const query = new URLSearchParams(location.search);
    const transactionId = query.get('transactionId');
    const [order ,setOrder] = useState({});

    axiosSecure.get(`/orders/by-transaction-id/${transactionId}`).then(data =>{
        setOrder(data.data)
    })

    return (
        <div>
            {order.name}
        </div>
    );
};

export default PaymentSuccess;