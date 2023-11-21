import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Link } from 'react-router-dom';

const ParallaxInfo = () => {

    const parallaxData = {
        img: 'https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?size=626&ext=jpg&ga=GA1.1.400272162.1684998168&semt=sph',
        title: 'DASH INTO THE JOURNEY',
        description: 'EXPLORE THE WORLD NOW'
    };

    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={parallaxData.img}
            bgImageAlt=""
            strength={-200}
            className="h-96 lg:h-[450px] opacity-90 bg-opacity-50"
        >
            <div className='rounded-xl p-4 mt-8 lg:p-20'>
                <h1 className='text-2xl lg:text-4xl font-playFair p-4 mb-8 font-semibold text-center'>{parallaxData.title}</h1>
                <p className='text-lg font-roboto font-medium text-center mx-auto px-3 py-2 w-full lg:w-1/3 border-b-2 border-orange-600 rounded-lg'>
                    {parallaxData.description}
                </p>
                <Link to='/all-books' className='mt-12 bg-orange-600 lg:w-1/6 rounded-lg hover:bg-orange-400 p-1 mx-auto text-white font-bold text-xl flex items-center justify-center'>Let's Start</Link>
            </div>
        </Parallax>
    );
};

export default ParallaxInfo;