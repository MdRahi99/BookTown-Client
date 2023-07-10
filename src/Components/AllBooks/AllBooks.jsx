import React, { useEffect, useState } from 'react';
import Books from './Books/Books';

const UsedBooks = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        const bookData = async () => {
            const data = await fetch('https://book-town-server.vercel.app/books-details/')
            const result = await data.json();
            setBooks(result);
        }

        bookData();

    }, []);

    return (
        <div>
            <div className='flex gap-3 items-center justify-center'>
                <input type="text" placeholder="Type here" className="input border-2 border-black rounded-xl w-full max-w-md" />
                <button className="btn btn-outline border-2 border-black rounded-xl">Search</button>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 mx-4 my-12 gap-8 items-center'>
                {
                    books.map(book => <Books key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default UsedBooks;