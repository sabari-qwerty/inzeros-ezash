"use client"
import { FC, useState } from "react"

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

    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        <SlideHero />,
        <SlideGames index={activeIndex} />,
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
                enabled: false
            }
            }
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
            onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
            }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
        </Swiper>
    )
}