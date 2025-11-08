"use client"

export default function TechStack() {
    const technologies = [
        { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", icon: "▲", color: "from-gray-800 to-gray-600" },
        { name: "TypeScript", icon: "TS", color: "from-blue-600 to-blue-400" },
        { name: "Tailwind", icon: "🎨", color: "from-cyan-500 to-blue-500" },
        { name: "Node.js", icon: "🟢", color: "from-green-600 to-green-400" },
        { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-500" },
        { name: "PostgreSQL", icon: "🐘", color: "from-blue-700 to-blue-500" },
        { name: "Docker", icon: "🐳", color: "from-blue-500 to-sky-400" },
    ]

    return (
        <section className="py-20 md:py-32 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-bg to-primary/5">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                            💻 Tech Stack
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">
                        Buat Website yang Anda Inginkan
                    </h2>
                    <p className="text-lg md:text-xl text-text/70">
                        Dengan teknologi modern dan powerful yang kami kuasai
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.name}
                            className="group relative bg-bg border-2 border-text/10 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                            
                            <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                                <div className="text-4xl">{tech.icon}</div>
                                <h3 className="font-bold text-text text-lg">{tech.name}</h3>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-text/60 mb-6">Dan masih banyak teknologi lainnya yang kami gunakan</p>
                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg">
                        Konsultasi Gratis
                    </button>
                </div>
            </div>
        </section>
    )
}