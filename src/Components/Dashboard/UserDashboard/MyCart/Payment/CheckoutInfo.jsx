import React, { useCallback } from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';

const CheckoutInfo = ({ cart, price }) => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const handleForm = useCallback(
        (e) => {
            e.preventDefault();
            const form = e.target;
            const firstName = form.firstName.value;
            const lastName = form.lastName.value;
            const email = form.email.value;
            const phone = form.phone.value;
            const currency = form.currency.value;
            const postcode = form.postcode.value;
            const address = form.address.value;

            const products = cart.map(item => ({
                _id: item._id,
                menuItemId: item.menuItemid,
                name: item.name,
                category: item.category,
                price: item.price,
            }));

            const info = {
                firstName,
                lastName,
                email,
                products,
                totalPrice: price,
                phone,
                currency,
                postcode,
                address
            };

            axiosSecure.post('/payment-info', info)
                .then(data => {
                    console.log(data.data);
                    if (data) {
                        window.location.replace(data.data.url);
                        form.reset();
                    }
                });
        },
        [axiosSecure, cart, price]
    );

    return (
        <div className='w-full lg:w-2/3 mx-auto p-4 lg:p-10 shadow-2xl'>
            <h1 className='text-xl font-bold text-center border-b-2 border-black border-dotted p-2'>Checkout</h1>
            <form onSubmit={handleForm} className='my-8 flex flex-col gap-3'>
                <input name='firstName' type="text" placeholder="Enter First Name" className="input input-bordered focus:outline-none w-full max-w-full" />
                <input name='lastName' type="text" placeholder="Enter Last Name" className="input input-bordered focus:outline-none w-full max-w-full" />
                <input name='email' type="text" disabled defaultValue={user?.email} className="input input-bordered focus:outline-none w-full max-w-full" />
                <input name='phone' type="text" placeholder="Enter Phone Number" className="input input-bordered focus:outline-none w-full max-w-full" />
                <div className='flex gap-4 max-w-full'>
                    <select defaultValue='BDT' name='currency' className="select select-bordered focus:outline-none w-24">
                        <option>BDT</option>
                        <option>USD</option>
                    </select>
                    <input name='postcode' type="text" placeholder="Enter Post Code Number" className="input input-bordered focus:outline-none w-full max-w-full" />
                </div>
                <textarea name='address' className="textarea textarea-bordered focus:outline-none max-w-full" placeholder="Enter Address Here"></textarea>

                <p className='text-lg mt-3 font-bold'>Total Items: {cart.length}</p>
                <p className='text-lg mt-3 font-bold'>Total Price: ${price}</p>
                <button className='py-2 px-4 max-w-full text-lg font-semibold mt-3 bg-black text-white hover:bg-orange-600 text-center'>Confirm Order</button>
            </form>
        </div>
    );
};

export default CheckoutInfo;