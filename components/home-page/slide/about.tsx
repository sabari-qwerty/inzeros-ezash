"use client"
import Image from "next/image"
import { FC } from "react"

export const SlideAbout: FC = () => {
    return (
        <div className="w-full h-screen relative flex items-center lg:justify-between px-4 lg:px-20 font-sans flex-col-reverse lg:flex-row-reverse" style={{ backgroundColor: '#000000' }}>
            {/* Left Section - Game Info */}
            <div className="w-full lg:w-[45%] space-y-2 pr-8 pb-16">
                {/* Game Title */}
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-left font-sans" style={{ color: '#ffffff' }}>
                    WHO WE ARE ?
                </h1>

                {/* Game Description */}
                <div className="space-y-2 text-sm lg:text-2xl leading-relaxed text-left font-sans" style={{ color: '#ffffff', opacity: 0.85 }}>
                    We’re   <span className="font-bold">Ezash</span> and <span className="font-bold">Selvamubhash</span>
                    a two-person game dev team who’ve been living inside
                    Unreal Engine for the past couple of years
                    (yes, we do see daylight sometimes). We build almost
                    everything from scratch: characters, animations, models,
                    graphics, and full level design basically most of what a game
                    needs to come alive.From rough ideas to playable worlds,
                    we handle the whole process ourselves, which means lots
                    of experimenting, breaking things, ﬁxing them, and pushing
                    for better results. We care deeply about atmosphere,
                    gameplay feel, and creating experiences that feel
                    handcrafted, not cookie-cutter.
                </div>


            </div>

            {/* Right Section - Image Preview with Arrow */}
            <div className="w-full lg:w-[50%]  flex items-center justify-center relative py-12  ">
                {/* White Preview Box */}
                <div
                    className="w-full h-fit max-w-2xl"
                    style={{ backgroundColor: '#ffffff' }}
                >

                    <Image src={"https://www.inzeros.in/asstess/22.png"} alt="" width={500} height={300} loading="lazy" className="w-full h-full object-contain" />
                </div>


            </div>

        </div>
    )
}