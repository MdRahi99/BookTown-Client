import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcRating } from "@react-icons/all-files/fc/FcRating";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

const MyBookDetails = ({ books, setBooks }) => {

    const [deletedBook, setDeletedBook] = useState(books);

    const handleDelete = (_id) => {
        fetch(`https://book-town-server.vercel.app/delete-book/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Book deleted successfully");
                    const remaining = deletedBook.filter(book => book._id !== _id);
                    setBooks(remaining);
                }
            })
            .catch(error => {
                console.error("Error deleting book:", error);
            });
    };

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-4 gap-8 items-center'>
                {
                    books.map(book => {
                        const { _id, img, name, author, rating, price } = book;
                        return (
                            <div key={_id} className='rounded-2xl flex flex-col gap-3 shadow-xl outline-dashed outline-[#b3b4b4] p-4 h-full relative'>
                                <div>
                                    <img className='w-full h-64 rounded-xl' src={img} alt="" />
                                </div>
                                <div className='flex h-24 justify-between items-center'>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-xl font-bold font-roboto uppercase'>{name}</h1>
                                        <p className='text-slate-500'>{author}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FcRating className='font-bold text-xl'></FcRating>
                                        <p className='font-semibold'>{rating}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between p-1 text-center rounded-2xl w-full'>
                                    <p className='text-2xl font-semibold'><small className='text-2xl font-bold'>$</small>{price}</p>
                                    <Link
                                        to={`/book-details/${_id}`}
                                        className='flex gap-2 items-center animate-pulse'>
                                        <h1>View Details</h1>
                                        <FaArrowRight></FaArrowRight>
                                    </Link>
                                </div>
                                <button
                                    className='p-1 bg-black rounded-xl text-lg font-medium text-white mt-2 hover:bg-slate-600 text-center'
                                    onClick={() => handleDelete(_id)}>
                                    Delete
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyBookDetails;