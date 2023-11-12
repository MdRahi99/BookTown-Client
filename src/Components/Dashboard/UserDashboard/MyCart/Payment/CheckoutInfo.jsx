import React from 'react';
import useAuth from '../../../../../Hooks/useAuth';

const CheckoutInfo = ({price}) => {
    const {user} = useAuth();
    return (
        <div className=''>
            <h1 className='text-xl font-bold text-center border-b-2 border-black border-dotted p-2'>Checkout</h1>
            <h3 className='text-sm font-bold my-3'>Payment Details</h3>
            <p className='text-sm text-slate-500'>Complete your purchase by providing your payment details delow</p>
            <form className='my-8 flex flex-col gap-3'>
                <input type="text" placeholder="Enter First Name" className="input input-bordered focus:outline-none w-full max-w-lg" />
                <input type="text" placeholder="Enter Last Name" className="input input-bordered focus:outline-none w-full max-w-lg" />
                <input type="text" disabled defaultValue={user?.email} className="input input-bordered focus:outline-none w-full max-w-lg" />
                <input type="text" placeholder="Enter Phone Number" className="input input-bordered focus:outline-none w-full max-w-lg" />
                <textarea className="textarea textarea-bordered focus:outline-none" placeholder="If you have any query type here..."></textarea>
                <p className='text-lg mt-3 font-bold'>Total: ${price}</p>
                <button className='py-2 px-4 text-lg font-semibold mt-3 bg-black text-white hover:bg-orange-600 text-center'>Confirm Order</button>
            </form>
        </div>
    );
};

export default CheckoutInfo;