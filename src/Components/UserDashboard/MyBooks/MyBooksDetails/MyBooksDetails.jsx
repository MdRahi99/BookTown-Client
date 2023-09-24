import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneDelete } from "@react-icons/all-files/ai/AiTwotoneDelete";

const MyBooksDetails = ({ books, setBooks }) => {

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
            <div className='grid grid-cols-1 w-full lg:w-2/3 mx-auto gap-6 items-center'>
                {
                    books.map(book => {
                        const { _id, img, name, author, rating, price } = book;
                        return (
                            <Link
                                to={`/dashboard/book-details/${_id}`} key={_id} className='rounded-md flex flex-col gap-3 shadow-xl p-4 hover:bg-slate-900 hover:text-white border-x-2 border-black'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-md font-bold font-roboto uppercase hover:text-orange-600'>{name}</h1>
                                        <p className='text-slate-500'>{author}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => handleDelete(_id)}
                                        >
                                            <AiTwotoneDelete  className='text-2xl hover:text-orange-600'/>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyBooksDetails;