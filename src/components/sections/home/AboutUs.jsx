"use client"
import { useState } from "react"
import Image from "next/image"

export default function AboutSection() {
    const [hoveredCard, setHoveredCard] = useState(null)

    const founders = [
        {
            name: "Farih Syamsudin",
            role: "Co-Founder & Developer",
            image: "/images/farih.jpg", // Ganti dengan path foto lu
            gradient: "from-blue-500 to-cyan-500",
            description: "Passionate developer yang suka banget eksplorasi teknologi baru"
        },
        {
            name: "Fatih Syamsudin",
            role: "Co-Founder & Developer",
            image: "/images/fatih.jpg", // Ganti dengan path foto kembaran lu
            gradient: "from-purple-500 to-pink-500",
            description: "Creative problem solver dengan passion di UI/UX design"
        }
    ]

    return (
        <section className="relative py-20 md:py-32 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-primary/5 via-bg to-bg overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            🤝 Tentang Kami
                        </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">
                        Kenalan Yuk dengan
                        <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
                            FASYA DEV
                        </span>
                    </h2>

                    {/* Story */}
                    <div className="max-w-3xl mx-auto space-y-4">
                        <p className="text-lg md:text-xl text-text/80 leading-relaxed">
                            Berawal dari passion yang sama terhadap teknologi, kami berdua—
                            <span className="font-bold text-primary"> Farih</span> dan 
                            <span className="font-bold text-accent"> Fatih Syamsudin</span>, 
                            sepasang kembar yang memutuskan untuk mewujudkan impian bersama.
                        </p>
                        <p className="text-lg md:text-xl text-text/80 leading-relaxed">
                            Dari dua nama kami lahirlah 
                            <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> FASYA</span>
                            —sebuah studio digital yang fokus menghadirkan solusi web berkualitas tinggi 
                            dengan sentuhan kreativitas dan teknologi terkini.
                        </p>
                    </div>
                </div>

                {/* Founders Cards */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-12">
                    {founders.map((founder, index) => (
                        <div
                            key={index}
                            className="group relative"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Card */}
                            <div className={`relative bg-bg border-2 rounded-3xl overflow-hidden transition-all duration-500 
                                ${hoveredCard === index 
                                    ? 'border-primary scale-105 shadow-2xl shadow-primary/20' 
                                    : 'border-text/10 scale-100'}`}
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} opacity-0 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-10' : ''}`} />

                                {/* Photo Container */}
                                <div className="relative h-80 md:h-96 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                                    {/* Placeholder - Ganti dengan Image component pas udah ada fotonya */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${founder.gradient} 
                                            flex items-center justify-center text-6xl font-bold text-white
                                            transition-transform duration-500 ${hoveredCard === index ? 'scale-110 rotate-12' : 'scale-100'}`}>
                                            {founder.name.charAt(0)}
                                        </div>
                                    </div>
                                    
                                    {/* Uncomment ini pas udah ada fotonya:
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        fill
                                        className={`object-cover transition-transform duration-700 ${hoveredCard === index ? 'scale-110' : 'scale-100'}`}
                                    />
                                    */}
                                    
                                    {/* Overlay gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent 
                                        transition-opacity duration-500 ${hoveredCard === index ? 'opacity-80' : 'opacity-100'}`} 
                                    />

                                    {/* Floating Badge */}
                                    <div className={`absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl 
                                        font-bold text-sm transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-3' : 'scale-100'}`}>
                                        <span className={`bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
                                            Co-Founder
                                        </span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="relative p-6 space-y-3">
                                    <h3 className="text-2xl font-bold text-text">
                                        {founder.name}
                                    </h3>
                                    <p className={`font-semibold bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
                                        {founder.role}
                                    </p>
                                    <p className="text-text/60 leading-relaxed">
                                        {founder.description}
                                    </p>

                                    {/* Skills/Icons */}
                                    <div className="flex gap-2 pt-2">
                                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${founder.gradient} 
                                            flex items-center justify-center text-white font-bold
                                            transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                                            💻
                                        </div>
                                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${founder.gradient} 
                                            flex items-center justify-center text-white font-bold
                                            transition-transform duration-300 delay-75 ${hoveredCard === index ? 'scale-110' : ''}`}>
                                            🎨
                                        </div>
                                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${founder.gradient} 
                                            flex items-center justify-center text-white font-bold
                                            transition-transform duration-300 delay-150 ${hoveredCard === index ? 'scale-110' : ''}`}>
                                            🚀
                                        </div>
                                    </div>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                        transition-transform duration-1000 ${hoveredCard === index ? 'translate-x-full' : '-translate-x-full'}`} 
                                    />
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${founder.gradient} rounded-3xl blur-xl opacity-0 
                                transition-opacity duration-500 -z-10 ${hoveredCard === index ? 'opacity-30' : ''}`} 
                            />
                        </div>
                    ))}
                </div>

                {/* Values / Mission */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: "🎯", title: "Fokus Kualitas", desc: "Setiap project dikerjakan dengan detail maksimal" },
                            { icon: "⚡", title: "Fast Response", desc: "Komunikasi cepat dan transparan" },
                            { icon: "🤝", title: "Partnership", desc: "Klien adalah partner jangka panjang kami" }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="group bg-bg border-2 border-text/10 rounded-2xl p-6 text-center 
                                    hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h4 className="font-bold text-text mb-2">{value.title}</h4>
                                <p className="text-sm text-text/60">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg text-text/70 mb-6">
                        Siap wujudkan website impian bareng kami?
                    </p>
                    <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg inline-flex items-center gap-3">
                        Mulai Project Sekarang
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </section>
    )
}