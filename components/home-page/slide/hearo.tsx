import { FC } from "react"

export const SlideHero: FC = () => {
    return <div className="w-full h-full">
        <video src="/hero.mp4" autoPlay loop muted />
    </div>
}