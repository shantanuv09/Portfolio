import { Award, FileCheck } from 'lucide-react';
import TerminalText from '../components/TerminalText';
import CertificationBadge from '../components/CertificationBadge';
import cert1 from '../images/cert1.png'
import cert2 from '../images/cert2.png'

const CertificationsPage = () => {
  const certifications = [
    {
      title: "Network Ethical Hacking",
      issuer: "Udemy",
      date: "Nov'20",
      image: cert1,
      verifyLink: "https://www.udemy.com/certificate/UC-f0b1cb86-cc3b-48a0-a91c-9be5eef52ac2/"
    },
    {
      title: "Ethical Hacking from Scratch",
      issuer: "Udemy",
      date: "Jul'21",
      image: cert2,
      verifyLink: "https://www.udemy.com/certificate/UC-e32f0873-5052-4aef-a3b5-f1efe105c670/"
    }
  ];
  
  return (
    <div className="cyber-section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-terminal mb-8">
            <TerminalText 
              text="$ cat ./credentials/certifications.json"
              className="text-sm text-cyber-green mb-2"
              manual
            />
            <h1 className="text-4xl font-bold mb-4">Certifications & Credentials</h1>
            <TerminalText 
              text="Continuous learning and validated expertise in cybersecurity."
              className="text-xl text-white"
              typeSpeed={30}
              manual
            />
          </div>
          
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-cyber-blue mr-2" />
              <h2 className="text-2xl font-bold">Professional Certifications</h2>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <CertificationBadge
                  key={index}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  image={cert.image}
                  verifyLink={cert.verifyLink}
                />
              ))}
            </div>
          </div>
          
          {/* Additional Credentials */}
          {/* <div className="cyber-card mb-10">
            <div className="flex items-center mb-6">
              <FileCheck className="h-6 w-6 text-cyber-green mr-2" />
              <h2 className="text-2xl font-bold">Additional Credentials</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cyber-dark p-4 border border-cyber-gray">
                <h3 className="text-lg font-bold mb-2">Specialized Training</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyber-green font-mono mr-2">→</span>
                    <div>
                      <p className="text-white">Advanced Web Application Security</p>
                      <p className="text-xs text-cyber-light">SANS Institute - 2023</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-green font-mono mr-2">→</span>
                    <div>
                      <p className="text-white">Smart Contract Security Bootcamp</p>
                      <p className="text-xs text-cyber-light">ConsenSys Academy - 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-green font-mono mr-2">→</span>
                    <div>
                      <p className="text-white">Malware Analysis Fundamentals</p>
                      <p className="text-xs text-cyber-light">BlackHills InfoSec - 2021</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cyber-dark p-4 border border-cyber-gray">
                <h3 className="text-lg font-bold mb-2">Noteworthy Achievements</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyber-blue font-mono mr-2">→</span>
                    <div>
                      <p className="text-white">Top 1% - HackerOne Bug Bounty Platform</p>
                      <p className="text-xs text-cyber-light">2022 - Present</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-blue font-mono mr-2">→</span>
                    <div>
                      <p className="text-white">1st Place - Annual CTF Competition</p>
                      <p className="text-xs text-cyber-light">DEF CON Group - 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-blue font-mono mr-2">→</span>
                    <div>
                      <p className="text-white">Conference Speaker</p>
                      <p className="text-xs text-cyber-light">BlackHat USA - 2023</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          
          {/* Certification Roadmap */}
          {/* <div className="cyber-card">
            <h2 className="text-2xl font-bold mb-6">Certification Roadmap</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-cyber-purple"></div>
                <p className="text-gray-300">
                  <span className="text-white font-bold">In Progress:</span> Offensive Security Certified Expert (OSCE) - Expected completion in Q4 2024
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-cyber-blue"></div>
                <p className="text-gray-300">
                  <span className="text-white font-bold">Planned:</span> Certified Cloud Security Professional (CCSP) - 2025
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-cyber-green"></div>
                <p className="text-gray-300">
                  <span className="text-white font-bold">Planned:</span> GIAC Web Application Penetration Tester (GWAPT) - 2025
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;