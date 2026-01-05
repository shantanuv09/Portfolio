"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const competencies = [
    "INITIALIZING SYSTEM...",
    "LOADING KERNEL MODULES...",
    "> IDENTITY: SHANTANU VARTAK",
    "> SKILL: RISK ASSESSMENT (ISO/NIST)",
    "> SKILL: SPLUNK / WIRESHARK",
    "> SKILL: AWS / AZURE SECURITY",
    "> SKILL: SOLIDITY / BLOCKCHAIN",
    "> SKILL: PYTHON / BASH SCRIPTING",
    "ESTABLISHING SECURE CONNECTION...",
    "ACCESS GRANTED.",
    "SYSTEM MONITORING ACTIVE."
];

// Update prop interface
interface SystemLogProps {
    deepMode?: boolean;
}

export default function SystemLog({ deepMode = true }: SystemLogProps) {
    const [lines, setLines] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let currentIndex = 0;

        // Initial population
        const interval = setInterval(() => {
            if (currentIndex < competencies.length) {
                setLines(prev => [...prev, competencies[currentIndex]]);
                currentIndex++;
            } else {
                // Loop or reset? Let's just keep adding "monitoring" logs
                const timestamp = new Date().toLocaleTimeString();
                setLines(prev => {
                    const newLines = [...prev, `[${timestamp}] SCANNING...`];
                    if (newLines.length > 8) newLines.shift(); // Keep only last 8 lines
                    return newLines;
                });
            }
        }, 800);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div className={`font-mono text-sm p-4 rounded-lg w-[300px] md:w-[500px] h-64 md:h-80 shrink-0 overflow-hidden backdrop-blur-sm relative transition-all duration-500
            ${deepMode
                ? 'text-green-500/80 bg-black/60 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]'
                : 'text-slate-600 bg-white/80 border border-slate-300 shadow-md'
            }
        `}>
            {/* Header Bar */}
            <div className={`absolute top-0 left-0 w-full h-6 flex items-center px-2 space-x-2 border-b
                ${deepMode ? 'bg-green-500/10 border-green-500/20' : 'bg-slate-100 border-slate-200'}
            `}>
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                <span className={`text-[10px] opacity-60 ml-2 ${deepMode ? 'text-green-400' : 'text-slate-500'}`}>SYS_LOG_V1.0</span>
            </div>

            <div ref={scrollRef} className="mt-6 h-full overflow-y-auto space-y-1 custom-scrollbar">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className={`mr-2 ${deepMode ? 'text-green-700' : 'text-slate-400'}`}>$</span>
                        {line}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className={`w-2 h-4 inline-block align-middle ml-1 ${deepMode ? 'bg-green-500' : 'bg-slate-800'}`}
                />
            </div>
        </div>
    );
}
