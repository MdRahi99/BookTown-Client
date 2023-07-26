import React from 'react';

const Search = () => {

    return (
        <div className='mb-12'>
            <form
                className='flex gap-3 items-center justify-center'
                onSubmit={(e) => e.preventDefault()}
            >
                <input type="text" placeholder="Type here"
                    className="input border-2 border-black rounded-xl w-full max-w-md"
                />
                <button className="btn btn-outline border-2 border-black rounded-xl">Search</button>
            </form>
        </div>
    );
};

export default Search;