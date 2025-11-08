"use client"
import { useState, useEffect } from "react"

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20,
                y: (e.clientY / window.innerHeight) * 20
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section className="relative flex min-h-screen items-center px-6 md:px-16 lg:px-20 py-32 bg-gradient-to-br from-bg via-bg to-primary/5 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div 
                    className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                    }}
                />
                <div 
                    className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                    style={{
                        transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
                    }}
                />
            </div>

            <div className="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                {/* Left Column - Text Content */}
                <div className="space-y-6 md:space-y-8">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold backdrop-blur-sm border border-primary/20">
                            ✨ Web Development Expert
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                        Wujudkan Website
                        <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Impian Anda
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-text/70 leading-relaxed">
                        Kami menciptakan website yang tidak hanya cantik dipandang, tapi juga powerful dan sesuai dengan kebutuhan bisnis Anda.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20">
                            Lihat Portfolio
                        </button>
                        <button className="px-8 py-4 bg-bg border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary/5 transition-all">
                            Hubungi Kami
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-text/10">
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                            <div className="text-sm text-text/60">Projects</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-primary">30+</div>
                            <div className="text-sm text-text/60">Clients</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                            <div className="text-sm text-text/60">Satisfied</div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Illustration */}
                <div className="relative">
                    <div className="relative z-10">
                        {/* Main Card */}
                        <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                            <div className="bg-bg/95 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                                {/* Browser Bar */}
                                <div className="flex items-center gap-2 pb-4 border-b border-text/10">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                                    </div>
                                    <div className="flex-1 bg-text/5 rounded-lg px-3 py-1 text-xs text-text/40">
                                        www.your-awesome-site.com
                                    </div>
                                </div>
                                
                                {/* Content Blocks */}
                                <div className="space-y-3">
                                    <div className="h-8 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
                                    <div className="h-4 bg-text/5 rounded w-3/4" />
                                    <div className="h-4 bg-text/5 rounded w-1/2" />
                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                        <div className="h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl" />
                                        <div className="h-20 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-2xl shadow-xl flex items-center justify-center text-3xl animate-bounce">
                            ⚡
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary rounded-2xl shadow-xl flex items-center justify-center text-2xl animate-pulse">
                            🚀
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-primary rounded-full" />
                </div>
            </div>
        </section>
    )
}