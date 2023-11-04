import React, { useEffect, useState } from 'react';
import Books from './Books/Books';
import Search from './Search/Search';
import Loader from '../Shared/Loader/Loader';
import Categories from './Categories/Categories';
import Title from '../../Hooks/Title';
import useBooksCategory from '../../Hooks/useBooksCategory';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const UsedBooks = () => {
    Title('Books')
    const [categories] = useBooksCategory();

    const { loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const bookData = async () => {
            const data = await axiosSecure.get(`/books-details?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            setBooks(data.data);
        }

        bookData();

    }, [asc, search]);

    if (loading) {
        return <Loader></Loader>
    };

    const handleCategory = (category) => {
        setSelectedCategory(category)
    }

    const filteredBooks = selectedCategory
        ? books.filter(curElem => curElem.category === selectedCategory)
        : books;

    return (
        <div>
            <Search setSearch={setSearch}></Search>
            <div className='my-6 text-center'>
                <button
                    className='text-sm hover:bg-black hover:text-white font-roboto p-2 font-bold border-2 rounded-xl border-black'
                    onClick={() => setAsc(!asc)}>
                    {asc ? 'Price High to Low' : 'Price Low to High'}
                </button>
            </div>
            <Categories
                categories={categories}
                handleCategory={handleCategory}>
            </Categories>
            <Books
                filteredBooks={filteredBooks}>
            </Books>
        </div>
    );
};

export default UsedBooks;