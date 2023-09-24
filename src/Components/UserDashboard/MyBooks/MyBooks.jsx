import React, { useContext, useEffect, useState } from 'react';
import MyBooksDetails from './MyBooksDetails/MyBooksDetails';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyBooks = () => {

    const [books, setBooks] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const booksData = async () => {
            const data = await fetch('https://book-town-server.vercel.app/my-books')
            const result = await data.json();
            setBooks(result);
        }

        booksData();
    }, []);

    return (
        <div className='w-full'>
            <div className='my-4'>
                <h1 className='w-full py-2 px-4 text-center border-dashed border-b-2 uppercase font-trainOne border-black font-medium rounded-xl text-lg lg:text-3xl'>My Books</h1>
            </div>
            <div>
                {
                    books.find(book => book.user.email === user.email) ?
                        <MyBooksDetails books={books} setBooks={setBooks}></MyBooksDetails>
                        :
                        <div className='text-lg lg:text-4xl px-6 py-3 text-center font-wallPoet font-medium my-8 lg:my-32 border-b-2 border-dotted border-black rounded-xl w-1/2 mx-auto'>No Books Found</div>
                }
            </div>
        </div>
    );
};

export default MyBooks;