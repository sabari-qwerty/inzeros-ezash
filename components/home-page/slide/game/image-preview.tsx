import { FC } from "react"
import { GameOverviewProps } from "./type"

export const GameImagePreview: FC<GameOverviewProps> = ({ swiperRef }) => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4 md:p-8" style={{ backgroundColor: '#0d0d0d' }}>
            <div className="max-w-7xl w-full h-full flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Left Section - Game Info */}
                <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6">
                    <div className="space-y-3 md:space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: '#ffffff' }}>
                            Games
                        </h1>
                        <div className="space-y-2">
                            <div className="h-1 w-20 md:w-32 rounded-full" style={{ backgroundColor: '#ffffff' }}></div>
                            <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: '#ffffff' }}>
                                Discover amazing games and experiences.
                            </p>
                            <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: '#ffffff' }}>
                                Explore our collection of interactive entertainment designed to captivate and engage.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => swiperRef?.current?.slideNext()}
                        className="mt-4 md:mt-8 px-6 md:px-8 py-3 md:py-4 font-semibold rounded-lg shadow-lg hover:opacity-80 transition-all duration-300 w-fit text-sm md:text-base"
                        style={{ backgroundColor: '#ffffff', color: '#0d0d0d' }}
                    >
                        View Details →
                    </button>
                </div>

                {/* Right Section - Game Preview Image */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-full h-64 md:h-full max-h-[400px] md:max-h-[600px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 transition-all duration-300" style={{ borderColor: '#ffffff' }}>
                        <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#0d0d0d' }}>
                            <div className="text-center space-y-3 md:space-y-4">
                                <div className="w-20 h-20 md:w-32 md:h-32 mx-auto rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#ffffff' }}>
                                    <span className="text-4xl md:text-6xl">🎮</span>
                                </div>
                                <p className="text-xs md:text-sm uppercase tracking-wider" style={{ color: '#ffffff' }}>Game Preview</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}