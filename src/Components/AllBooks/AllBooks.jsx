import React, { useEffect, useState } from 'react';
import Books from './Books/Books';

const UsedBooks = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        const bookData = async () => {
            const data = await fetch('https://booktown-server-production.up.railway.app/books-category/')
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

            <div>
                <div>
                    {
                        books.map(book => <Books key={book._id} book={book}></Books>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UsedBooks;