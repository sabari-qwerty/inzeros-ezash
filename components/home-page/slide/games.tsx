"use client";
import { FC, useEffect, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../../app/globals.css";
import { GameImagePreview } from "./game/image-preview";
import { GameOverview } from "./game/game-overview";

interface prop {
  index: number
}

export const SlideGames: FC<prop> = ({ index }) => {
  const swiperRef = useRef<SwiperType>(null!);

  const data = [
    <GameImagePreview swiperRef={swiperRef} />,
    <GameOverview swiperRef={swiperRef} />,
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [index]);

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

        onSlideChange={(swiper) => {
          console.log("swiper changed:", swiper.activeIndex);
        }}


      >
        <SwiperSlide className="w-full h-full">
          <GameImagePreview swiperRef={swiperRef} />
        </SwiperSlide>
        <SwiperSlide>
          <GameOverview swiperRef={swiperRef} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
