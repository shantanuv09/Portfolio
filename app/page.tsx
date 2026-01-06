"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Terminal, Server, Lock, ArrowDown } from "lucide-react";
import IcebergBackground from "../components/ui/IcebergBackground";
import SystemLog from "../components/ui/SystemLog";
import ProjectCard from "../components/ui/ProjectCard";
import SkillRadar from "../components/ui/SkillRadar";
import VerificationStrip from "../components/ui/VerificationStrip";
import CyberBreadcrumbs from "../components/ui/CyberBreadcrumbs";
import Timeline from "../components/ui/Timeline";
import TransitionOverlay from "../components/ui/TransitionOverlay";

export default function Home() {
  const [deepAccessGranted, setDeepAccessGranted] = useState(false);

  // Resume Data - Surface (Public/Web)
  // (Surface projects moved to deep, keeping structure clean)

  // Resume Data - Deep (Classified/Public Projects)
  const deepProjects: { title: string; description: string; tags: string[]; type: "CLASSIFIED" | "PUBLIC" | "RESTRICTED" }[] = [
    {
      title: "Web-Exploit Toolkit",
      description: "Automated offensive security scanner for XSS, SQLi, and CSRF exploitation.",
      tags: ["Python", "Offensive Security"],
      type: "CLASSIFIED"
    },
    {
      title: "WRCCDC Defense",
      description: "Defended TREX Windows Server infrastructure against Red Team attacks.",
      tags: ["Active Directory", "Blue Team"],
      type: "RESTRICTED"
    },
    {
      title: "Donate Now",
      description: "Secure Ethereum smart contract platform with JWT auth & cryptographic integrity.",
      tags: ["Solidity", "React", "Ethereum"],
      type: "PUBLIC"
    },
    {
      title: "DeCap FinTech",
      description: "Semi-decentralized financial app with node.js backend & smart contract audits.",
      tags: ["Node.js", "Solidity", "FinTech"],
      type: "PUBLIC"
    }
  ];

  // Scroll Detection for Theme Switch
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDeepAccessGranted(true);
          } else {
            setDeepAccessGranted(false);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of Deep section is visible
        rootMargin: "-100px 0px 0px 0px" // Offset slightly so it triggers as it comes up
      }
    );

    const deepSection = document.getElementById("deep-sector");
    if (deepSection) {
      observer.observe(deepSection);
    }

    return () => {
      if (deepSection) observer.unobserve(deepSection);
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${deepAccessGranted ? 'bg-midnight-void text-slate-200' : 'bg-sky-50 text-slate-900'} overflow-x-hidden`}>

      {/* GLOBAL BACKGROUND - Reacts to mode */}
      <IcebergBackground deepMode={deepAccessGranted} />

      {/* --- SURFACE LAYER (PUBLIC/LIGHT) --- */}
      <div className={`relative z-10 min-h-screen flex flex-col transition-opacity duration-1000 ${deepAccessGranted ? 'opacity-40' : 'opacity-100'}`}>

        {/* Navigation Bar */}
        <header className="fixed top-0 w-full p-6 flex justify-between items-center z-50">

        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center p-8 pt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-6"
          >
            <h2 className="text-cyan-600 font-mono tracking-widest text-sm uppercase">Cybersecurity Analyst</h2>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8">
              SHANTANU<br />VARTAK
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Building verifiable trust in digital systems.
              Specializing in Offensive Security, Blockchain, and Threat Modeling.
            </p>

            {/* Contact Protocol Section */}
            <div className="mt-16 w-full max-w-lg mx-auto">
              <div className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                <h3 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                  Comm Link Active
                </h3>

                <div className="flex flex-col space-y-4">
                  <a
                    href="mailto:shantanuvartak09@gmail.com"
                    className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all group/item"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover/item:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 0 00-2-2H5a2 0 00-2 2v10a2 0 002 2z" /></svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-slate-400 font-mono">DIRECT MESSAGE</div>
                        <div className="text-slate-700 font-bold">shantanuvartak09@gmail.com</div>
                      </div>
                    </div>
                    <ArrowDown className="w-4 h-4 text-slate-300 -rotate-90 group-hover/item:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="https://linkedin.com/in/shantanuvartak"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all group/item"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover/item:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-slate-400 font-mono">PROFESSIONAL NETWORK</div>
                        <div className="text-slate-700 font-bold">linkedin.com/in/shantanuvartak</div>
                      </div>
                    </div>
                    <ArrowDown className="w-4 h-4 text-slate-300 -rotate-90 group-hover/item:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </main>

        <div className="p-8 text-center text-slate-400 text-sm animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto mb-2" />
          <span>Scroll to Access Deep Vault</span>
        </div>
      </div>


      {/* --- DEEP LAYER (HIDDEN/DARK) --- */}
      <div id="deep-sector" className="relative z-10 min-h-screen flex flex-col p-8 space-y-24 pb-32">



        {/* Content: System Logs & Skills */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-100 flex items-center">
              <ShieldCheck className="w-8 h-8 mr-4 text-green-500" />
              Clearance & Credentials
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Validation of offensive and defensive security capabilities.
              Certified expertise in penetration testing and secure infrastructure protection.
            </p>
            <VerificationStrip deepMode={true} />
          </div>
          <div className="flex justify-center">
            <SystemLog deepMode={true} />
          </div>
        </section>

        {/* Content: Skill Radar */}
        <section className="flex flex-col items-center space-y-8">
          <h3 className="text-2xl font-mono text-cyan-500 tracking-widest uppercase border-b border-cyan-900 pb-2">Competency Matrix</h3>
          <SkillRadar
            deepMode={true}
            skills={[
              { name: "AppSec", level: 95 },
              { name: "Python", level: 90 },
              { name: "Reverse Eng", level: 80 },
              { name: "Cloud", level: 75 },
              { name: "Linux", level: 85 },
              { name: "Crypto", level: 65 }
            ]}
          />
        </section>

        {/* Content: Deep Projects */}
        <section className="space-y-12">
          <h3 className="text-3xl font-bold text-slate-100 flex items-center">
            <Lock className="w-8 h-8 mr-4 text-red-500" />
            Classified Projects and Associations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deepProjects.map((p, i) => (
              <ProjectCard key={i} title={p.title} description={p.description} tags={p.tags} status={p.type} deepMode={true} />
            ))}
          </div>
        </section>

        {/* Content: Timeline */}
        <section>
          <h3 className="text-center text-3xl font-bold text-slate-100 mb-12">Temporal Logs</h3>
          <Timeline deepMode={true} />
        </section>

      </div>

    </div>
  );
}
