import React, { useState } from 'react';
import Books from './Books/Books';
import Search from './Search/Search';
import Categories from './Categories/Categories';
import Title from '../../Hooks/Title';
import useBooksCategory from '../../Hooks/useBooksCategory';
import useBooks from '../../Hooks/useBooks';
import { FaArrowCircleDown } from '@react-icons/all-files/fa/FaArrowCircleDown';
import { FaArrowCircleUp } from '@react-icons/all-files/fa/FaArrowCircleUp';
import { FaFilter } from '@react-icons/all-files/fa/FaFilter';

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
            <Categories
                categories={categories}
                handleCategory={handleCategory}>
            </Categories>
            <div className='flex items-center justify-between gap-8 mb-12'>
                <div className='text-center flex items-center'>
                    <FaFilter className='p-2 text-4xl' />
                    <button
                        className='text-sm border-b-4 border-black w-28 justify-center font-roboto h-10 font-bold flex items-center gap-2'
                        onClick={() => setAsc(!asc)}>
                        {asc ? <div className='flex items-center gap-2'>
                            <span>Low to High</span>
                            <FaArrowCircleDown className='text-lg' />
                        </div> : <div className='flex items-center gap-2'>
                            <span>High to Low</span>
                            <FaArrowCircleUp className='text-lg' />
                        </div>
                        }
                    </button>
                </div>
                <Search setSearch={setSearch}></Search>
            </div>
            <Books
                filteredBooks={filteredBooks}>
            </Books>
        </div>
    );
};

export default UsedBooks;