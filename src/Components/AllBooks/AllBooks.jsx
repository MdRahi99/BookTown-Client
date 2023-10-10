import React, { useContext, useEffect, useState } from 'react';
import Books from './Books/Books';
import Search from './Search/Search';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loader from '../Shared/Loader/Loader';
import Categories from './Categories/Categories';
import Title from '../../Hooks/Title';

const UsedBooks = () => {
    Title('Books')

    const { loading } = useContext(AuthContext);

    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const categoriesData = async () => {
            const data = await fetch('https://book-town-server.vercel.app/books-category')
            const result = await data.json();
            setCategories(result);
        }

        categoriesData();
    }, []);

    useEffect(() => {
        const bookData = async () => {
            const data = await fetch('https://book-town-server.vercel.app/books-details/')
            const result = await data.json();
            setBooks(result);
        }

        bookData();

    }, []);

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
            <Search></Search>
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