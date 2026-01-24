import { LogoInzeros } from "@/components/common/logo-inzeros"
import { FC } from "react"

export const SlideHero: FC = () => {
    return <div className="w-full h-full relative">
        <video
            src="/hero.mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
            className="w-full h-full absolute top-0 left-0 z-40 flex items-center justify-center flex-col"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <LogoInzeros
                width={500}
                height={150}
                className="!w-[200px] !h-[60px] xs:!w-[220px] xs:!h-[66px] sm:!w-[250px] sm:!h-[75px] md:!w-[300px] md:!h-[90px] lg:!w-[400px] lg:!h-[120px]"
            />
        </div>
    </div>
}

