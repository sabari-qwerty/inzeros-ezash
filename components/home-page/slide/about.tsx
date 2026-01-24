"use client"
import { FC } from "react"

export const SlideAbout: FC = () => {
    return (
        <div className="w-full h-screen relative flex items-center justify-between px-12 lg:px-20 font-sans flex-col-reverse lg:flex-row-reverse" style={{ backgroundColor: '#000000' }}>
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


            </div>
        </div>
    )
}