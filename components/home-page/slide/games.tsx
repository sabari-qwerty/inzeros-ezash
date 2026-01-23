"use client"
import { FC, useRef } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../../app/globals.css"
import { GameImagePreview } from "./game/image-preview";
import { GameOverview } from "./game/game-overview";

export const SlideGames: FC = () => {
    const swiperRef = useRef<SwiperType>(null!);

    const data = [
        <GameImagePreview swiperRef={swiperRef} />,
        <GameOverview swiperRef={swiperRef} />

    ]

    return (
        <div className="w-full h-full ">
            <Swiper
                className="mySwiper"
                modules={[Navigation]}
                allowTouchMove={false}
                simulateTouch={false}
                allowSlidePrev={true}
                allowSlideNext={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide className="w-full h-full">
                    <GameImagePreview swiperRef={swiperRef} />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full bg-black flex justify-center items-center">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}

                        >
                            Previous
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>




        </div>
    )
}