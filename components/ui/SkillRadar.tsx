"use client";

import { motion } from "framer-motion";

interface Skill {
    name: string;
    level: number; // 0-100
}

interface SkillRadarProps {
    skills: Skill[];
    deepMode?: boolean;
}

export default function SkillRadar({ skills, deepMode = true }: SkillRadarProps) {
    const size = 300;
    const radius = size / 2;
    const cx = size / 2;
    const cy = size / 2;
    const levels = 4; // Number of background polygons

    // Calculate points for a normalized value (0-1)
    const getPoints = (valueFn: (i: number) => number) => {
        return skills.map((_, i) => {
            const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
            const value = valueFn(i);
            const x = cx + Math.cos(angle) * radius * value;
            const y = cy + Math.sin(angle) * radius * value;
            return `${x},${y}`;
        }).join(" ");
    };

    // Background grid points
    const gridPoints = Array.from({ length: levels }).map((_, l) => {
        const scale = (l + 1) / levels;
        return getPoints(() => scale);
    });

    // Data points
    const dataPoints = getPoints((i) => skills[i].level / 100);

    return (
        <div className="relative flex flex-col items-center justify-center p-4">

            <div className="relative w-[300px] h-[300px]">
                <svg width={size} height={size} className="overflow-visible">
                    {/* Background Grid */}
                    {gridPoints.map((points, i) => (
                        <polygon
                            key={i}
                            points={points}
                            fill="transparent"
                            stroke={deepMode ? "#334155" : "#cbd5e1"}
                            strokeWidth="1"
                            className="opacity-50"
                        />
                    ))}

                    {/* Axis Lines */}
                    {skills.map((_, i) => {
                        const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                        const x = cx + Math.cos(angle) * radius;
                        const y = cy + Math.sin(angle) * radius;
                        return (
                            <line
                                key={i}
                                x1={cx}
                                y1={cy}
                                x2={x}
                                y2={y}
                                stroke={deepMode ? "#334155" : "#cbd5e1"}
                                strokeWidth="1"
                                className="opacity-50"
                            />
                        );
                    })}

                    {/* Data Polygon */}
                    <motion.polygon
                        points={dataPoints}
                        fill="rgba(59, 130, 246, 0.2)"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        initial={{ scale: 0, opacity: 0, transformOrigin: "center" }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />

                    {/* Data Points (Corners) */}
                    {skills.map((skill, i) => {
                        const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                        const value = skill.level / 100;
                        const x = cx + Math.cos(angle) * radius * value;
                        const y = cy + Math.sin(angle) * radius * value;

                        return (
                            <motion.circle
                                key={i}
                                cx={x}
                                cy={y}
                                r={4}
                                fill="#3b82f6"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                            />
                        );
                    })}

                    {/* Labels */}
                    {skills.map((skill, i) => {
                        const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                        // Push labels out a bit further than radius
                        const labelRadius = radius + 30;
                        const x = cx + Math.cos(angle) * labelRadius;
                        const y = cy + Math.sin(angle) * labelRadius;

                        return (
                            <text
                                key={i}
                                x={x}
                                y={y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill={deepMode ? "#94a3b8" : "#64748b"}
                                className="text-[10px] font-mono uppercase tracking-wider"
                            >
                                {skill.name}
                            </text>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
}
