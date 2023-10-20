import React from 'react';
import { FaShippingFast } from '@react-icons/all-files/fa/FaShippingFast';
import { MdAttachMoney } from '@react-icons/all-files/md/MdAttachMoney';
import { GiTakeMyMoney } from '@react-icons/all-files/gi/GiTakeMyMoney';
import { BiPhoneCall } from '@react-icons/all-files/bi/BiPhoneCall';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Support = () => {

    const swiperData = [
        {
            image: "https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?size=626&ext=jpg&ga=GA1.1.400272162.1684998168&semt=sph",
            title: "Easy to Read"
        },
        {
            image: "https://img.freepik.com/free-photo/books-magnifying-glass_93675-135644.jpg?size=626&ext=jpg&ga=GA1.1.400272162.1684998168&semt=ais",
            title: "Find your next read effortlessly"
        },
        {
            image: "https://img.freepik.com/free-photo/purple-calendar-clock-icon-3d-reminder-notification-concept-website-ui-purple-background-3d-rendering-illustration_56104-1317.jpg?size=626&ext=jpg&ga=GA1.1.400272162.1684998168&semt=sph",
            title: "Clear, concise, and convenient."
        },
        {
            image: "https://img.freepik.com/free-vector/gradient-glossary-illustration_23-2150290958.jpg?size=626&ext=jpg&ga=GA1.1.400272162.1684998168&semt=ais",
            title: "Browse, buy, and sell with ease."
        },
        {
            image: "https://img.freepik.com/free-vector/online-bookstore-isometric-illustration_1284-17987.jpg?size=626&ext=jpg&ga=GA1.1.400272162.1684998168&semt=ais",
            title: "Selling books, simplified."
        },
    ]

    return (
        <div className='my-12 shadow-inner shadow-black p-4 lg:p-20 rounded-xl'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                initialSlide={2}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    swiperData.map(data => {
                        return <SwiperSlide className='h-64 w-96 rounded-xl'>
                            <div className=''>
                                <img className='rounded-xl absolute w-full h-full opacity-60' src={data.image} />
                                <h3 className='border-x-8 border-black opacity-90 p-2 mx-2 rounded-xl relative text-center top-28 bg-slate-50 text-black text-2xl font-mono font-semibold'>{data.title}</h3>
                            </div>
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </div>
    );
};

export default Support;