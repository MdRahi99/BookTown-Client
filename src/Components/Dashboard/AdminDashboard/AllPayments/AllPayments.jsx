import React from 'react';
import useAllPayments from '../../../../Hooks/useAllPayments';
import PaymentsList from './PaymentsList';
import { Link } from 'react-router-dom';

const AllPayments = () => {

    const [payments] = useAllPayments();

    return (
        <div>
            {
                payments.length > 0 ?
                    <div className='mx-4 my-6 lg:my-0'>
                        <h1 className='text-2xl text-center p-2 border-b-4 rounded-xl border-black border-double font-wallPoet mb-10'>Total Orders: {payments.length}</h1>
                        <PaymentsList payments={payments} />
                    </div>
                    :
                    <div className='w-full lg:w-1/2 text-center mb-10 lg:mb-0 mt-28 mx-auto p-8 border-4 border-black'>
                        <h1 className='text-3xl font-wallPoet font-bold mb-8'>You haven't any books!!!</h1>
                        <Link
                            to='/dashboard/sell-books'
                            className='rounded-lg font-wallPoet hover:bg-[#4a4a4a] px-4 py-2 bg-black text-white' >
                            Add Books
                        </Link>
                    </div>
            }
        </div >
    );
};

export default AllPayments;