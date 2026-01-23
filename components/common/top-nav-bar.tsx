"use client"

import { FC, useState } from "react"
import Image from "next/image"
import { Facebook, Twitter, Youtube, MessageCircle, Linkedin, Menu, X } from "lucide-react"
import LogoInzeros from "./logo-inzeros"

export const TopNavBar: FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50  ">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">


                        <div className="relative h-8 w-32 lg:h-10 lg:w-40">

                            <LogoInzeros width={"100%"} height={"100%"} />

                        </div>

                    </div>
                </div>
            </nav>


        </>
    )
}