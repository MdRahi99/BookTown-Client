import React from 'react';
import useAllPayments from '../../../../Hooks/useAllPayments';
import PaymentsList from './PaymentsList';

const AllPayments = () => {

    const [payments] = useAllPayments();

    return (
        <div>
            {
                payments.length > 0 ?
                    <div className='mx-4 my-6 lg:my-0'>
                        <h1 className='text-2xl text-center p-2 border-b-4 rounded-xl border-black border-double font-playFair mb-10'>Total Orders: {payments.length}</h1>
                        <PaymentsList payments={payments} />
                    </div>
                    :
                    <div className='w-full lg:w-1/2 text-center mb-10 lg:mb-0 mt-28 mx-auto p-8 border-4 border-black'>
                        <h1 className='text-3xl font-playFair font-bold'>No Payments Available!!!</h1>
                    </div>
            }
        </div >
    );
};

export default AllPayments;