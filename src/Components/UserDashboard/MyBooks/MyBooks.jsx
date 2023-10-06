import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { Link } from 'react-router-dom';
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { BiEdit } from "@react-icons/all-files/bi/BiEdit";
import { RiDeleteBack2Fill } from "@react-icons/all-files/ri/RiDeleteBack2Fill";

const MyBooks = () => {

    const { user } = useContext(AuthContext);

    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {
        fetch(`https://book-town-server.vercel.app/my-books?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyBooks(data);
            })
    }, []);

    return (
        <div>
            {
                myBooks.length > 0 ?
                    <div className='mx-4 my-6 lg:my-0'>
                        <h1 className='text-2xl text-center p-2 border-b-4 rounded-xl border-black border-double font-wallPoet mb-10'>My Books List</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-xl p-4'>
                            {
                                myBooks.map((books, index) => {
                                    const { author, desc, email, img, name, price, rating, _id } = books;
                                    index = index + 1;
                                    return <div key={_id} className='w-full mx-auto p-2'>
                                        <h1 className='flex items-center justify-center font-trainOne p-4 bg-black text-white h-8 w-8 rounded-full'>{index}</h1>
                                        <Link
                                            to={`/dashboard/my-book-details/${_id}`}
                                            key={_id}
                                            className='flex hover:bg-[#2f2f2f] justify-between p-4 border-y-2 bg-black text-white rounded-xl gap-6 h-40'>
                                            <div className='flex flex-col gap-3'>
                                                <h1 className='border-b-4 border-white rounded-r-2xl p-2 text-xl font-wallPoet'>{name.slice(0, 20)}</h1>
                                                <p className='text-md font-roboto'>{author.slice(0, 15)}</p>
                                                <p className='flex items-center gap-2 font-bold'><AiFillStar className='text-orange-600 text-lg' />{rating}</p>
                                            </div>
                                            <div className='flex flex-col gap-3 justify-around'>
                                                <Link
                                                    to={`/dashboard/update-book/{_id}`}
                                                    className='p-2 hover:bg-orange-400 bg-orange-600 h-8 w-8 rounded-full text-white' >
                                                    <BiEdit />
                                                </Link>
                                                <button className='p-2 hover:bg-red-500 bg-red-700 text-white h-8 w-8 rounded-full'><RiDeleteBack2Fill /></button>
                                            </div>
                                        </Link>
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