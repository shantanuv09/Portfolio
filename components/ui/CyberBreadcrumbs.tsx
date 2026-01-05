"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Terminal } from "lucide-react";

export default function CyberBreadcrumbs({ overrideLastSegment, deepMode = true }: { overrideLastSegment?: string, deepMode?: boolean }) {
    const pathname = usePathname();

    // Convert path to segments, removing empty strings
    const segments = pathname.split('/').filter(Boolean);

    // Start with root
    const breadcrumbs = [
        { name: "~", path: "/" },
        { name: "root", path: "/" },
        ...segments.map((segment, index) => ({
            name: segment,
            path: `/${segments.slice(0, index + 1).join('/')}`
        }))
    ];

    // Override the last segment if provided (and if we are at root, add it as a new segment called 'portfolio')
    // Actually, based on usage "root/portfolio/projects", if we are at home "/", segments is empty.
    // So we want to append the section name.

    const displayBreadcrumbs = [...breadcrumbs];
    if (overrideLastSegment) {
        displayBreadcrumbs.push({ name: overrideLastSegment, path: `#${overrideLastSegment}` });
    }

    return (
        <nav className={`flex items-center space-x-2 text-sm font-mono px-4 py-2 rounded-full border backdrop-blur-md w-fit transition-all duration-500
            ${deepMode
                ? 'bg-black/50 border-slate-800 text-slate-500'
                : 'bg-white/80 border-slate-200 text-slate-600 shadow-sm'
            }
        `}>
            {/* ... */}
            <Terminal className="w-4 h-4 text-electric-cobalt" />

            {displayBreadcrumbs.map((crumb, index) => (
                <div key={crumb.path + index} className="flex items-center">
                    {index > 0 && <span className="mx-1 text-slate-700">/</span>}
                    <Link
                        href={crumb.path}
                        className={`
                    hover:text-electric-cobalt transition-colors
                    ${index === displayBreadcrumbs.length - 1 ? 'text-electric-cobalt font-bold' : ''}
                `}
                    >
                        {crumb.name}
                    </Link>
                </div>
            ))}
            <span className="animate-pulse ml-2 text-electric-cobalt">_</span>
        </nav>
    );
}
