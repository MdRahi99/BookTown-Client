import React from 'react';
import { FaBookOpen } from '@react-icons/all-files/fa/FaBookOpen';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-between items-center gap-8 lg:mx-0 mx-2 rounded-2xl'>
            <Carousel className='w-full h-full text-center rounded-xl'>
                <div className=''>
                    <img className='rounded-xl' src="https://plus.unsplash.com/premium_photo-1675644727129-9e2fbc03c500?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1944&q=80" />
                </div>
                <div className=''>
                    <img className='rounded-xl' src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div className=''>
                    <img className='rounded-xl' src="https://images.unsplash.com/photo-1531280518436-9f2cc0fff88a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
            </Carousel>

            <div className='flex lg:flex-row h-full flex-col gap-2 items-center justify-between w-full px-1 lg:px-4 py-4 lg:py-20 border-r-2 border-black rounded-2xl'>
                <div className='shadow-xl rounded-2xl p-4 h-96'>
                    <h1 className='flex flex-col items-center font-trainOne p-4 text-[44px]'>
                        Book
                        <br />
                        <span>
                            <FaBookOpen></FaBookOpen>
                        </span>
                        Town
                    </h1>
                    <p className='text-sm w-2/3 mx-auto border-dashed border-y-2 border-black font-wallPoet p-2 text-center'>Discover the World of Books: Unleash Your Imagination!</p>
                </div>
                <div className="flex flex-row lg:flex-col gap-4 mt-3 lg:mt-0 text-3xl">
                    <FaFacebook className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaFacebook>
                    <FaInstagram className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaInstagram>
                    <FaLinkedin className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default Banner;