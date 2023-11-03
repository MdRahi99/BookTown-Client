import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import Swal from 'sweetalert2';
import Title from '../../../../Hooks/Title';
import useAuth from '../../../../Hooks/useAuth';

const MyBooks = () => {
    Title('My Books')

    const { user, logOut } = useAuth();

    const [myBooks, setMyBooks] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://book-town-server.vercel.app/my-books?email=${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('BookTown-Access-Token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setMyBooks(data);
                }
                else {
                    logOut()
                        .then(() => { })
                        .then(error => {
                            console.log(error);
                            navigate('/')
                        })
                }
            })
    }, []);

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            denyButtonText: `Cancel`,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://book-town-server.vercel.app/delete-book/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'Deleted Successfully!!!',
                                    confirmButtonText: 'Ok'
                                })
                                const remaining = myBooks.filter(books => books._id !== _id);
                                setMyBooks(remaining);
                            }
                        })
                }
                else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
            .catch(error => {
                console.error("Error deleting book:", error);
            });
    };

    return (
        <div>
            {
                myBooks.length > 0 ?
                    <div className='mx-4 my-6 lg:my-0'>
                        <h1 className='text-2xl text-center p-2 border-b-4 rounded-xl border-black border-double font-wallPoet mb-10'>My Books List</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-xl p-4'>
                            {
                                myBooks.map((books, index) => {
                                    const { author, name, rating, _id } = books;
                                    index = index + 1;
                                    return <div key={_id} className='w-full mx-auto p-2'>
                                        <h1 className='flex items-center justify-center font-trainOne p-4 bg-black text-white h-8 w-8 rounded-full'>{index}</h1>
                                        <div
                                            className='flex flex-col justify-between p-4 border-y-2 bg-white text-black rounded-xl gap-1 h-44'>
                                            <div className='flex gap-3 items-center justify-between'>
                                                <div>
                                                    <h1 className='border-b-4 border-black rounded-r-2xl p-2 text-xl font-wallPoet'>{name.slice(0, 20)}</h1>
                                                </div>
                                                <div>
                                                    <button
                                                        onClick={() => handleDelete(_id)}
                                                        className='p-2 hover:bg-red-500 bg-black text-white h-8 w-8 rounded-full'>
                                                        <AiFillDelete />
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-md font-roboto'>{author.slice(0, 15)}</p>
                                            </div>
                                            <div className='flex items-center gap-6 justify-between'>
                                                <div>
                                                    <p className='flex items-center gap-2 font-bold'><AiFillStar className='text-orange-600 text-lg' />{rating}</p>
                                                </div>
                                                <div className=''>
                                                    <Link
                                                        to={`/dashboard/my-book-details/${_id}`}
                                                        className='px-2 py-1 bg-black text-white rounded text-center font-wallPoet hover:bg-slate-600 hover:text-white'>
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
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

export default MyBooks;