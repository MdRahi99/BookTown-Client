import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';
import { BiDollar } from '@react-icons/all-files/bi/BiDollar';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Title from '../../../Hooks/Title';
import useCart from '../../../Hooks/useCart';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const BookDetails = () => {
    Title('Book Details')
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const [,refetch] = useCart();
    const {id} = useParams();
    
    useEffect(() => {
        axiosSecure.get(`/book-details/${id}`)
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error('Error fetching product:', error);
          });
      }, [id]);

    const { author, category, img, name, price, rating, _id } = data;

    const handleAddCart = (_id) => {
        if (user && user.email) {
            const cartItem = { email: user.email, menuItemId: _id, name, img, price, rating, category, author };

            axiosSecure.post('/carts', cartItem)
                .then(data => {
                    refetch();
                    if (data.data && user?.email) {
                        Swal.fire({
                            title: 'Item Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                }) .catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        <div className='flex flex-col gap-8 lg:flex-row w-full justify-between items-center'>
            <div className='w-full lg:w-2/5 p-2 rounded border-r-4 border-black'>
                <img className='rounded-xl mx-auto w-full lg:w-96 h-96' src={img} alt="" />
            </div>
            <div className='flex flex-col ml-0 lg:ml-8 w-full lg:w-3/5 gap-3'>
                <div>
                    <h1 className='text-3xl font-semibold font-serif'>{name}</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-md font-medium text-orange-500 border-r-2 border-black pr-2'>{author}</p>
                    <p className='text-md font-medium flex items-center gap-1'><AiFillStar />{rating}</p>
                </div>

                <div className='mt-6'>
                    <div className='w-full flex items-center'>
                        <p className='text-lg font-medium w-1/4'>Category:</p>
                        <span className='text-gray-800 text-lg'>{category}</span>
                    </div>

                    <div className='w-full flex items-center'>
                        <p className='text-lg font-medium w-1/4'>Price:</p>
                        <span className='text-gray-800 text-lg flex items-center'><BiDollar className='font-bold' />{price}</span>
                    </div>
                </div>

                <div className='mt-6 flex items-center w-full lg:w-1/4 justify-between'>
                    <div className='rounded-md px-3 py-2 hover:bg-slate-600 border-black bg-black text-white font-medium'>
                        <button
                            onClick={() => handleAddCart(_id)}>
                            Add to Cart
                        </button>
                    </div>
                    <div>
                        <Link
                            to='/all-books'
                            className='rounded-md px-3 py-2 hover:border-b-4 hover:text-black hover:bg-white border-black bg-black text-white font-medium'>
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookDetails;