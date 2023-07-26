import React, { useContext, useEffect, useState } from 'react';
import Books from './Books/Books';
import Search from '../Shared/Search/Search';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loader from '../Shared/Loader/Loader';

const UsedBooks = () => {

    const {loading} = useContext(AuthContext);

    const [books, setBooks] = useState([]);
    useEffect(() => {
        const bookData = async () => {
            const data = await fetch('https://book-town-server.vercel.app/books-details/')
            const result = await data.json();
            setBooks(result);
        }

        bookData();

    }, []);

    if(loading){
       return <Loader></Loader>
    }

    return (
        <div>
            <Search></Search>
            <div className='grid grid-cols-1 lg:grid-cols-4 mx-4 gap-8 items-center'>
                {
                    books.map(book => <Books key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default UsedBooks;