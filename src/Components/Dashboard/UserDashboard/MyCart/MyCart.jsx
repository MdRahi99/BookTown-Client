import React from 'react';
import Title from '../../../../Hooks/Title';
import useCart from "../../../../Hooks/useCart";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import CartTable from './CartTable';
import { GrLinkNext } from '@react-icons/all-files/gr/GrLinkNext';
import { Link } from 'react-router-dom';

const MyCart = () => {

    Title('My Cart');
    const [axiosSecure] = useAxiosSecure();
    const [cart, refetch] = useCart();
    let price = 0;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-cart/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='mx-4 my-6'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 rounded-xl border-b-2 border-black p-2'>
                <h1 className='text-xl font-bold text-center uppercase'>Total Items: <span className='text-white bg-orange-400 px-3 py-1'>{cart.length}</span></h1>
                <div className='divider'><GrLinkNext className='text-5xl' /></div>
                <h1 className='text-xl font-bold text-center uppercase '>Total Price:
                    <span className='ml-2 text-white bg-orange-400 px-3 py-1'>
                        ${cart.reduce((total, item) => total + parseFloat(item.price), 0)}
                    </span>
                </h1>
                <div className='divider'><GrLinkNext className='text-5xl' /></div>
                <Link
                    to='/dashboard/payment'
                    className='text-lg text-white bg-orange-500 rounded-xl hover:bg-black hover:text-white w-24 px-1 py-1 font-trainOne font-semibold text-center uppercase ml-3'>
                    Pay
                </Link>
            </div>
            <CartTable
                cart={cart}
                handleDelete={handleDelete} />
        </div>
    );
};

export default MyCart;