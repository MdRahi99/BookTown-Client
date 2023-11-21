import { FaBookOpen } from "@react-icons/all-files/fa/FaBookOpen";
import React from 'react';
import useBooks from "../../../Hooks/useBooks";
import FeaturedBooks from "./FeaturedBooks";

const Featured = () => {

    const [books] = useBooks();

    const featuredBooks = books.filter(book => book.featured === true);

    return (
        <div className="flex flex-col gap-4">
            <div className='flex justify-between items-center text-xl lg:text-3xl font-playFair p-10 border-dashed border-b-2 border-black uppercase text-center rounded-2xl my-12'>
                <FaBookOpen className='text-3xl' />
                <h1>Featured Books</h1>
                <FaBookOpen className='text-3xl' />
            </div>
            <FeaturedBooks featuredBooks={featuredBooks} />
        </div>
    );
};

export default Featured;