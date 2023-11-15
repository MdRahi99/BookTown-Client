import React from 'react';
import useAllPayments from '../../../../Hooks/useAllPayments';

const AllPayments = () => {

    const [payments] = useAllPayments();

    return (
        <div>
            {payments.length}
        </div>
    );
};

export default AllPayments;