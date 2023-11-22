import React from 'react';
import { FaQuoteRight } from '@react-icons/all-files/fa/FaQuoteRight';

const quoteDetails = [{
    'title': 'Reading one book is like eating one potato chip.',
    'img': 'https://i.ibb.co/GCL5NNY/books.jpg',
    'author': 'Diane Duane',
    'description': "Each book, like each potato chip, offers a unique experience. It suggests that just as you might want to try different flavors of potato chips, there's a vast array of books with different genres, styles, and stories to explore."
}]

const Quote = () => {
    return (
        <div className='mt-16 shadow-2xl p-10 rounded-xl'>
            {
                quoteDetails.map((quote, index) => {
                    const { title, img, description, author } = quote;
                    return <div key={index} className='flex gap-8 items-center'>
                        <div className='hidden lg:w-1/2 lg:flex justify-center'>
                            <img className='h-full w-full' src={img} alt="" />
                        </div>
                        <div className='flex flex-col w-full lg:w-1/2 gap-6'>
                            <FaQuoteRight className='text-2xl lg:text-3xl text-orange-700 w-full lg:w-48' />
                            <div className='text-center flex flex-col gap-10'>
                                <h1 className='text-2xl lg:text-3xl font-normal font-playFair w-full lg:w-2/3 mx-auto'>{title}</h1>
                                <p className='text-xl font-medium flex items-center justify-center gap-2'><span className='pb-4 text-orange-600'>
                                    ________
                                </span>
                                    {author}
                                </p>
                                <p className='text-justify w-full lg:w-2/3 mx-auto text-md font-serif'>{description}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Quote;