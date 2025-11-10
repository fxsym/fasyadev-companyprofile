"use client"
import { useState } from "react"
import Image from "next/image"
import { CgWebsite } from "react-icons/cg"
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedin, FaGitlab, FaGithub } from "react-icons/fa"
import { Eye } from "lucide-react"
import ExperiencePopup from "./ExperiencePopup" // Import komponen popup

export default function AboutSection() {
    const [hoveredCard, setHoveredCard] = useState(null)
    const [selectedFounder, setSelectedFounder] = useState(null)
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const founders = [
        {
            name: "Farih Syamsudin",
            role: "Co-Founder & Lead Developer",
            image: "/images/farihsyamsudin.png",
            gradient: "from-blue-500 to-cyan-500",
            description: "Passionate developer yang suka banget eksplorasi teknologi baru",
            socials: [
                { name: "instagram", icon: FaInstagram, url: "https://instagram.com/farihsyamsudin", color: "hover:bg-pink-600" },
                { name: "gitlab", icon: FaGitlab, url: "https://tiktok.com/@farihsyamsudin", color: "hover:bg-black" },
                { name: "linkedin", icon: FaLinkedin, url: "https://facebook.com/farihsyamsudin", color: "hover:bg-blue-600" },
            ],
            experiences: [
                {
                    type: "milestone",
                    title: "Memulai Journey di Dunia Programming",
                    period: "2020",
                    description: "Pertama kali belajar coding secara otodidak, dimulai dari HTML, CSS, dan JavaScript dasar. Jatuh cinta dengan dunia web development!",
                    badge: "Awal Mula"
                },
                {
                    type: "project",
                    title: "First Freelance Project",
                    period: "2021",
                    description: "Mendapat project pertama membuat landing page untuk UMKM lokal. Pengalaman ini mengajarkan banyak hal tentang client management dan deadline.",
                    achievements: ["Landing Page", "Client Management", "Time Management"]
                },
                {
                    type: "work",
                    title: "Junior Web Developer",
                    period: "2022 - 2023",
                    description: "Bekerja di startup lokal, fokus pada frontend development menggunakan React dan Next.js. Berkontribusi dalam 10+ project web aplikasi.",
                    achievements: ["React.js", "Next.js", "Tailwind CSS", "Team Collaboration"]
                },
                {
                    type: "award",
                    title: "Best Innovation Award",
                    period: "2023",
                    description: "Memenangkan kompetisi hackathon tingkat regional dengan membuat aplikasi edutech yang inovatif.",
                    badge: "Achievement",
                    achievements: ["Hackathon Winner", "Team Lead"]
                },
                {
                    type: "milestone",
                    title: "Mendirikan FASYA DEV",
                    period: "2024",
                    description: "Bersama Fatih, mendirikan studio digital FASYA DEV untuk menghadirkan solusi web berkualitas tinggi kepada klien di Indonesia.",
                    badge: "Current",
                    achievements: ["Co-Founder", "Lead Developer", "Business Strategy"]
                }
            ]
        },
        {
            name: "Fatih Syamsudin",
            role: "Co-Founder & Full Stack Developer",
            image: "/images/fatihsyamsudin.png",
            gradient: "from-purple-500 to-pink-500",
            description: "Website developer muda dengan berbagai penguasaan teknologi dan sangat suka mengoding",
            socials: [
                { name: "instagram", icon: FaInstagram, url: "https://instagram.com/fxsym31", color: "hover:bg-pink-600" },
                { name: "github", icon: FaGithub, url: "https://github.com/fxsym", color: "hover:bg-black" },
                { name: "linkedin", icon: FaLinkedin, url: "https://linkedin.com/in/fatih-syamsudin", color: "hover:bg-blue-600" },
            ],
            experiences: [
                {
                    type: "milestone",
                    title: "Terjun ke Dunia Teknologi",
                    period: "2020",
                    description: "Mulai belajar programming dari YouTube dan dokumentasi online. Fokus pada full-stack development dari awal.",
                    badge: "Awal Mula"
                },
                {
                    type: "project",
                    title: "Portfolio Website Builder",
                    period: "2021",
                    description: "Membuat tool untuk membantu teman-teman membuat portfolio website dengan mudah. Project ini mendapat apresiasi dari komunitas developer lokal.",
                    achievements: ["React", "Node.js", "MongoDB"]
                },
                {
                    type: "work",
                    title: "Full Stack Developer",
                    period: "2022 - 2023",
                    description: "Bergabung dengan agency digital, menghandle berbagai project dari e-commerce hingga company profile. Mendalami backend development.",
                    achievements: ["Full Stack", "Database Design", "API Development", "Cloud Deployment"]
                },
                {
                    type: "project",
                    title: "E-Commerce Platform",
                    period: "2023",
                    description: "Membangun platform e-commerce lengkap dengan payment gateway, inventory management, dan admin dashboard untuk klien enterprise.",
                    badge: "Major Project",
                    achievements: ["Next.js", "PostgreSQL", "Stripe", "AWS"]
                },
                {
                    type: "award",
                    title: "Rising Star Developer",
                    period: "2023",
                    description: "Diakui sebagai salah satu developer muda berbakat oleh komunitas tech Indonesia.",
                    badge: "Recognition"
                },
                {
                    type: "milestone",
                    title: "Co-Founder FASYA DEV",
                    period: "2024",
                    description: "Bersama Farih, membangun FASYA DEV dengan visi menghadirkan solusi digital terbaik untuk bisnis di Indonesia.",
                    badge: "Current",
                    achievements: ["Co-Founder", "Technical Lead", "Product Strategy"]
                }
            ]
        }
    ]

    const handleOpenPopup = (founder) => {
        setSelectedFounder(founder)
        setIsPopupOpen(true)
    }

    const handleClosePopup = () => {
        setIsPopupOpen(false)
        setTimeout(() => setSelectedFounder(null), 300) // Delay untuk animasi
    }

    return (
        <>
            <section className="relative py-20 md:py-32 px-6 md:px-16 lg:px-20 bg-linear-to-tr from-bg via-bg to-primary/40 overflow-hidden">
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
                        <div className="max-w-4xl mx-auto space-y-4">
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
                                        <Image
                                            src={founder.image}
                                            alt={founder.name}
                                            fill
                                            className={`object-contain transition-transform duration-700 ${hoveredCard === index ? 'scale-110' : 'scale-100'}`}
                                        />

                                        {/* Overlay gradient */}
                                        <div className={`absolute inset-0 bg-linear-to-t from-bg via-bg/50 to-transparent 
                                            transition-opacity duration-500 ${hoveredCard === index ? 'opacity-10' : 'opacity-50'}`}
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="relative p-6 space-y-3">
                                        <h3 className="text-2xl font-bold text-text">
                                            {founder.name}
                                        </h3>
                                        <p className="text-text/60 leading-relaxed">
                                            {founder.description}
                                        </p>

                                        {/* Social Media Links */}
                                        <div className="flex gap-3 pt-4">
                                            {founder.socials.map((social, idx) => {
                                                const Icon = social.icon
                                                return (
                                                    <a
                                                        key={idx}
                                                        href={social.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`group/social w-10 h-10 rounded-lg bg-gradient-to-br ${founder.gradient} 
                                                            flex items-center justify-center text-white
                                                            transition-all duration-300 ${hoveredCard === index ? 'scale-110' : 'scale-100'}
                                                            hover:scale-125 ${social.color} hover:shadow-lg`}
                                                        style={{ transitionDelay: `${idx * 75}ms` }}
                                                        aria-label={`${founder.name}'s ${social.name}`}
                                                    >
                                                        <Icon size={18} className="group-hover/social:scale-110 transition-transform" />
                                                    </a>
                                                )
                                            })}
                                        </div>

                                        {/* Button Klik disini */}
                                        <button
                                            onClick={() => handleOpenPopup(founder)}
                                            className={`w-full mt-4 px-6 py-3 bg-gradient-to-r ${founder.gradient} text-white rounded-xl font-semibold 
                                                hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                                                flex items-center justify-center gap-2 group/btn`}
                                        >
                                            <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                            <span>Klik disini</span>
                                        </button>
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

                    {/* Scroll Indicator */}
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
                        <div className="w-10 h-10 border-2 border-primary rounded-full flex justify-center items-center ">
                            <CgWebsite className="text-primary" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Popup */}
            <ExperiencePopup 
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
                founder={selectedFounder}
            />
        </>
    )
}