import React from 'react';
import { FaBookOpen } from '@react-icons/all-files/fa/FaBookOpen';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';

const Banner = () => {
    return (
        <div className='flex lg:flex-row flex-col justify-between lg:mx-0 mx-2 rounded-2xl'>
            <div className='flex-none w-full lg:w-1/2 border-l-2 border-black rounded-2xl p-4'>
                <img className='h-80 w-full rounded-2xl' src="https://plus.unsplash.com/premium_photo-1675644727129-9e2fbc03c500?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1944&q=80" alt="" />
            </div>
            <div className='flex lg:flex-row flex-col gap-2 items-center flex-none w-full lg:w-1/2 p-4 border-r-2 border-black rounded-2xl'>
                <div>
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
                <div class="flex flex-row lg:flex-col gap-4 mt-3 lg:mt-0 text-3xl">
                    <FaFacebook className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaFacebook>
                    <FaInstagram className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaInstagram>
                    <FaLinkedin className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default Banner;