"use client"
import { FC } from "react"

export const SlideAbout: FC = () => {
    return (
        <div className="w-full h-full flex flex-col" style={{ backgroundColor: '#0d0d0d' }}>
            {/* Header Section */}
            <div className="px-8 md:px-16 lg:px-24 pt-12 pb-6 flex flex-col items-center">
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    style={{ color: '#ffffff' }}
                >
                    about
                </h1>
                <div className="h-0.5 w-24 mt-4" style={{ backgroundColor: '#ffffff', opacity: 0.3 }}></div>
            </div>

            {/* Main Content Section */}
            <div className="flex-1 items-center flex flex-col lg:flex-row  justify-between px-8 md:px-16 lg:px-24 pb-12 gap-12">
                {/* Left Side - Who We Are Content */}
                <div className="flex-1 space-y-8 max-w-2xl">
                    <h2
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: '#ffffff' }}
                    >
                        who we are
                    </h2>

                    <div className="space-y-6">
                        <p
                            className="text-base md:text-lg leading-relaxed"
                            style={{ color: '#ffffff', opacity: 0.8 }}
                        >
                            We are a passionate team of game developers dedicated to creating immersive and engaging gaming experiences that push the boundaries of interactive entertainment.
                        </p>

                        <p
                            className="text-base md:text-lg leading-relaxed"
                            style={{ color: '#ffffff', opacity: 0.8 }}
                        >
                            Our mission is to craft unforgettable moments through innovative gameplay, stunning visuals, and compelling narratives that resonate with players worldwide.
                        </p>

                        <p
                            className="text-base md:text-lg leading-relaxed"
                            style={{ color: '#ffffff', opacity: 0.8 }}
                        >
                            With years of experience and a commitment to excellence, we bring creativity and technical expertise together to deliver games that inspire and entertain.
                        </p>
                    </div>
                </div>

                {/* Right Side - Simple Image Stack */}
                <div className="flex-1 flex items-center justify-center lg:justify-end">
                    <div className="relative w-full max-w-sm">
                        {/* Stacked Images Container */}
                        <div className="relative h-96 md:h-[500px]">
                            {/* Image placeholder - you can replace with actual images */}
                            <div
                                className="absolute top-0 right-0 w-64 h-80 border-2 rounded-lg"
                                style={{
                                    borderColor: '#ffffff',
                                    backgroundColor: '#0d0d0d'
                                }}
                            >
                                <div className="w-full h-full flex items-center justify-center">
                                    <span style={{ color: '#ffffff', opacity: 0.5 }}>Image</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}