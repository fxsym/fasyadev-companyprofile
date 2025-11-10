"use client"
import { useState } from "react"
import { X, Briefcase, Award, Code, Rocket } from "lucide-react"

export default function ExperiencePopup({ isOpen, onClose, founder }) {
    if (!isOpen || !founder) return null

    const getIcon = (type) => {
        switch (type) {
            case "work": return <Briefcase className="w-5 h-5" />
            case "award": return <Award className="w-5 h-5" />
            case "project": return <Code className="w-5 h-5" />
            case "milestone": return <Rocket className="w-5 h-5" />
            default: return <Code className="w-5 h-5" />
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-3xl max-h-[90vh] bg-bg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header dengan gradient */}
                <div className={`relative bg-gradient-to-br ${founder.gradient} p-8 text-white overflow-hidden`}>
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all hover:rotate-90 duration-300"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="relative">
                        <h2 className="text-3xl font-bold mb-2">{founder.name}</h2>
                        <p className="text-white/90 text-lg">{founder.role}</p>
                    </div>
                </div>

                {/* Timeline Content */}
                <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)] custom-scrollbar">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className={`absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b ${founder.gradient} opacity-20`} />

                        <div className="space-y-8">
                            {founder.experiences.map((exp, index) => (
                                <div 
                                    key={index}
                                    className="relative pl-16 group"
                                    style={{
                                        animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    {/* Icon Circle */}
                                    <div className={`absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {getIcon(exp.type)}
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-gradient-to-br from-bg to-primary/5 border-2 border-text/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group-hover:translate-x-2">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-text mb-1">
                                                    {exp.title}
                                                </h3>
                                                <p className={`text-sm font-semibold bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
                                                    {exp.period}
                                                </p>
                                            </div>
                                            {exp.badge && (
                                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                                                    {exp.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-text/70 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        {exp.achievements && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {exp.achievements.map((achievement, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-lg"
                                                    >
                                                        {achievement}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className={`p-6 bg-gradient-to-r ${founder.gradient} bg-opacity-5 border-t border-text/10`}>
                    <div className="flex items-center justify-between">
                        <p className="text-text/60 text-sm">
                            Total pengalaman: <span className="font-bold text-text">{founder.experiences.length}+</span>
                        </p>
                        <button
                            onClick={onClose}
                            className={`px-6 py-2 bg-gradient-to-r ${founder.gradient} text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, rgb(59, 130, 246), rgb(6, 182, 212));
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, rgb(37, 99, 235), rgb(8, 145, 178));
                }
            `}</style>
        </div>
    )
}