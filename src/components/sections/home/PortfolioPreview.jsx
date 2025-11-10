"use client"
import { useState } from "react"
import Image from "next/image"
import { Sparkles, Zap, Crown, ArrowRight, Check, ExternalLink } from "lucide-react"

export default function PortfolioPreview() {
    const [hoveredCard, setHoveredCard] = useState(null)

    const projects = [
        {
            title: "Portfolio Website Agus Photography",
            category: "Portfolio Website",
            image: "/images/aguswebsite.png", // Ganti dengan screenshot website atau OpenGraph image
            url: "https://fxsym.github.io/agusphotography/",
            description: "Website untuk vendor fotografi dengan tujuan untuk memperlihatkan hasil hasil foto jepretan pemilik vendor",
            tags: ["ReactJS", "Tailwind"],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Company Profile PT Nur Hakim Jaya Indonesia",
            category: "Corporate Website",
            image: "/images/nhjwebsite.png", // Ganti dengan screenshot website
            url: "https://nurhakimjayaindonesia.com",
            description: "Website company profile dengan tujuan untuk mengenalkan perusahaan kepada khalayak ramai",
            tags: ["NextJS", "Tailwind", "Maps"],
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Logistik Kelautan Universitas Pendidikan Indonesia",
            category: "Website Pusat Informasi",
            image: "/images/logkelwebiste.png", // Ganti dengan screenshot website
            url: "https://logkel-kdserang.upi.edu/",
            description: "Website pusat sistem informasi logistik kelautan Universitas Pendidikan Indonesia",
            tags: ["React", "Tailwind"],
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
                        Project Terbaru
                        <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                            Yang Kami Kerjakan
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-text/70">
                        Beberapa project yang telah kami kerjakan dengan hasil yang memukau
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-surface border-2 border-text/10 rounded-3xl overflow-hidden hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Project Image/Screenshot */}
                            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                                
                                {/* Hover Overlay with CTA */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a 
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-white text-text rounded-xl font-semibold hover:scale-110 transition-all shadow-lg flex items-center gap-2"
                                    >
                                        Kunjungi Website
                                        <ExternalLink size={16} />
                                    </a>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-text rounded-lg text-xs font-bold">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-text/60 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tags
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div> */}

                                {/* Direct Link */}
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                                >
                                    Lihat Project
                                    <ArrowRight size={14} />
                                </a>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
        </section>
    )
}