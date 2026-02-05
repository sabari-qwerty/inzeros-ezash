import { LogoInzeros } from "@/components/common/logo-inzeros"
import { FC } from "react"

export const SlideHero: FC = () => {
    return <div className="w-full h-full relative bg-black">
        <video
            src="https://accessts.inzeros.in/asstess/WEBSITE%20VIDEO.mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover hidden lg:block "
        />
        <div
            className="w-full h-full absolute top-0 left-0 z-40 flex items-center justify-center flex-col block lg:hidden"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <LogoInzeros
                width={250}
                height={250}
            />
        </div>

    </div>
}

