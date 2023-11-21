import React from 'react';
import { RiArticleFill } from '@react-icons/all-files/ri/RiArticleFill';
import { FaArrowAltCircleDown } from '@react-icons/all-files/fa/FaArrowAltCircleDown';
import { Link } from 'react-router-dom';
import Title from '../../Hooks/Title';

const Blogs = () => {
    Title('Blogs')
    return (
        <div>
            <div className='flex justify-between items-center text-3xl font-playFair p-10 border-dashed border-b-2 border-black uppercase text-center rounded-2xl my-12'>
                <RiArticleFill className='text-3xl'></RiArticleFill>
                <h1>Latest Blogs</h1>
                <RiArticleFill className='text-3xl'></RiArticleFill>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6'>
                <div className='flex flex-col gap-4 font-playFair h-10/12 rounded-2xl p-4 shadow-lg shadow-gray-300'>
                    <div className='relative'>
                        <img className='w-full rounded-2xl' src="https://niche-18.woovinafree.com/wp-content/uploads/2018/06/blog-01-compressed-e1538468607303-768x454.jpg" alt="" />
                        <h3 className='absolute top-2 left-2 rounded-xl p-2 bg-white'>02 June, 2023</h3>
                    </div>
                    <h3 className='text-2xl font-semibold'>Title</h3>
                    <p className='font-roboto text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, corporis incidunt! Aliquid laudantium ut quos dolores autem expedita repudiandae amet vero veniam, eius id totam.</p>
                    <Link className='flex gap-2 items-center justify-center p-2 bg-black text-white rounded-xl hover:bg-white hover:border-x-2 hover:border-black hover:text-black'>
                        <h3 className='text-sm'>Continue Reading</h3>
                        <FaArrowAltCircleDown className='animate-bounce'></FaArrowAltCircleDown>
                    </Link>
                </div>
                <div className='flex flex-col gap-4 font-playFair h-10/12 rounded-2xl p-4 shadow-lg shadow-gray-300'>
                    <div className='relative'>
                        <img className='w-full rounded-2xl' src="https://niche-18.woovinafree.com/wp-content/uploads/2018/06/blog-01-compressed-e1538468607303-768x454.jpg" alt="" />
                        <h3 className='absolute top-2 left-2 rounded-xl p-2 bg-white'>02 June, 2023</h3>
                    </div>
                    <h3 className='text-2xl font-semibold'>Title</h3>
                    <p className='font-roboto text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, corporis incidunt! Aliquid laudantium ut quos dolores autem expedita repudiandae amet vero veniam, eius id totam.</p>
                    <Link className='flex gap-2 items-center justify-center p-2 bg-black text-white rounded-xl hover:bg-white hover:border-x-2 hover:border-black hover:text-black'>
                        <h3 className='text-sm'>Continue Reading</h3>
                        <FaArrowAltCircleDown className='animate-bounce'></FaArrowAltCircleDown>
                    </Link>
                </div>
                <div className='flex flex-col gap-4 font-playFair h-10/12 rounded-2xl p-4 shadow-lg shadow-gray-300'>
                    <div className='relative'>
                        <img className='w-full rounded-2xl' src="https://niche-18.woovinafree.com/wp-content/uploads/2018/06/blog-01-compressed-e1538468607303-768x454.jpg" alt="" />
                        <h3 className='absolute top-2 left-2 rounded-xl p-2 bg-white'>02 June, 2023</h3>
                    </div>
                    <h3 className='text-2xl font-semibold'>Title</h3>
                    <p className='font-roboto text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, corporis incidunt! Aliquid laudantium ut quos dolores autem expedita repudiandae amet vero veniam, eius id totam.</p>
                    <Link className='flex gap-2 items-center justify-center p-2 bg-black text-white rounded-xl hover:bg-white hover:border-x-2 hover:border-black hover:text-black'>
                        <h3 className='text-sm'>Continue Reading</h3>
                        <FaArrowAltCircleDown className='animate-bounce'></FaArrowAltCircleDown>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Blogs;