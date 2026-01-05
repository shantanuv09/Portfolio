"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

export default function NetworkGraph() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [points, setPoints] = useState<Point[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Initialize points
        const count = 40;
        const newPoints: Point[] = [];

        // Ensure we have dimensions
        if (typeof window === 'undefined') return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        setDimensions({ width, height });

        for (let i = 0; i < count; i++) {
            newPoints.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }
        setPoints(newPoints);

        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { width, height } = dimensions;
        // Normalize mouse position -1 to 1
        const x = (clientX / width) * 2 - 1;
        const y = (clientY / height) * 2 - 1;

        mouseX.set(x * 20); // Parallax intensity
        mouseY.set(y * 20);
    };

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 overflow-hidden bg-midnight-void"
            onMouseMove={handleMouseMove}
        >
            <svg className="w-full h-full opacity-30">
                <motion.g style={{ x: springX, y: springY }}>
                    {/* Connections */}
                    {points.map((point, i) => (
                        points.slice(i + 1).map((other, j) => {
                            const dx = point.x - other.x;
                            const dy = point.y - other.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);

                            if (distance < 200) {
                                return (
                                    <line
                                        key={`${i}-${j}`}
                                        x1={point.x}
                                        y1={point.y}
                                        x2={other.x}
                                        y2={other.y}
                                        stroke="#3b82f6"
                                        strokeWidth={1}
                                        strokeOpacity={1 - distance / 200}
                                    />
                                );
                            }
                            return null;
                        })
                    ))}

                    {/* Nodes */}
                    {points.map((point, i) => (
                        <circle
                            key={i}
                            cx={point.x}
                            cy={point.y}
                            r={2}
                            fill="#22c55e"
                        />
                    ))}
                </motion.g>
            </svg>

            {/* Overlay gradient for fade effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-void pointer-events-none" />
        </div>
    );
}
