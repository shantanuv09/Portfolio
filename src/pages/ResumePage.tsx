import { useState } from 'react';
import { FileDown, FileText, ChevronDown, ChevronUp, Shield, Code, Award, Book, Briefcase } from 'lucide-react';
import TerminalText from '../components/TerminalText';

const ResumePage = () => {
  const [expandedSections, setExpandedSections] = useState({
    experience: true,
    education: false,
    skills: false,
    certifications: false
  });
  
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };
  
  return (
    <div className="cyber-section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-terminal mb-8">
            <TerminalText 
              text="$ cat ./resume.md | less"
              className="text-sm text-cyber-green mb-2"
            />
            <h1 className="text-4xl font-bold mb-4">Professional Resume</h1>
            <TerminalText 
              text="Cybersecurity expertise and career highlights."
              className="text-xl text-white"
              typeSpeed={30}
            />
          </div>
          
          {/* Download Button */}
          <div className="flex justify-between items-center mb-8">
            <p className="font-mono text-sm text-cyber-light">Last updated: April 2024</p>
            <a 
              href="#" 
              className="cyber-button"
              download="CyberDefender_Resume_2024.pdf"
            >
              <FileDown className="h-4 w-4 mr-2" />
              Download PDF
            </a>
          </div>
          
          {/* Resume Content */}
          <div className="cyber-card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="space-y-6">
                  {/* Profile Image */}
                  <div 
                    className="h-40 w-40 mx-auto rounded-full overflow-hidden border-2 border-cyber-blue"
                    style={{
                      backgroundImage: "url('https://images.pexels.com/photos/4734908/pexels-photo-4734908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 text-center">
                    <h2 className="text-xl font-bold">Alex Cyber</h2>
                    <p className="text-cyber-blue font-mono text-sm">Security Professional</p>
                    <p className="text-sm text-gray-300">contact@cyberdefender.com</p>
                  </div>
                  
                  {/* Quick Links */}
                  <div className="space-y-2 mt-6">
                    <a 
                      href="#" 
                      className="flex items-center justify-center text-xs font-mono text-white hover:text-cyber-blue transition-colors duration-300"
                    >
                      <Shield className="h-3 w-3 mr-1" />
                      LinkedIn Profile
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center text-xs font-mono text-white hover:text-cyber-blue transition-colors duration-300"
                    >
                      <Shield className="h-3 w-3 mr-1" />
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="md:col-span-3">
                {/* Summary */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
                  <p className="text-gray-300">
                    Cybersecurity professional with 5+ years of experience in penetration testing, 
                    security assessments, and blockchain security. Specialized in identifying and 
                    remediating vulnerabilities in web applications, smart contracts, and network 
                    infrastructure. Proven track record of securing critical systems against sophisticated 
                    cyber threats.
                  </p>
                </div>
                
                {/* Experience Section */}
                <div className="mb-6">
                  <button 
                    onClick={() => toggleSection('experience')} 
                    className="w-full flex items-center justify-between border-b border-cyber-gray pb-2"
                  >
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-cyber-blue mr-2" />
                      <h2 className="text-xl font-bold">Professional Experience</h2>
                    </div>
                    {expandedSections.experience ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedSections.experience && (
                    <div className="pt-4 space-y-6">
                      <div className="border-l-2 border-cyber-blue pl-4">
                        <h3 className="text-lg font-bold">Senior Security Researcher</h3>
                        <p className="text-cyber-blue font-mono text-sm mb-2">BlockSecure Technologies | 2023 - Present</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>Lead security audits for blockchain protocols and smart contracts</li>
                          <li>Developed an automated smart contract vulnerability scanner</li>
                          <li>Authored comprehensive security reports for clients</li>
                          <li>Presented findings at three major blockchain security conferences</li>
                          <li>Mentored junior researchers on security best practices</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-2 border-cyber-light pl-4">
                        <h3 className="text-lg font-bold">Penetration Tester</h3>
                        <p className="text-cyber-blue font-mono text-sm mb-2">CyberDefense Corp | 2021 - 2023</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>Conducted penetration tests for Fortune 500 clients</li>
                          <li>Discovered critical vulnerabilities in web and mobile applications</li>
                          <li>Developed custom exploitation tools to test security controls</li>
                          <li>Collaborated with development teams on remediation strategies</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-2 border-cyber-light pl-4">
                        <h3 className="text-lg font-bold">Security Analyst</h3>
                        <p className="text-cyber-blue font-mono text-sm mb-2">SecureNet Solutions | 2020 - 2021</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>Monitored and analyzed security events across client networks</li>
                          <li>Implemented SIEM solutions and created custom detection rules</li>
                          <li>Participated in incident response and performed root cause analysis</li>
                          <li>Conducted regular vulnerability assessments</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Education Section */}
                <div className="mb-6">
                  <button 
                    onClick={() => toggleSection('education')} 
                    className="w-full flex items-center justify-between border-b border-cyber-gray pb-2"
                  >
                    <div className="flex items-center">
                      <Book className="h-5 w-5 text-cyber-blue mr-2" />
                      <h2 className="text-xl font-bold">Education</h2>
                    </div>
                    {expandedSections.education ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedSections.education && (
                    <div className="pt-4 space-y-6">
                      <div className="border-l-2 border-cyber-blue pl-4">
                        <h3 className="text-lg font-bold">Master of Science in Cybersecurity</h3>
                        <p className="text-cyber-blue font-mono text-sm mb-2">Georgia Institute of Technology | 2022 - 2024</p>
                        <p className="text-gray-300">
                          Specialized in advanced threat detection, cryptography, and blockchain security.
                          Thesis: "Automated Vulnerability Detection in Smart Contract Architectures"
                        </p>
                      </div>
                      
                      <div className="border-l-2 border-cyber-light pl-4">
                        <h3 className="text-lg font-bold">Bachelor of Science in Computer Science</h3>
                        <p className="text-cyber-blue font-mono text-sm mb-2">University of California, San Diego | 2018 - 2022</p>
                        <p className="text-gray-300">
                          Focused on software development, network security, and data structures.
                          Honors thesis: "Implementing Zero-Knowledge Proofs for Privacy-Preserving Authentication"
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Skills Section */}
                <div className="mb-6">
                  <button 
                    onClick={() => toggleSection('skills')} 
                    className="w-full flex items-center justify-between border-b border-cyber-gray pb-2"
                  >
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-cyber-blue mr-2" />
                      <h2 className="text-xl font-bold">Technical Skills</h2>
                    </div>
                    {expandedSections.skills ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedSections.skills && (
                    <div className="pt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                        <div className="space-y-2">
                          <p className="font-mono text-sm">
                            <span className="text-cyber-blue">→</span> Web App Pentesting
                          </p>
                          <p className="font-mono text-sm">
                            <span className="text-cyber-blue">→</span> Network Security
                          </p>
                          <p className="font-mono text-sm">
                            <span className="text-cyber-blue">→</span> Smart Contract Security
                          </p>
                          <p className="font-mono text-sm">
                            <span className="text-cyber-blue">→</span> SIEM Implementation
                          </p>
                          <p className="font-mono text-sm">
                            <span className="text-cyber-blue">→</span> Python & JavaScript
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="font-mono text-sm">
                            <span className="text-cyber-green">→</span> Solidity & EVM
                          </p>
                          <p className="font-mono text-sm">
                            <span className="text-cyber-green">→</span> Cryptography
                          </p>
                          <p className="font-mono text-sm">
                            <span className="text-cyber-green">→</span> AWS Security
                          </p>
                          <p className="font-mono text-sm">
                            <span className="text-cyber-green">→</span> Malware Analysis
                          </p>
                          <p className="font-mono text-sm">
                            <span className="text-cyber-green">→</span> Incident Response
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Certifications Section */}
                <div className="mb-6">
                  <button 
                    onClick={() => toggleSection('certifications')} 
                    className="w-full flex items-center justify-between border-b border-cyber-gray pb-2"
                  >
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-cyber-blue mr-2" />
                      <h2 className="text-xl font-bold">Certifications</h2>
                    </div>
                    {expandedSections.certifications ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedSections.certifications && (
                    <div className="pt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-cyber-blue"></div>
                          <div>
                            <p className="font-bold">OSCP</p>
                            <p className="text-xs text-cyber-light">Obtained March 2023</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-cyber-blue"></div>
                          <div>
                            <p className="font-bold">CISSP</p>
                            <p className="text-xs text-cyber-light">Obtained October 2022</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-cyber-blue"></div>
                          <div>
                            <p className="font-bold">CEH</p>
                            <p className="text-xs text-cyber-light">Obtained June 2021</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-cyber-blue"></div>
                          <div>
                            <p className="font-bold">AWS Security Specialty</p>
                            <p className="text-xs text-cyber-light">Obtained May 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="cyber-card">
            <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Publications</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="text-white">"Novel Attack Vectors in DeFi Protocols"</p>
                    <p className="text-xs text-cyber-light">Journal of Blockchain Security, 2023</p>
                  </li>
                  <li>
                    <p className="text-white">"Zero-Knowledge Proofs: Practical Applications in Authentication Systems"</p>
                    <p className="text-xs text-cyber-light">Cryptography Today, 2022</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3">Speaking Engagements</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="text-white">"Securing Smart Contracts: Lessons from the Field"</p>
                    <p className="text-xs text-cyber-light">BlackHat USA, 2023</p>
                  </li>
                  <li>
                    <p className="text-white">"The Future of Decentralized Identity"</p>
                    <p className="text-xs text-cyber-light">RSA Conference, 2022</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;