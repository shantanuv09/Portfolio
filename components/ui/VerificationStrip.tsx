"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck } from "lucide-react";

const certifications = [
    { name: "CompTIA Security+", issuer: "CompTIA", id: "Dec 2025" },
    { name: "Jr. Penetration Tester", issuer: "TryHackMe", id: "Jul 2025" },
];

interface VerificationStripProps {
    deepMode?: boolean;
}

export default function VerificationStrip({ deepMode = true }: VerificationStripProps) {
    return (
        <div className={`w-full border-y py-8 overflow-hidden relative transition-colors duration-500
            ${deepMode
                ? 'border-slate-800 bg-black/40 backdrop-blur-sm'
                : 'border-slate-200 bg-slate-50/80 backdrop-blur-sm'
            }
        `}>
            <div className={`absolute inset-0 bg-[size:20px_20px] pointer-events-none 
                ${deepMode
                    ? 'bg-grid-slate-900/50 [mask-image:linear-gradient(to_bottom,transparent,black)]'
                    : 'bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,transparent,white)] opacity-50'
                }
            `} />

            <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 relative z-10">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 group"
                    >
                        <div className="relative">
                            <ShieldCheck className="w-10 h-10 text-slate-700 group-hover:text-slate-500 transition-colors" />
                            <motion.div
                                className="absolute -top-1 -right-1 bg-midnight-void rounded-full p-0.5"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <CheckCircle className="w-4 h-4 text-phosphate-green fill-phosphate-green/20" />
                            </motion.div>
                        </div>

                        <div className="flex flex-col">
                            <span className={`text-sm font-bold transition-colors ${deepMode ? 'text-slate-200 group-hover:text-white' : 'text-slate-700 group-hover:text-black'}`}>
                                {cert.name}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                                {cert.issuer} | {cert.id}
                            </span>
                            <span className="text-[10px] text-phosphate-green/80 font-mono flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="w-1.5 h-1.5 rounded-full bg-phosphate-green animate-pulse" />
                                VALIDATED
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
