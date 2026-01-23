"use client"
import { FC } from "react"

export const SlideContact: FC = () => {
    return (
        <div className="w-full h-full flex flex-col" style={{ backgroundColor: '#0d0d0d' }}>
            {/* Header Section */}
            <div className="px-8 md:px-16 lg:px-24 pt-12 pb-6 flex flex-col items-center">
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    style={{ color: '#ffffff' }}
                >
                    contact
                </h1>
                <div className="h-0.5 w-24 mt-4" style={{ backgroundColor: '#ffffff', opacity: 0.3 }}></div>
            </div>

            {/* Main Content Section */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 pb-12">
                <div className="w-full max-w-5xl">
                    <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
                        {/* Left Side - Contact Form/Info */}
                        <div className="flex-1 space-y-6 w-full">
                            {/* Text Lines */}
                            <div className="space-y-3">
                                <div className="h-1 w-3/4" style={{ backgroundColor: '#ffffff', opacity: 0.6 }}></div>
                                <div className="h-1 w-2/3" style={{ backgroundColor: '#ffffff', opacity: 0.6 }}></div>
                                <div className="h-1 w-1/2" style={{ backgroundColor: '#ffffff', opacity: 0.6 }}></div>
                            </div>

                            {/* Input Field */}
                            <div className="mt-8">
                                <div
                                    className="w-full h-12 border-2 rounded px-4 flex items-center"
                                    style={{ borderColor: '#ffffff', opacity: 0.8 }}
                                >
                                    <span style={{ color: '#ffffff', opacity: 0.5 }}>Enter your message</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Icons */}
                        <div className="flex lg:flex-col gap-6 items-center justify-center">
                            {/* Icon 1 */}
                            <div
                                className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                                style={{ borderColor: '#ffffff' }}
                            >
                                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#ffffff' }}></div>
                            </div>

                            {/* Icon 2 */}
                            <div
                                className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                                style={{ borderColor: '#ffffff' }}
                            >
                                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#ffffff' }}></div>
                            </div>

                            {/* Icon 3 */}
                            <div
                                className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                                style={{ borderColor: '#ffffff' }}
                            >
                                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#ffffff' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Pattern */}
            <div className="w-full h-16 relative overflow-hidden">
                {/* Diagonal stripes pattern */}
                <div className="absolute inset-0 flex">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0"
                            style={{
                                width: '40px',
                                height: '100%',
                                background: i % 2 === 0
                                    ? `repeating-linear-gradient(
                                        45deg,
                                        #ffffff,
                                        #ffffff 2px,
                                        transparent 2px,
                                        transparent 8px
                                      )`
                                    : 'transparent'
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}