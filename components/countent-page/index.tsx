"use client"

import { FC, useEffect, useState } from "react"
import { LogoInzeros } from "../common/logo-inzeros"

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export const ContentPage: FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 30,
        hours: 3,
        minutes: 5,
        seconds: 54
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev

                if (seconds > 0) {
                    seconds--
                } else if (minutes > 0) {
                    minutes--
                    seconds = 59
                } else if (hours > 0) {
                    hours--
                    minutes = 59
                    seconds = 59
                } else if (days > 0) {
                    days--
                    hours = 23
                    minutes = 59
                    seconds = 59
                }

                return { days, hours, minutes, seconds }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatNumber = (num: number): string => {
        return num.toString().padStart(2, '0')
    }

    return (
        <div className="w-screen h-screen bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center justify-center ">
                <div className="logo-wrapper w-full max-w-[90vw] px-4 mb-8 flex items-center justify-center">
                    <LogoInzeros
                        width={500}
                        height={150}
                        className="!w-[200px] !h-[60px] xs:!w-[220px] xs:!h-[66px] sm:!w-[250px] sm:!h-[75px] md:!w-[300px] md:!h-[90px] lg:!w-[400px] lg:!h-[120px]"
                    />
                </div>

                <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-5 font-['Inversionz_Unboxed',monospace]">
                    <div className="relative">
                        <span className="timer-number font-normal text-white">
                            {formatNumber(timeLeft.days)}
                        </span>
                    </div>
                    <span className="timer-separator font-normal text-white opacity-80">:</span>
                    <div className="relative">
                        <span className="timer-number font-normal text-white">
                            {formatNumber(timeLeft.hours)}
                        </span>
                    </div>
                    <span className="timer-separator font-normal text-white opacity-80">:</span>
                    <div className="relative">
                        <span className="timer-number font-normal text-white">
                            {formatNumber(timeLeft.minutes)}
                        </span>
                    </div>
                    <span className="timer-separator font-normal text-white opacity-80">:</span>
                    <div className="relative">
                        <span className="timer-number font-normal text-white">
                            {formatNumber(timeLeft.seconds)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}   
