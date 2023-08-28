import React, { useEffect, useState } from 'react';
import MyBookDetails from './MyBookDetails/MyBookDetails';

const MyBooks = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const booksData = async () => {
            const data = await fetch('https://book-town-server.vercel.app/my-books')
            const result = await data.json();
            setBooks(result);
        }

        booksData();
    }, []);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 mx-4 gap-8 items-center'>
            {
                books.map(book => {
                    const { _id } = book;
                    return (
                        <MyBookDetails
                            key={_id}
                            book={book}
                        >
                        </MyBookDetails>
                    )
                })
            }
        </div>
    );
};

export default MyBooks;