"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IcebergBackgroundProps {
    deepMode: boolean;
}

export default function IcebergBackground({ deepMode }: IcebergBackgroundProps) {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

    useEffect(() => {
        // Generate 'glitch' particles for wireframe look
        const newParticles = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 5 + 5
        }));
        setParticles(newParticles);
    }, []);

    // Animation Variants for "Perfect" Physics
    const floatingIceberg: any = {
        animate: {
            y: [0, -15, 0],
            rotate: [0, 1, -1, 0], // Subtle rotation for buoyancy
            transition: {
                y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }
        }
    };

    const waterSurface: any = {
        animate: {
            scaleY: [1, 1.05, 1], // Breathing water effect
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // New variant for the entire water plane to bob with the iceberg
    const oceanSwell: any = {
        animate: {
            y: [0, -12, 0], // Slightly less than iceberg (-15) to simulate mass/inertia lag
            scale: [1, 1.02, 1], // Slight expansion at crest
            transition: {
                duration: 6, // Synced with iceberg
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Splash Particles logic
    const [splashes, setSplashes] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate splash particles near the waterline (approx center x=50%, y=offset)
        const newSplashes = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: 40 + Math.random() * 20, // Centered around iceberg width (percentage relative to container, roughly) 
            y: 0, // Relative to waterline
            size: Math.random() * 3 + 2,
            duration: Math.random() * 1 + 0.5,
            delay: Math.random() * 2
        }));
        setSplashes(newSplashes);
    }, []);

    return (
        <div className={`fixed inset-0 z-0 transition-colors duration-1000 overflow-hidden pointer-events-none
        ${deepMode ? "bg-midnight-void" : "bg-sky-50"}
    `}>

            {/* 1. Deep Mode Abyss Gradient */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ opacity: deepMode ? 1 : 0 }}
                transition={{ duration: 1.5 }}
            >
                {/* Dark Wireframe Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#001e2b] to-black opacity-100" />
            </motion.div>

            {/* 2. Surface Mode Sky Gradient */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ opacity: deepMode ? 0 : 1 }}
                transition={{ duration: 1.5 }}
            >
                {/* Light Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-white to-white opacity-90" />
            </motion.div>


            {/* SCENE CONTAINER */}
            <motion.div
                className="absolute w-full h-full flex justify-center items-center"
                initial={false}
                animate={{ y: deepMode ? "-25%" : "35%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
            >
                <div className="relative w-[300%] md:w-[140%] h-[160%] max-w-[1600px]">

                    {/* --- WATER SURFACE PLANE (Grid) --- */}
                    <motion.div
                        className="absolute top-[45%] left-[-50%] right-[-50%] h-[250%] z-20 pointer-events-none"
                        variants={oceanSwell} // Apply swell animation
                        animate="animate"     // Trigger animation
                        initial={{ backgroundColor: deepMode ? "rgba(2, 6, 23, 0.2)" : "rgba(14, 165, 233, 0.02)" }} // Handle color via props/style
                        style={{
                            backgroundColor: deepMode ? "rgba(2, 6, 23, 0.2)" : "rgba(14, 165, 233, 0.02)",
                            backdropFilter: "blur(0px)"
                        }}
                    >
                        {/* Surface Water Waves - CHAOTIC MODE */}
                        <div className="relative w-full h-40 -mt-20 overflow-visible opacity-90"> {/* Taller container for bigger waves */}

                            {/* Wave 1 (Deep Storm Swell - Slow & Massive) */}
                            <motion.div
                                className="absolute inset-0 w-[200%]"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            >
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                                    <path
                                        d="M 0 50 C 150 90, 300 10, 500 50 C 700 90, 850 10, 1000 50"
                                        fill="transparent"
                                        stroke={deepMode ? "#0891b2" : "#7dd3fc"}
                                        strokeWidth="2"
                                        strokeOpacity="0.5"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                </svg>
                            </motion.div>

                            {/* Wave 2 (Choppy Surface - Jagged & Fast) */}
                            <motion.div
                                className="absolute inset-0 w-[200%]"
                                style={{ left: '-15%' }}
                                animate={{ x: ["-50%", "0%"] }}
                                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                            >
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                                    <path
                                        d="M 0 50 C 50 20, 100 80, 150 50 S 250 20, 300 50 S 400 80, 500 50 S 600 20, 650 50 S 750 80, 800 50 S 900 20, 1000 50"
                                        fill="transparent"
                                        stroke={deepMode ? "#06b6d4" : "#0ea5e9"}
                                        strokeWidth="2.5"
                                        strokeOpacity="0.8"
                                        strokeLinecap="round" // Sharper definition
                                        className="drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                </svg>
                            </motion.div>

                            {/* Wave 3 (High-Freq Noise - "Glitch" Waves) */}
                            <motion.div
                                className="absolute inset-0 w-[200%]"
                                style={{ left: '-30%' }}
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            >
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                                    <path
                                        d="M 0 50 Q 25 30, 50 50 T 100 50 T 150 50 T 200 50 Q 225 70, 250 50 T 300 50 T 350 50 T 400 50 Q 425 20, 450 50 T 500 50 T 550 50 T 600 50 Q 625 80, 650 50 T 700 50 T 750 50 T 800 50 Q 825 30, 850 50 T 900 50 T 950 50 T 1000 50"
                                        fill="transparent"
                                        stroke={deepMode ? "#a5f3fc" : "#bae6fd"}
                                        strokeWidth="1.5"
                                        strokeDasharray="10 15" // Broken, glitchy look
                                        strokeOpacity="0.7"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                </svg>
                            </motion.div>
                        </div>

                        {deepMode && (
                            <div className="absolute top-12 w-full h-[500px] bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />
                        )}
                    </motion.div>


                    {/* --- MAIN WIREFRAME ICEBERG SVG --- */}
                    <motion.div
                        className="w-full h-full"
                        variants={floatingIceberg}
                        animate="animate"
                    >
                        <svg viewBox="0 0 600 900" className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">

                            <defs>
                                <filter id="neonGlow">
                                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* --- SPLASH EFFECTS AT WATERLINE -- */}
                            <g transform="translate(0, 405)">
                                {splashes.map((s, i) => (
                                    <motion.rect
                                        key={`splash-${i}`}
                                        x={300 + (Math.random() - 0.5) * 150} // Random spread around center
                                        y={0}
                                        width={s.size}
                                        height={s.size}
                                        fill={deepMode ? "#22d3ee" : "#38bdf8"}
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{
                                            opacity: [0, 1, 0],
                                            y: [0, -30 - Math.random() * 20], // Shoot up
                                            x: [(Math.random() - 0.5) * 20] // Drift side
                                        }}
                                        transition={{
                                            duration: s.duration,
                                            repeat: Infinity,
                                            delay: s.delay,
                                            ease: "easeOut"
                                        }}
                                    />
                                ))}
                            </g>

                            {/* --- SUBMERGED MESH (The Data Structure) - EDGY REDESIGN --- */}
                            <g transform="translate(0, 405)">
                                {/* Main Body Outline - Jagged & Aggressive */}
                                <motion.path
                                    d="M 150 0
                                       L 130 80
                                       L 40 300
                                       L 90 600
                                       L 320 850
                                       L 540 680
                                       L 570 320
                                       L 490 60
                                       L 450 0
                                       Z"
                                    fill="transparent"
                                    stroke={deepMode ? "#06b6d4" : "#0ea5e9"}
                                    strokeWidth="1.5"
                                    strokeOpacity="0.4"
                                />

                                {/* Internal Triangulation Lines (Mesh) - Chaotic Web */}
                                <path d="M 150 0 L 320 850" stroke={deepMode ? "#06b6d4" : "#0ea5e9"} strokeWidth="1" strokeOpacity="0.2" fill="none" />
                                <path d="M 450 0 L 320 850" stroke={deepMode ? "#06b6d4" : "#0ea5e9"} strokeWidth="1" strokeOpacity="0.2" fill="none" />
                                <path d="M 130 80 L 570 320" stroke={deepMode ? "#06b6d4" : "#0ea5e9"} strokeWidth="1" strokeOpacity="0.1" fill="none" />
                                <path d="M 490 60 L 40 300" stroke={deepMode ? "#06b6d4" : "#0ea5e9"} strokeWidth="1" strokeOpacity="0.1" fill="none" />
                                <path d="M 40 300 L 300 500 L 570 320" stroke={deepMode ? "#06b6d4" : "#0ea5e9"} strokeWidth="1" strokeOpacity="0.2" fill="none" />
                                <path d="M 300 500 L 320 850" stroke={deepMode ? "#06b6d4" : "#0ea5e9"} strokeWidth="1" strokeOpacity="0.2" fill="none" />

                                {/* Floating Debris Shards (Submerged) */}

                                <path d="M 500 500 L 520 520 L 540 500 Z" stroke={deepMode ? "#06b6d4" : "#0ea5e9"} strokeWidth="1" fill="none" opacity="0.6" />

                                {/* Connection Nodes */}
                                <circle cx="320" cy="850" r="3" fill="#22d3ee" className="animate-pulse" />
                                <circle cx="300" cy="500" r="2" fill="#22d3ee" opacity="0.5" />
                            </g>


                            {/* --- SURFACE TIP (The Interface) - EDGY REDESIGN --- */}
                            {/* Y=405 is the waterline */}
                            <g filter="url(#neonGlow)">
                                {/* Main Peak Outline - Sharper, "Glitchy" */}
                                <path
                                    d="M 150 405
                                       L 180 300
                                       L 240 120
                                       L 290 80
                                       L 340 140
                                       L 420 280
                                       L 450 405
                                       Z"
                                    fill="rgba(255,255,255,0.05)"
                                    stroke={deepMode ? "#22d3ee" : "#0284c7"}
                                    strokeWidth="2"
                                />



                                {/* Internal Wireframe Lines */}
                                <path d="M 180 300 L 420 280" stroke={deepMode ? "#67e8f9" : "#38bdf8"} strokeWidth="1" fill="none" />
                                <path d="M 290 80 L 300 405" stroke={deepMode ? "#67e8f9" : "#38bdf8"} strokeWidth="1" opacity="0.5" fill="none" />
                                <path d="M 340 140 L 300 405" stroke={deepMode ? "#67e8f9" : "#38bdf8"} strokeWidth="1" opacity="0.5" fill="none" />
                                <path d="M 150 405 L 300 250 L 450 405" stroke={deepMode ? "#67e8f9" : "#38bdf8"} strokeWidth="0.5" strokeDasharray="4 4" fill="none" />

                                {/* Nodes - Edgy/Square */}
                                <rect x="288" y="78" width="4" height="4" fill="white" />
                                <rect x="338" y="138" width="4" height="4" fill="white" />
                            </g>

                        </svg>
                    </motion.div>

                    {/* Floating Data Bits Particles */}
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            className="absolute bg-cyan-400/50"
                            style={{
                                left: `${p.x}%`,
                                top: `${p.y}%`,
                                width: Math.random() > 0.5 ? 2 : 1, // Square pixels
                                height: Math.random() > 0.5 ? 2 : 1,
                            }}
                            animate={{
                                y: [0, -40, 0],
                                opacity: [0, 0.8, 0],
                            }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}

                </div>
            </motion.div>

        </div>
    );
}
