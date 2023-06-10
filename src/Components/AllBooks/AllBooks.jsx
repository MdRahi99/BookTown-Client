import React from 'react';

const UsedBooks = () => {
    return (
        <div>
            <div className='flex gap-3 items-center justify-center'>
                <input type="text" placeholder="Type here" className="input border-2 border-black rounded-xl w-full max-w-md" />
                <button className="btn btn-outline border-2 border-black rounded-xl">Search</button>
            </div>
        </div>
    );
};

export default UsedBooks;