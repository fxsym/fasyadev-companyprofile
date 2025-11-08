"use client"
import Link from "next/link"

export default function PortfolioPreview() {
    const projects = [
        {
            title: "E-Commerce Platform",
            category: "Web Application",
            image: "🛍️",
            description: "Platform e-commerce modern dengan fitur lengkap",
            tags: ["Next.js", "Stripe", "Tailwind"],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Company Profile",
            category: "Corporate Website",
            image: "🏢",
            description: "Website company profile dengan design premium",
            tags: ["React", "CMS", "Animation"],
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Food Delivery App",
            category: "Mobile Web App",
            image: "🍔",
            description: "Aplikasi delivery dengan real-time tracking",
            tags: ["React Native", "Firebase", "Maps"],
            gradient: "from-orange-500 to-red-500"
        }
    ]

    return (
        <section className="py-20 md:py-32 px-6 md:px-16 lg:px-20 bg-bg">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            🎨 Portfolio
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">
                        Portfolio Kami
                    </h2>
                    <p className="text-lg md:text-xl text-text/70">
                        Beberapa project yang telah kami kerjakan dengan hasil memuaskan
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-bg border-2 border-text/10 rounded-3xl overflow-hidden hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Project Image/Icon */}
                            <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                                    {project.image}
                                </div>
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        Lihat Detail
                                    </button>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <div className="text-sm text-primary font-semibold mb-2">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-text mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-text/60 text-sm">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link href="/portofolio">
                        <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg inline-flex items-center gap-3">
                            Lihat Semua Portfolio
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}