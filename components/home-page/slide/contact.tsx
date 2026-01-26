"use client"
import { FC, useState } from "react"
import { FaInstagram, FaYoutube, FaSteam } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export const SlideContact: FC = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const subject = encodeURIComponent("Contact from Website")
        const body = encodeURIComponent(`From: ${email}\n\n${message}`)

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=inzeros.in@gmail.com&su=${subject}&body=${body}`

        window.open(gmailUrl, "_blank")

        setEmail("")
        setMessage("")
    }

    const socialLinks = [
        {
            icon: <FaInstagram size={24} />,
            url: "https://www.instagram.com/inzeros_",
            label: "Instagram"
        },
        {
            icon: <FaYoutube size={24} />,
            url: "https://www.youtube.com/@Inzeros-studios",
            label: "YouTube"
        },
        {
            icon: <MdEmail size={24} />,
            url: "https://mail.google.com/mail/?view=cm&fs=1&to=inzeros.in@gmail.com",
            label: "Email"
        },
        {
            icon: <FaSteam size={24} />,
            url: "https://steamcommunity.com/id/yourprofile",
            label: "Steam"
        }
    ]

    return (
        <div className="w-full h-full flex flex-col" style={{ backgroundColor: '#0d0d0d' }}>
            {/* Main Content Section */}
            <div className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-24">
                <div className="w-full max-w-4xl">
                    {/* Contact Us Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
                        Contact Us
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
                        {/* Left Side - Contact Form */}
                        <div className="flex-1 w-full max-w-md">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email Input */}
                                <div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        className="w-full h-12 border-2 rounded px-4 bg-transparent text-white placeholder-white/50 focus:outline-none focus:border-white/80 transition-colors"
                                        style={{ borderColor: '#ffffff' }}
                                        required
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Message"
                                        rows={6}
                                        className="w-full border-2 rounded px-4 py-3 bg-transparent text-white placeholder-white/50 focus:outline-none focus:border-white/80 transition-colors resize-none"
                                        style={{ borderColor: '#ffffff' }}
                                        required
                                    />
                                </div>

                                {/* Send Button */}
                                <button
                                    type="submit"
                                    className="w-full h-12 bg-white text-black font-semibold rounded hover:bg-white/90 transition-colors"
                                >
                                    Send
                                </button>
                            </form>
                        </div>

                        {/* Vertical Divider */}
                        <div className="hidden lg:block w-px h-64 bg-white/30"></div>

                        {/* Right Side - Social Media Icons */}
                        <div className="flex lg:flex-col gap-6 items-center justify-center">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-12 h-12 border-2 border-white text-white flex items-center justify-center transition-all hover:bg-white hover:text-black group"
                                >
                                    <div className="group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}