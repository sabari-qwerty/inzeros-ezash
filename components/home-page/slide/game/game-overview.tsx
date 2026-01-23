import { FC } from "react"
import { GameOverviewProps } from "./type"


export const GameOverview: FC<GameOverviewProps> = ({ swiperRef }) => {
    return (
        <div className="w-full h-full bg-black flex justify-center items-center">
            <button
                onClick={() => swiperRef?.current?.slideNext()}

            >
                Next
            </button>
        </div>
    )
}   