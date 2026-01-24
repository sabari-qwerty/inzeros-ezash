import { FC } from "react"
import { GameOverviewProps } from "./type"
import { FaSteam } from "react-icons/fa";

export const GameImagePreview: FC<GameOverviewProps> = ({ swiperRef }) => {
    return (
        <div className="w-full h-screen relative flex items-center justify-between px-12 lg:px-20 font-sans flex-col-reverse lg:flex-row" style={{ backgroundColor: '#000000' }}>
            {/* Left Section - Game Info */}
            <div className="w-[45%] space-y-5 pr-8">
                {/* Game Title */}
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-left font-sans" style={{ color: '#ffffff' }}>
                    OOTY - SILENCE REMAINS
                </h1>

                {/* Game Description */}
                <div className="space-y-2 text-sm lg:text-2xl leading-relaxed text-left font-sans" style={{ color: '#ffffff', opacity: 0.85 }}>
                    <p>
                        The combat system is built around parries, similar to Sekiro. The difficulty is lower than most Souls-like games, with no death penalties.
                    </p>
                    <p>
                        Never tried Sekiro? Worried about its difficulty? This game is perfect for you.
                    </p>
                    <p>
                        Already experienced Sekiro? Then the game's innovative equipment system will be your perfect choice. The game focuses on monster hunting, looting, exploring maps, and boss challenges.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-2">
                    {/* Steam Wishlist Button */}
                    <button
                        className="flex items-center gap-2 px-5 py-3 rounded text-sm font-bold transition-all duration-300 hover:opacity-90 "
                        style={{ backgroundColor: '#ffffff', color: '#000000' }}
                    >
                        <FaSteam className="w-5 h-5" />
                        <span>Wishlist on STEAM</span>
                    </button>

                    <button
                        className="md:hidden lg:hidden flex items-center gap-2 px-5 py-3 rounded text-sm font-bold transition-all duration-300 hover:opacity-90"
                        style={{ backgroundColor: '#ffffff', color: '#000000' }}
                    >
                        <FaSteam className="w-5 h-5" />
                        <span>Wishlist on STEAM</span>
                    </button>
                </div>

            </div>

            {/* Right Section - Image Preview with Arrow */}
            <div className="w-[50%] h-full flex items-center justify-center relative py-12">
                {/* White Preview Box */}
                <div
                    className="w-full h-full max-w-2xl"
                    style={{ backgroundColor: '#ffffff' }}
                >
                    {/* Placeholder for game image/screenshot */}
                </div>

                {/* Navigation Arrow Button - Positioned at right edge */}
                <button
                    onClick={() => swiperRef?.current?.slideNext()}
                    className="hidden  absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 lg:flex items-center justify-center transition-all duration-300 hover:scale-110 group z-10"
                    style={{ backgroundColor: 'transparent' }}
                    aria-label="Next slide"
                >
                    <svg
                        className="w-10 h-10 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}