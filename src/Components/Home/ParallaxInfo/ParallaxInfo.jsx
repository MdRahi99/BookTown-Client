import React from 'react';
import { Parallax, Background } from 'react-parallax';

const ParallaxInfo = () => {

    const parallaxData = {
        img: 'https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?size=626&ext=jpg&ga=GA1.1.400272162.1684998168&semt=sph',
        title: 'Discover Your New You',
        description: 'Books are timeless repositories of knowledge, and our platform is designed with the same principle in mind. Delve into an expansive digital library where you can access a wealth of literary treasures, ranging from classics to contemporary gems.Our user-friendly, lightweight design ensures a smooth and hassle-free reading experience. Load times are minimal, making it a breeze to explore, discover, and access your favorite books from any device.By embracing digital books, you join us in the eco-conscious journey to save trees and reduce carbon footprint. Enjoy the convenience of hundreds of books without contributing to deforestation.We prioritize inclusivity, providing options for adjustable text size, font style, and screen color. Enjoy an accessible reading experience tailored to your unique preferences.Unleash the transformative power of literature and enhance your life with the knowledge, inspiration, and entertainment that books offer. Our lightweight website is your gateway to a world of reading pleasure.'
    };

    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={parallaxData.img}
            bgImageAlt=""
            strength={-200}
        >
            <div className='rounded-xl p-4 lg:p-20'>
                <h1 className='text-2xl lg:text-4xl font-wallPoet border-b-4 border-black p-4 mb-6 font-semibold text-center'>{parallaxData.title}</h1>
                <p className='text-sm lg:text-lg font-sans bg-black text-white opacity-70 p-4 text-justify lg:p-20 rounded-xl'>
                    {parallaxData.description}
                </p>
            </div>
        </Parallax>
    );
};

export default ParallaxInfo;