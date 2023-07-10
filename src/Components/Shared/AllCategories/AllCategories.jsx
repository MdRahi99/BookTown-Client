import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllCategories = () => {
    const [allCategories, setAllCategories] = useState([]);
    const [error, setError] = useState('');

    const getCategoryData = async () => {
        try {
            const res = await axios.get('https://book-town-server.vercel.app/books-category');
            setAllCategories(res.data);
        }
        catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        getCategoryData();
    }, []);

    return (
        <div className='flex flex-col w-full lg:gap-3 bg-white text-black lg:bg-black lg:text-white p-4 rounded-2xl'>
            <h3 className='hidden lg:block text-lg text-center lg:rounded-2xl font-wallPoet uppercase border-b-2 lg:border-y-4 border-black lg:border-white py-2'>All Categories</h3>

            <div>
                {
                    error !== '' && <h3 className='text-2xl text-red-600'>{error}</h3>
                }
            </div>

            <div className='flex flex-col gap-2 lg:gap-6'>
                {
                    allCategories.map(categories => <Link 
                        key={categories._id}
                        to={`/books-category/${categories._id}`}
                        className='border-b-2 border-black lg:border-white hover:bg-black hover:text-white lg:hover:bg-white lg:hover:text-black text-center font-wallPoet rounded-2xl p-2'
                    >
                        <button>{categories.category}</button>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default AllCategories;