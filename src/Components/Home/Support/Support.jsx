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
        <div className="flex items-center justify-center h-96 my-8 md:my-24 shadow-inner p-2 lg:p-10 rounded-xl">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={50} 
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 100,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                initialSlide={2}
                className="mySwiper"
            >
                {swiperData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-96">
                            <img src={data.image} alt={data.title} className="w-full rounded-lg h-96" />
                            <h1 className="text-white w-96 text-center text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-80 bg-black p-2 rounded-lg">{data.title}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Support;
