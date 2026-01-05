"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, ArrowRight } from "lucide-react";

const timelineEvents = [
    {
        year: "2025 - 2027",
        title: "MS in Cyber Security Engineering",
        company: "University of Washington",
        description: "Focusing on Cryptography, Information Assurance, and advanced Threat Modeling.",
        type: "education"
    },
    {
        year: "Jun '23 - Dec '23",
        title: "Security Analyst Intern",
        company: "Suma Soft Pvt Ltd",
        description: "Conducted OWASP Top 10 assessments and developed Python scripts for TTP simulation, boosting detection by 50%.",
        type: "work"
    },
    {
        year: "Jun '22 - Jul '22",
        title: "Android Dev Intern",
        company: "Invasystems Inc",
        description: "Implemented security-by-design (RBAC, Encryption) to reduce mobile exploitation risks by 60%.",
        type: "work"
    },
    {
        year: "Aug '21 - Sep '21",
        title: "Cyber Security Intern",
        company: "Ernst & Young",
        description: "Performed ISO 27001/NIST compliance assessments and improved governance posture by 40%.",
        type: "work"
    },
    {
        year: "2020 - 2024",
        title: "B.Tech in CS/IT",
        company: "Symbiosis Skills & Professional Univ",
        description: "Majored in Cyber Security Specialization. Coursework in Malware Analysis and IAM. GPA: 3.5/4",
        type: "education"
    }
];

export default function Timeline({ deepMode }: { deepMode?: boolean }) {
    return (
        <div className="relative w-full max-w-4xl mx-auto py-10">
            {/* Central Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-cyan-900/50 transform md:-translate-x-1/2" />

            {timelineEvents.map((event, index) => {
                const isLeft = index % 2 === 0;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row items-center mb-12 ${isLeft ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Dot */}
                        <div className="absolute left-[-5px] md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-cyan-500 transform md:-translate-x-1/2 z-10" />

                        {/* Content Side */}
                        <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isLeft ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                            <div className={`space-y-2 group cursor-pointer ${isLeft ? 'items-end' : 'items-start'}`}>
                                <div className={`flex items-center space-x-2 text-xs font-mono text-cyan-600 ${isLeft ? 'md:justify-end' : ''}`}>
                                    <Calendar className="w-3 h-3" />
                                    <span>{event.year}</span>
                                </div>

                                <div className={`flex items-center space-x-3 ${isLeft ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                                    <h4 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                                        {event.title}
                                    </h4>
                                    <span className="px-2 py-0.5 text-[10px] uppercase border border-cyan-900 rounded text-cyan-700">
                                        {event.company}
                                    </span>
                                </div>

                                <p className={`text-slate-400 text-sm leading-relaxed transition-all group-hover:text-slate-300
                                    ${isLeft ? 'border-l-2 md:border-l-0 md:border-r-2 border-cyan-900/30 pl-4 md:pl-0 md:pr-4' : 'border-l-2 border-cyan-900/30 pl-4'}
                                `}>
                                    {event.description}
                                </p>
                            </div>
                        </div>

                        {/* Empty Side for layout balance */}
                        <div className="hidden md:block w-1/2" />
                    </motion.div>
                );
            })}
        </div>
    );
}
