import { Code, Shield, Database, Server, Monitor, Brain } from 'lucide-react';
import TerminalText from '../components/TerminalText';
import SkillBar from '../components/SkillBar';

const SkillsPage = () => {
  // Skill categories with their respective skills and levels (1-5)
  const skillCategories = [
    {
      name: "Security Testing",
      icon: <Shield className="h-6 w-6 text-cyber-blue" />,
      color: "cyber-blue",
      skills: [
        { name: "Web Application Pentesting", level: 5 },
        { name: "Network Vulnerability Assessment", level: 4 },
        { name: "Mobile Application Security", level: 4 },
        { name: "API Security Testing", level: 5 },
        { name: "Social Engineering", level: 3 }
      ]
    },
    {
      name: "Programming & Development",
      icon: <Code className="h-6 w-6 text-cyber-green" />,
      color: "cyber-green",
      skills: [
        { name: "Python", level: 5 },
        { name: "JavaScript/TypeScript", level: 4 },
        { name: "Solidity", level: 4 },
        { name: "Bash Scripting", level: 5 },
        { name: "C/C++", level: 3 }
      ]
    },
    {
      name: "Cloud & Infrastructure",
      icon: <Server className="h-6 w-6 text-cyber-purple" />,
      color: "cyber-purple",
      skills: [
        { name: "AWS Security", level: 4 },
        { name: "Docker & Kubernetes", level: 3 },
        { name: "CI/CD Security", level: 4 },
        { name: "Infrastructure as Code", level: 3 },
        { name: "Cloud Architecture", level: 3 }
      ]
    },
    {
      name: "Blockchain & Cryptography",
      icon: <Database className="h-6 w-6 text-cyber-yellow" />,
      color: "cyber-yellow",
      skills: [
        { name: "Smart Contract Security", level: 5 },
        { name: "DeFi Protocol Analysis", level: 4 },
        { name: "Cryptographic Implementations", level: 4 },
        { name: "Blockchain Architecture", level: 3 },
        { name: "Zero-Knowledge Proofs", level: 4 }
      ]
    },
    {
      name: "Tools & Technologies",
      icon: <Monitor className="h-6 w-6 text-cyber-red" />,
      color: "cyber-red",
      skills: [
        { name: "Burp Suite", level: 5 },
        { name: "Metasploit", level: 4 },
        { name: "Wireshark", level: 5 },
        { name: "SIEM Systems", level: 3 },
        { name: "IDS/IPS", level: 4 }
      ]
    },
    {
      name: "Soft Skills",
      icon: <Brain className="h-6 w-6 text-cyber-blue" />,
      color: "cyber-blue",
      skills: [
        { name: "Technical Writing", level: 5 },
        { name: "Security Awareness Training", level: 4 },
        { name: "Project Management", level: 3 },
        { name: "Client Communication", level: 4 },
        { name: "Problem Solving", level: 5 }
      ]
    }
  ];
  
  return (
    <div className="cyber-section">
      <div className="container-custom">
        <div className="cyber-terminal mb-8">
          <TerminalText 
            text="$ skills --list-all --format=detailed"
            className="text-sm text-cyber-green mb-2"
          />
          <h1 className="text-4xl font-bold mb-4">Technical Skills</h1>
          <TerminalText 
            text="Comprehensive toolkit for modern cybersecurity challenges."
            className="text-xl text-white"
            typeSpeed={30}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="cyber-card hover:border-cyber-blue transition-colors duration-300">
              <div className="flex items-center mb-6">
                {category.icon}
                <h2 className="text-xl font-bold ml-2">{category.name}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Tools & Software */}
        <div className="cyber-card mb-12">
          <h2 className="text-2xl font-bold mb-6">Tools & Software Proficiency</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "Burp Suite", "Metasploit", "Wireshark", "Nmap", "Ghidra", 
              "IDA Pro", "OWASP ZAP", "Kali Linux", "Docker", "Kubernetes",
              "AWS", "Azure", "Git", "Mythril", "Slither", 
              "Truffle", "Hardhat", "EthersJS", "Remix IDE", "Foundry"
            ].map((tool, index) => (
              <div 
                key={index} 
                className="bg-cyber-dark border border-cyber-gray p-3 text-center hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300"
              >
                <span className="font-mono text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Methodologies */}
        <div className="cyber-card">
          <h2 className="text-2xl font-bold mb-6">Security Methodologies & Frameworks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-cyber-blue font-mono">→</span>
                <p className="text-white">OWASP Testing Methodology</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyber-blue font-mono">→</span>
                <p className="text-white">NIST Cybersecurity Framework</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyber-blue font-mono">→</span>
                <p className="text-white">MITRE ATT&CK Framework</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyber-blue font-mono">→</span>
                <p className="text-white">ISO 27001/27002</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-cyber-green font-mono">→</span>
                <p className="text-white">SANS Critical Security Controls</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyber-green font-mono">→</span>
                <p className="text-white">DevSecOps Principles</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyber-green font-mono">→</span>
                <p className="text-white">STRIDE Threat Modeling</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyber-green font-mono">→</span>
                <p className="text-white">DREAD Risk Assessment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;