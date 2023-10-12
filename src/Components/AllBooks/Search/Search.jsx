import React, { useRef } from 'react';

const Search = ({ setSearch }) => {

    const searchRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(searchRef.current.value)
    };
    const handleClear = () => {
        setSearch(searchRef);
    };

    return (
        <div className='mb-12 flex flex-col'>
            <form
                onChange={handleSearch}
                className='flex gap-3 items-center justify-center'
            >
                <input type="text" ref={searchRef} placeholder="Search here"
                    className="input border-2 focus:border-none border-black rounded-xl w-full max-w-md"
                />
                <button
                    onClick={handleSearch}
                    className="btn btn-outline border-2 border-black rounded-xl">
                    Search
                </button>
            </form>
            <button
                onClick={handleClear}
                className="border-2 w-16 mt-6 mx-auto px-3 border-black rounded-lg font-bold hover:bg-black hover:text-white">
                Clear
            </button>
        </div>
    );
};

export default Search;