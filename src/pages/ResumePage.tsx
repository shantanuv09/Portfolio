import { useState } from 'react';
import { FileDown, ChevronDown, ChevronUp, Shield, Code, Award, Book, Briefcase } from 'lucide-react';
import TerminalText from '../components/TerminalText';
import Me2 from '../images/Me2.jpg'

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
              manual
            />
            <h1 className="text-4xl font-bold mb-4">Professional Resume</h1>
            <TerminalText 
              text="Cybersecurity expertise and career highlights."
              className="text-xl text-white"
              typeSpeed={30}
              manual
            />
          </div>
          
          {/* Download Button */}
          <div className="flex justify-between items-center mb-8">
            <p className="font-mono text-sm text-cyber-light">Last updated: June 2025</p>
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
                      backgroundImage: `url(${Me2})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 text-center">
                    <h2 className="text-xl font-bold">Shantanu Vartak</h2>
                    <p className="text-cyber-blue font-mono text-sm">Security Professional</p>
                    <p className="text-sm text-gray-300">shantanuvartak09@gmail.com</p>
                  </div>
                  
                  {/* Quick Links */}
                  <div className="space-y-2 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/shantanuvartak/" 
                      className="flex items-center justify-center text-xs font-mono text-white hover:text-cyber-blue transition-colors duration-300"
                    >
                      <Shield className="h-3 w-3 mr-1" />
                      LinkedIn Profile
                    </a>
                    <a 
                      href="https://github.com/shantanuv09/" 
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
                    Cybersecurity professional specialized in penetration testing, 
                    security assessments, and blockchain security. Focused on identifying and 
                    remediating vulnerabilities in web applications, smart contracts, and network 
                    infrastructure.
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
                      <div className="border-l-2 border-cyber-light pl-4">
                        <h3 className="text-lg font-bold">Security Analyst Intern</h3>
                        <p className="text-cyber-blue font-mono text-sm mb-2">Suma Soft Pvt. Ltd | Jun'23 - Dec'23</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>Conducted VAPT on client assets</li>
                          <li>Found critical vulnerabilities listed on OWASP Top 10</li>
                          <li>Presented and demonstrated findings at client meetings</li>
                          <li>Suggested proper mitigations to narrow-down the attack vector</li>
                          <li>Delivered a detailed VAPT report to the client within the deadline</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-2 border-cyber-light pl-4">
                        <h3 className="text-lg font-bold">Android Application Development Intern</h3>
                        <p className="text-cyber-blue font-mono text-sm mb-2">Invasystems INC. | Jun'22 - Jul'22</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>Developed Full-stack Android-based Ticketing System</li>
                          <li>Cut-down the time gap between issue reporting and resolution</li>
                          <li>Implemented enhanced Role-based Access Control to maintain integrity</li>
                          <li>Provided real-time status tracking of the ticket for auditing purposes</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-2 border-cyber-light pl-4">
                        <h3 className="text-lg font-bold">Ernst & Young</h3>
                        <p className="text-cyber-blue font-mono text-sm mb-2">Cyber Security Intern | Aug'21 - Sept'21</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          <li>Provided custom security consultation to organizations in various sectors</li>
                          <li>Utilized ISO 27001, NIST SP 800-53 and CSF to provide recommendations</li>
                          <li>Analyzed asset's physical security to address related issues</li>
                          <li>Handled confidential client Information with care, maintaining integrity</li>
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
                        <h3 className="text-lg font-bold">Master of Science in Cybersecurity Engineering</h3>
                        <p className="text-cyber-blue font-mono text-sm mb-2">University of Washington | 2025 - Present</p>
                        <p className="text-gray-300">
                          Specialized in penetration testing, advanced threat detection and static/dynamic malware analysis.
                        </p>
                      </div>
                      <div className="border-l-2 border-cyber-light pl-4">
                        <h3 className="text-lg font-bold">Post-Graduate Program (Cyber Security)</h3>
                        <p className="text-cyber-blue font-mono text-sm mb-2">Vellore Institute of Technology, Bangalore | 2024 - 2025</p>
                        <p className="text-gray-300">
                          Deepend the learning curve towards cloud security, cryptography, and blockchain security with a focus on WEB 3.0 vulnerabilities and decentralized systems.
                        </p>
                      </div>
                      <div className="border-l-2 border-cyber-light pl-4">
                        <h3 className="text-lg font-bold">Bachelor of Technology in CSIT (Cyber Security)</h3>
                        <p className="text-cyber-blue font-mono text-sm mb-2">Symbiosis Skills and Professional University | 2020 - 2024</p>
                        <p className="text-gray-300">
                          Focused on secure software development, network security, and data structures.
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
                            <span className="text-cyber-blue">→</span> Python & Java
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
                            <p className="font-bold">Network Ethical Hacking</p>
                            <p className="text-xs text-cyber-light">Obtained Nov'20</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-cyber-blue"></div>
                          <div>
                            <p className="font-bold">Ethical Hacking from Scratch</p>
                            <p className="text-xs text-cyber-light">Obtained Jul'21</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;