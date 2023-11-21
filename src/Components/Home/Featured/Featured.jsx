import { FaBookOpen } from "@react-icons/all-files/fa/FaBookOpen";
import React from 'react';

const Featured = () => {
    return (
        <div>
            <div className='flex justify-between items-center text-xl lg:text-3xl font-playFair p-10 border-dashed border-b-2 border-black uppercase text-center rounded-2xl my-12'>
                <FaBookOpen className='text-3xl' />
                <h1>Featured Books</h1>
                <FaBookOpen className='text-3xl' />
            </div>
        </div>
    );
};

export default Featured;