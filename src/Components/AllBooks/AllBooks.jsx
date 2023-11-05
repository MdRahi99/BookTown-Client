import React, { useState } from 'react';
import Books from './Books/Books';
import Search from './Search/Search';
import Categories from './Categories/Categories';
import Title from '../../Hooks/Title';
import useBooksCategory from '../../Hooks/useBooksCategory';
import useBooks from '../../Hooks/useBooks';

const UsedBooks = () => {
    Title('Books')
    const [categories] = useBooksCategory();

    const [selectedCategory, setSelectedCategory] = useState('');
    const [books, refetch, asc, setAsc, setSearch] = useBooks();

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