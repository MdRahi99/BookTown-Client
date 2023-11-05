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
        <div className='mb-12 flex justify-between items-center'>
            <form
                onChange={handleSearch}
                className='flex w-full gap-3 items-center justify-center'
            >
                <input type="text" ref={searchRef} placeholder="Search here"
                    className="input border-2 focus:border-none border-black rounded-xl w-full max-w-md"
                />
                <div>
                    <button
                        onClick={handleClear}
                        className=" border-2 p-3 rounded-xl border-black hover:bg-black hover:text-white">
                        <AiFillDelete className='text-2xl' />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;