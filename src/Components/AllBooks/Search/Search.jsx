import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete';
import React, { useRef } from 'react';

const Search = ({ setSearch }) => {

    const searchRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(searchRef.current.value)
    };
    const handleClear = (e) => {
        e.preventDefault();
        setSearch('');
        searchRef.current.value = '';
    };

    return (
        <div className='flex justify-between items-center'>
            <form
                onChange={handleSearch}
                className='flex w-full gap-3 items-center justify-center'
            >
                <input type="text" ref={searchRef} placeholder="Search here"
                    className="input h-10 focus:outline-none border-2 border-black rounded-xl w-full"
                />
                <div>
                    <button
                        onClick={handleClear}
                        className="h-10 hover:text-orange-600">
                        <AiFillDelete className='text-3xl' />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;