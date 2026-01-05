"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldCheck, Globe, Wifi, Lock } from "lucide-react";

export default function TransitionOverlay({ isActive, onComplete }: { isActive: boolean; onComplete: () => void }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (isActive) {
            const steps = [
                setTimeout(() => setStep(1), 500),  // Initializing
                setTimeout(() => setStep(2), 1500), // Circuit Handshake
                setTimeout(() => setStep(3), 2500), // Decrypting Layers
                setTimeout(() => setStep(4), 3500), // Establishing Tunnel
                setTimeout(() => {
                    onComplete();
                    setStep(0); // Reset for next time if needed
                }, 4000)
            ];
            return () => steps.forEach(clearTimeout);
        }
    }, [isActive, onComplete]);

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black font-mono text-cyan-500 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                >
                    {/* Matrix Digital Rain Background Effect (Simplified) */}
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.9)_50%,rgba(6,182,212,0.1)_100%)] opacity-20 animate-pulse" />

                    {/* Central Onion/Portal Animation */}
                    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">

                        {/* Layer 1: Outer Ring */}
                        <motion.div
                            className="absolute inset-0 border-2 border-cyan-900 rounded-full border-t-cyan-500"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Layer 2: Middle Ring Reverse */}
                        <motion.div
                            className="absolute inset-8 border border-cyan-800 rounded-full border-b-cyan-400 border-l-cyan-400"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Layer 3: Inner Core Pulse */}
                        <motion.div
                            className="absolute inset-24 bg-cyan-900/20 rounded-full backdrop-blur-sm border border-cyan-500/50 flex items-center justify-center"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Lock className="w-12 h-12 text-cyan-400" />
                        </motion.div>
                    </div>

                    {/* Status Text Sequence */}
                    <div className="mt-12 space-y-2 text-center z-10">
                        <StatusLine text="INITIALIZING SECURE HANDSHAKE..." show={step >= 1} />
                        <StatusLine text="ROUTING THROUGH ONION NODES..." show={step >= 2} />
                        <StatusLine text="DECRYPTING LAYER [0x7A]..." show={step >= 3} />
                        <StatusLine text="ESTABLISHING DEEP LINK::ACCESS_GRANTED" show={step >= 4} isFinal />
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}

function StatusLine({ text, show, isFinal = false }: { text: string; show: boolean; isFinal?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: show ? 1 : 0, x: show ? 0 : -20 }}
            className={`text-sm md:text-base tracking-wider ${isFinal ? 'text-green-500 font-bold' : 'text-cyan-600'}`}
        >
            {show && <span className="mr-2">{">"}</span>}
            {text}
        </motion.div>
    );
}
