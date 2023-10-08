import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { BiEdit } from "@react-icons/all-files/bi/BiEdit";
import UpdateBook from './UpdateBook';

const MyBookDetails = () => {

    const bookDetails = useLoaderData();
    const [updateBtn, setUpdateBtn] = useState(false);
    const navigate = useNavigate();
    const { author, desc, email, img, name, price, rating, _id } = bookDetails;

    const handleUpdateBtn = () => {
        setUpdateBtn(true);
    };

    return (
        <div>
            {
                bookDetails?.email ?
                    <>
                        {
                            !updateBtn ?
                                <div className='rounded-xl'>
                                    <div className='flex flex-col lg:flex-row items-center justify-between bg-white rounded-xl'>
                                        <div className='w-full lg:w-2/5 p-4 rounded-xl'>
                                            <img className='border-4 border-black rounded-xl h-96 w-full p-1' src={img} alt="" />
                                        </div>
                                        <div className='w-full p-4 lg:w-3/5 mx-3 flex flex-col gap-4'>
                                            <h1 className='border-b-4 rounded-r-xl border-black text-2xl font-wallPoet uppercase'>
                                                {name}
                                            </h1>
                                            <p className='text-lg text-orange-600'><span className='text-md mr-2'>Author Name:</span>{author}</p>
                                            <p className='text-lg text-orange-600'><span className='text-md mr-2'>Rating:</span>{rating}</p>
                                            <p className='text-lg text-orange-600'><span className='text-md mr-2'>Price:</span>{price}</p>
                                            <p className='text-lg text-orange-600'><span className='text-md mr-2'>Description:</span>{desc}</p>
                                            <div className='flex items-center justify-between gap-2 mt-6'>
                                                <Link
                                                    to={`/dashboard/update-book/${_id}`}>
                                                </Link>
                                                <button
                                                    onClick={() => handleUpdateBtn()}
                                                    className='w-full flex gap-2 items-center bg-black p-1 rounded text-white hover:bg-[#585959] justify-center text-xl'>
                                                    Update
                                                    <BiEdit className='text-2xl rounded' />
                                                </button>

                                                <Link to='/dashboard/my-books' className='p-1 font-roboto w-full text-center text-xl hover:bg-slate-600 bg-black text-white rounded'>Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <UpdateBook bookDetails={bookDetails} />
                        }
                    </>
                    :
                    navigate('/dashboard/my-books')
            }
        </div>
    );
};

export default MyBookDetails;