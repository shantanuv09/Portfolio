"use client";

import { motion } from "framer-motion";
import { Lock, Unlock, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    status?: "CLASSIFIED" | "PUBLIC" | "RESTRICTED";
    deepMode?: boolean;
}

export default function ProjectCard({ title, description, tags, status = "PUBLIC", deepMode = true }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative group cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Background & Border Container */}
            <div className={`
            absolute inset-0 transition-all duration-500 border
            ${deepMode
                    ? 'bg-midnight-void border-slate-800'
                    : 'bg-white border-slate-200'
                }
            ${isHovered
                    ? (deepMode ? 'border-electric-cobalt shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'border-blue-500 shadow-md')
                    : ''
                }
        `}>
                {/* Corner Markers */}
                <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l transition-colors ${deepMode ? 'border-slate-500 group-hover:border-electric-cobalt' : 'border-slate-300 group-hover:border-blue-600'}`} />
                <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors ${deepMode ? 'border-slate-500 group-hover:border-electric-cobalt' : 'border-slate-300 group-hover:border-blue-600'}`} />
                <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors ${deepMode ? 'border-slate-500 group-hover:border-electric-cobalt' : 'border-slate-300 group-hover:border-blue-600'}`} />
                <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-colors ${deepMode ? 'border-slate-500 group-hover:border-electric-cobalt' : 'border-slate-300 group-hover:border-blue-600'}`} />
            </div>

            {/* Content */}
            <div className={`
            relative p-6 h-full flex flex-col transition-all duration-500
            ${isHovered ? 'grayscale-0' : 'grayscale'}
            ${deepMode
                    ? (isHovered ? '' : 'text-slate-400')
                    : (isHovered ? 'text-slate-900' : 'text-slate-500')
                }
        `}>
                <div className="flex justify-between items-start mb-4">
                    <div className="text-xs font-mono border border-current px-2 py-0.5 rounded opacity-70">
                        {status}
                    </div>
                    {isHovered ? <Unlock className="w-4 h-4 text-electric-cobalt" /> : <Lock className="w-4 h-4" />}
                </div>

                <h3 className={`text-xl font-bold mb-2 font-mono transition-colors
                    ${isHovered
                        ? 'text-electric-cobalt'
                        : (deepMode ? 'text-slate-200' : 'text-slate-800')
                    }
                `}>
                    {title}
                </h3>

                <p className="text-sm leading-relaxed mb-6 flex-grow opacity-80">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 
                            ${deepMode ? 'bg-slate-800/50' : 'bg-slate-100'}
                        ${isHovered ? 'text-electric-cobalt' : 'text-slate-500'}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Scanning Line Animation */}
                {isHovered && (
                    <motion.div
                        layoutId="scan-line"
                        className="absolute inset-x-0 h-[2px] bg-electric-cobalt opacity-50 shadow-[0_0_10px_#3b82f6]"
                        initial={{ top: 0 }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                )}
            </div>
        </motion.div>
    );
}
