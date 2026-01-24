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
    // Target date: February 22nd, 2026 at 00:00:00
    const targetDate = new Date('2026-02-21T00:00:00').getTime()

    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date().getTime()
        const difference = targetDate - now

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
        }
    }

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatNumber = (num: number): string => {
        return num.toString().padStart(2, '0')
    }

    const width = "lg:w-[800px] md:w-[690px] xs:w-[220px]"
    const height = "lg:h-[250px] md:h-[250px] xs:h-[66px]"

    return (

        <div className="w-screen h-screen bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center justify-center ">
                <div className={`bg-green-500 ${width} ${height}`}>
                    <LogoInzeros
                        width={"100%"}
                        height={"100%"}
                    />
                </div>
                <div className={`bg-red-400 ${width} py-2 `}>

                    <div className="w-full  br-red-400">
                        <p>Days</p>
                    </div>

                </div>
            </div>
        </div>

    )
}   
