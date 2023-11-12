import React from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const CheckoutInfo = ({ productInfo }) => {
    const { user } = useAuth();
    const {_id, price, name, category} = productInfo;
    const [axiosSecure] = useAxiosSecure();

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;;
        const phone = form.phone.value;
        const currency = form.currency.value;
        const postcode = form.postcode.value;
        const address = form.address.value;

        const info = { product: _id, firstName, lastName, name, category, email, price, phone, currency, postcode, address };

        axiosSecure.post('/payment-info', info)
            .then(data => {
                if (data) {
                    console.log(data);
                    window.location.replace(data.data.url)
                    form.reset();
                }
            })
    }

    return (
        <div className=''>
            <h1 className='text-xl font-bold text-center border-b-2 border-black border-dotted p-2'>Checkout</h1>
            <h3 className='text-sm font-bold my-3'>Payment Details</h3>
            <p className='text-sm text-slate-500'>Complete your purchase by providing your payment details below</p>
            <form onSubmit={handleForm} className='my-8 flex flex-col gap-3'>
                <input name='firstName' type="text" placeholder="Enter First Name" className="input input-bordered focus:outline-none w-full max-w-lg" />
                <input name='lastName' type="text" placeholder="Enter Last Name" className="input input-bordered focus:outline-none w-full max-w-lg" />
                <input name='email' type="text" disabled defaultValue={user?.email} className="input input-bordered focus:outline-none w-full max-w-lg" />
                <input name='phone' type="text" placeholder="Enter Phone Number" className="input input-bordered focus:outline-none w-full max-w-lg" />
                <div className='flex gap-4'>
                    <select defaultValue='BDT' name='currency' className="select select-bordered focus:outline-none w-24">
                        <option>BDT</option>
                        <option>USD</option>
                    </select>
                    <input name='postcode' type="text" placeholder="Enter Post Code Number" className="input input-bordered focus:outline-none w-full max-w-lg" />
                </div>
                <textarea name='address' className="textarea textarea-bordered focus:outline-none" placeholder="Enter Address Here"></textarea>

                <p className='text-lg mt-3 font-bold'>Total: ${price}</p>
                <button className='py-2 px-4 text-lg font-semibold mt-3 bg-black text-white hover:bg-orange-600 text-center'>Confirm Order</button>
            </form>
        </div>
    );
};

export default CheckoutInfo;