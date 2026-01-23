"use client"
import { FC } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import { SlideHero } from "./hearo";
import { SlideGames } from "./games";
import { SlideAbout } from "./about";
import { SlideContact } from "./contact";
// import required modules
export const Slider: FC = () => {

    const slides = [
        <SlideHero />,
        <SlideGames />,
        <SlideAbout />,
        <SlideContact />,
    ]
    return (
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
                clickable: true,
            }
            }
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
        </Swiper>
    )
}