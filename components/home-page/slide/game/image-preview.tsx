import { FC } from "react";
import { GameOverviewProps } from "./type";
import { FaSteam } from "react-icons/fa";
import Image from "next/image";

export const GameImagePreview: FC<GameOverviewProps> = ({ swiperRef }) => {
  return (
    <div
      className="w-full  h-screen relative flex items-center lg:justify-between px-4 lg:px-20 font-sans flex-col-reverse lg:flex-row"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Left Section - Game Info */}
      <div className=" w-full   lg:w-[45%] space-y-5 pr-8  ">
        {/* Game Title */}
        <h1
          className="text-xl lg:text-5xl font-bold leading-tight text-left font-sans "
          style={{ color: "#ffffff" }}
        >
          OOTY - SILENCE REMAINS
        </h1>

        {/* Game Description */}
        <div
          className="space-y-2 text-sm lg:text-2xl leading-relaxed text-left font-sans"
          style={{ color: "#ffffff", opacity: 0.85 }}
        >
          Four friends travel to a remote, abandoned palace in the misty hills
          of <span className="font-bold">Ooty</span>, searching for thrills.
          What starts as an adventure turns into a nightmare when darkness
          falls. Play as one of them, alone and hunted, and uncover the palace’s
          secrets to survive the night. Escape or become part of the palace
          forever
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
          {/* Steam Wishlist Button */}
          <button
            className="flex gap-2 px-8    text-sm font-bold  transition-all duration-300 hover:opacity-90  rounded-xl justify-center items-center cursor-pointer "
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
            onClick={() =>
              window.open(
                "https://store.steampowered.com/app/4373720/OOTY__Silence_Remains/",
              )
            }
          >
            <div className="flex  items-center justify-center  gap-0 relative py-2 space-x-2 ">
              <FaSteam className="w-10 h-10" />
              <span className="flex flex-col gap-0 relative ">
                <span className="text-[8px] text-left absolute top-[4px] font-mono w-full">
                  Wishlist on
                </span>
                <span className="pt-3 text-left text-2xl relative ">
                  STEAM
                  <sup className="text-[6px] absolute top-[16px] ">TM</sup>
                </span>
              </span>
            </div>
          </button>

          <button className=" md:hidden lg:hidden  px-5 py-12 "></button>
        </div>
      </div>

      {/* Right Section - Image Preview with Arrow */}
      <div className="w-full lg:w-[50%]  flex items-center justify-center relative py-12 ">
        {/* White Preview Box */}
        <button
          className="w-full h-fit max-w-2xl cursor-pointer"
          style={{ backgroundColor: "#ffffff" }}
          onClick={() => swiperRef?.current.slideNext()}
        >
          <Image
            src={"https://accessts.inzeros.in/asstess/11.png"}
            alt=""
            width={500}
            height={300}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </button>

      </div>
    </div>
  );
};
