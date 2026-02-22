import { FC, useEffect, useRef, useState } from "react";
import { GameOverviewProps } from "./type";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import {
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import "swiper/css";

export const GameOverview: FC<GameOverviewProps> = ({
    swiperRef
}) => {
    const data = Array.from(
        { length: 10 },
        (_, i) => `https://accessts.inzeros.in/asstess/images/G${i + 1}.png`,
    );



    // ✅ store swiper instance
    const currSwiperRef = useRef<SwiperType | null>(null);


    const [currentIndex, setCurrentIndex] = useState(0);

    // 🔥 auto move when state changes
    useEffect(() => {
        if (currSwiperRef.current) {
            currSwiperRef.current.slideTo(currentIndex);
        }
    }, [currentIndex]);


    const handlePrev = () => {

        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            // @ts-ignore
            swiperRef?.current?.slidePrev();
        }
    }

    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }


    return (
        <div className="w-full h-full bg-black flex justify-center items-center relative">
            {/* LEFT BUTTON */}
            <button
                className=" absolute top-1/2 left-2 z-10 flex items-center justify-center rounded-full"
                onClick={handlePrev}
            >
                <MdOutlineKeyboardArrowLeft size={48} />
            </button>

            <Swiper spaceBetween={50} slidesPerView={1} onSwiper={(swiper) => currSwiperRef.current = swiper} onSlideChange={(swiper) => {
                console.log("swiper changed:", swiper.activeIndex);
                setCurrentIndex(swiper.activeIndex)
            }}>
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                ))}

            </Swiper>

            {/* RIGHT BUTTON */}
            <button
                className={`absolute top-1/2 right-2 z-10 flex items-center justify-center rounded-full ${currentIndex === data.length - 1 ? "hidden" : ""}`}
                onClick={handleNext}
            >
                <MdOutlineKeyboardArrowRight size={48} />
            </button>



        </div>
    );
};
