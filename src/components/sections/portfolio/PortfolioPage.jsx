"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function PortfolioPage() {
    const [filter, setFilter] = useState("all")
    const [hoveredProject, setHoveredProject] = useState(null)
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

    const categories = [
        { id: "all", label: "Semua Project", icon: "🎯" },
        { id: "website", label: "Website", icon: "🌐" },
        { id: "webapp", label: "Web App", icon: "⚡" },
        { id: "mobile", label: "Mobile", icon: "📱" }
    ]

    const projects = [
        {
            id: 1,
            title: "Toko Fashion Online",
            category: "website",
            description: "Platform e-commerce fashion modern dengan integrasi payment gateway lengkap, sistem keranjang belanja, dan dashboard admin.",
            image: "/images/projects/fashion-store.jpg", // Placeholder
            tags: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
            color: "from-pink-500 to-rose-500",
            featured: true,
            link: "https://example.com",
            year: "2024"
        },
        {
            id: 2,
            title: "Dashboard Analytics Pro",
            category: "webapp",
            description: "Real-time analytics dashboard untuk monitoring performa bisnis dengan visualisasi data yang interaktif dan comprehensive.",
            image: "/images/projects/dashboard.jpg",
            tags: ["React", "Chart.js", "WebSocket", "API"],
            color: "from-blue-500 to-indigo-500",
            featured: true,
            link: "https://example.com",
            year: "2024"
        },
        {
            id: 3,
            title: "Food Delivery App",
            category: "mobile",
            description: "Aplikasi pemesanan makanan dengan live tracking, payment integration, dan notifikasi real-time.",
            image: "/images/projects/food-app.jpg",
            tags: ["React Native", "Maps API", "Firebase"],
            color: "from-orange-500 to-amber-500",
            featured: true,
            link: "https://example.com",
            year: "2024"
        },
        {
            id: 4,
            title: "Corporate Website",
            category: "website",
            description: "Website company profile premium dengan CMS custom dan SEO optimization.",
            image: "/images/projects/corporate.jpg",
            tags: ["Next.js", "Sanity CMS", "SEO"],
            color: "from-cyan-500 to-blue-500",
            featured: false,
            link: "https://example.com",
            year: "2023"
        },
        {
            id: 5,
            title: "Task Management System",
            category: "webapp",
            description: "Aplikasi kolaborasi tim dengan fitur task assignment dan real-time updates.",
            image: "/images/projects/task-app.jpg",
            tags: ["React", "WebSocket", "PostgreSQL"],
            color: "from-green-500 to-emerald-500",
            featured: false,
            link: "https://example.com",
            year: "2023"
        },
        {
            id: 6,
            title: "Booking Appointment",
            category: "webapp",
            description: "Sistem booking dengan kalender interaktif dan payment gateway.",
            image: "/images/projects/booking.jpg",
            tags: ["Next.js", "Calendar", "Payment"],
            color: "from-purple-500 to-violet-500",
            featured: false,
            link: "https://example.com",
            year: "2023"
        },
    ]

    const filteredProjects = filter === "all" 
        ? projects 
        : projects.filter(p => p.category === filter)

    const featuredProjects = filteredProjects.filter(p => p.featured)
    const regularProjects = filteredProjects.filter(p => !p.featured)

    return (
        <div className="min-h-screen bg-bg">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center px-6 md:px-16 lg:px-20 py-32 overflow-hidden bg-gradient-to-br from-bg via-primary/5 to-accent/5">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div 
                        className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
                    />
                    <div 
                        className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
                    />
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold backdrop-blur-sm">
                            🎨 Our Work
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
                        Portfolio
                        <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
                            Project Terbaik Kami
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-text/70 leading-relaxed max-w-2xl mx-auto">
                        Koleksi karya yang kami buat dengan dedikasi penuh untuk menghadirkan solusi digital terbaik bagi klien
                    </p>
                    
                    {/* Stats */}
                    <div className="flex justify-center gap-8 md:gap-12 pt-8">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                50+
                            </div>
                            <div className="text-sm text-text/60 mt-1">Projects Done</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                30+
                            </div>
                            <div className="text-sm text-text/60 mt-1">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                100%
                            </div>
                            <div className="text-sm text-text/60 mt-1">Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-primary rounded-full" />
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="sticky top-24 z-40 bg-bg/80 backdrop-blur-xl border-b border-text/10 py-6 px-6 md:px-16 lg:px-20">
                <div className="container mx-auto">
                    <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`group px-5 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                                    filter === cat.id
                                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 scale-105"
                                        : "bg-bg border-2 border-text/10 text-text hover:border-primary hover:scale-105"
                                }`}
                            >
                                <span className="text-lg">{cat.icon}</span>
                                <span className="hidden sm:inline">{cat.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects - Showcase Style */}
            {featuredProjects.length > 0 && (
                <section className="py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-bg to-primary/5">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
                                Featured Projects
                            </h2>
                            <p className="text-text/60">Project pilihan dengan kompleksitas tinggi</p>
                        </div>

                        <div className="space-y-16">
                            {featuredProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`group grid lg:grid-cols-2 gap-8 items-center ${
                                        index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                                    }`}
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    {/* Image Side */}
                                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                                            {/* Placeholder - ganti dengan Image component pas ada gambarnya */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center text-white`}>
                                                <div className="text-center space-y-4">
                                                    <div className="text-6xl">🎨</div>
                                                    <div className="text-2xl font-bold">{project.title}</div>
                                                </div>
                                            </div>
                                            
                                            {/* Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${
                                                hoveredProject === project.id ? 'opacity-80' : 'opacity-50'
                                            }`} />

                                            {/* Visit Button on Hover */}
                                            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                                                hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                            }`}>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-8 py-4 bg-white text-black rounded-2xl font-bold hover:scale-110 transition-transform shadow-2xl"
                                                >
                                                    Visit Site →
                                                </a>
                                            </div>
                                        </div>

                                        {/* Glow Effect */}
                                        <div className={`absolute -inset-1 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl transition-opacity duration-500 -z-10 ${
                                            hoveredProject === project.id ? 'opacity-40' : 'opacity-0'
                                        }`} />
                                    </div>

                                    {/* Content Side */}
                                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-lg text-xs font-bold`}>
                                                    FEATURED
                                                </span>
                                                <span className="text-text/40 text-sm">{project.year}</span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-text mb-4">
                                                {project.title}
                                            </h3>
                                            <p className="text-lg text-text/70 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2 bg-bg border-2 border-text/10 text-text rounded-xl text-sm font-medium hover:border-primary transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group"
                                        >
                                            Lihat Detail Project
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Regular Projects - Grid Layout */}
            {regularProjects.length > 0 && (
                <section className="py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-bg">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
                                More Projects
                            </h2>
                            <p className="text-text/60">Project lainnya yang kami kerjakan</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group relative bg-bg border-2 border-text/10 rounded-3xl overflow-hidden hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    {/* Project Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-6xl`}>
                                            🎨
                                        </div>
                                        
                                        {/* Overlay */}
                                        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center ${
                                            hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                                        }`}>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-white text-black rounded-xl font-semibold transform transition-transform hover:scale-110"
                                            >
                                                Visit Site
                                            </a>
                                        </div>
                                        
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-black">
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-text mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-text/60 text-sm leading-relaxed line-clamp-2">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 3).map((tag, i) => (
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
                                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ${
                                            hoveredProject === project.id ? 'translate-x-full' : '-translate-x-full'
                                        }`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <section className="py-32 px-6 text-center">
                    <div className="text-8xl mb-6">🔍</div>
                    <h3 className="text-2xl font-bold text-text mb-2">Tidak ada project</h3>
                    <p className="text-text/60">Coba pilih kategori lain</p>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 md:py-32 px-6 md:px-16 lg:px-20 bg-gradient-to-br from-primary/10 via-accent/10 to-bg">
                <div className="container mx-auto max-w-4xl text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">
                            Punya Project yang
                            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Ingin Diwujudkan?
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-text/70">
                            Mari diskusikan project Anda bersama kami. Kami siap membantu mewujudkan ide digital Anda!
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                        >
                            Hubungi Kami
                            <span>→</span>
                        </a>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-bg border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary/5 transition-all inline-flex items-center justify-center gap-2"
                        >
                            <span>💬</span>
                            Chat WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}