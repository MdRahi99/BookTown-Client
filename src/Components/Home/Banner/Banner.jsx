import React from 'react';
import { FaBookOpen } from '@react-icons/all-files/fa/FaBookOpen';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {

    const carouselItems = [
        {
            image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Book Town',
            title: 'Discover the World of Books: Unleash Your Imagination!'
        },
        {
            image: 'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJvb2tzfGVufDB8fDB8fHww',
            name: 'Book Town',
            title: 'Discover the World of Books: Unleash Your Imagination!',
        },
        {
            image: 'https://images.unsplash.com/photo-1531280518436-9f2cc0fff88a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Book Town',
            title: 'Discover the World of Books: Unleash Your Imagination!',
        }
    ];

    return (
        <div className='grid grid-cols-12 justify-between items-center gap-8 lg:mx-0 mx-2 rounded-2xl shadow-xl p-2'>

            <Carousel className='col-span-12 lg:col-span-11 text-center rounded-xl'>
                {
                    carouselItems.map(items => {
                        return <div className='h-96'>
                            <img 
                            className='rounded-xl h-full' 
                            src={items.image} />
                            <div className='legend rounded-xl'>
                                <h1 className='flex flex-col items-center font-trainOne p-4 text-[44px]'>
                                    {items.name.slice(0,4)}
                                    <br />
                                    <span>
                                        <FaBookOpen></FaBookOpen>
                                    </span>
                                    {items.name.slice(5,)}
                                </h1>
                                <p className='text-lg w-full lg:w-2/3 mx-auto border-dashed border-y-2 border-white mb-4 font-wallPoet p-5 text-center'>{items.title}</p>
                            </div>
                        </div>
                    })
                }
            </Carousel>

            <div className="col-span-12 lg:col-span-1 h-full flex items-center border-r-4 rounded-xl border-double bg-slate-100 border-black justify-center flex-row lg:flex-col gap-4 mt-3 lg:mt-0 text-3xl">
                <FaFacebook className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaFacebook>
                <FaInstagram className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaInstagram>
                <FaLinkedin className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaLinkedin>
            </div>
        </div>
    );
};

export default Banner;