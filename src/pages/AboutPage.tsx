import { Calendar, GraduationCap, Award, BookOpen } from 'lucide-react';
import TerminalText from '../components/TerminalText';
import TimelineItem from '../components/TimelineItem';

const AboutPage = () => {
  const educationItems = [
    {
      title: 'Master of Science in Cybersecurity',
      subtitle: 'Georgia Institute of Technology',
      dateRange: '2022 - 2024',
      description: 'Specialized in advanced threat detection, cryptography, and blockchain security with a focus on smart contract vulnerabilities and decentralized systems.'
    },
    {
      title: 'Bachelor of Science in Computer Science',
      subtitle: 'University of California, San Diego',
      dateRange: '2018 - 2022',
      description: 'Focused on software development, network security, and data structures. Completed honors thesis on "Implementing Zero-Knowledge Proofs for Privacy-Preserving Authentication".'
    }
  ];
  
  return (
    <div className="cyber-section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-terminal mb-8">
            <TerminalText 
              text="$ cat about.md"
              className="text-sm text-cyber-green mb-2"
            />
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <TerminalText 
              text="Passionate about strengthening the digital world against evolving cyber threats."
              className="text-xl text-white"
              typeSpeed={30}
            />
          </div>
          
          {/* Bio Section */}
          <div className="cyber-card mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div 
                  className="h-64 rounded-md bg-cyber-dark overflow-hidden"
                  style={{
                    backgroundImage: "url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
                <p className="text-gray-300 mb-4">
                  I am a cybersecurity professional with a passion for ethical hacking, 
                  vulnerability research, and secure system design. With expertise in penetration testing, 
                  threat modeling, and blockchain security, I help organizations protect their digital 
                  assets from sophisticated cyber threats.
                </p>
                <p className="text-gray-300 mb-4">
                  My approach combines technical expertise with strategic thinking to build comprehensive 
                  security solutions that address both current vulnerabilities and emerging threats in the 
                  evolving digital landscape.
                </p>
                <p className="text-gray-300">
                  When I'm not hunting for vulnerabilities or securing systems, I enjoy participating in 
                  CTF competitions, contributing to open-source security tools, and mentoring aspiring 
                  cybersecurity professionals.
                </p>
              </div>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-cyber-blue mr-2" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            
            <div className="ml-4">
              {educationItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  dateRange={item.dateRange}
                  description={item.description}
                  isLast={index === educationItems.length - 1}
                />
              ))}
            </div>
          </div>
          
          {/* Interests */}
          <div className="cyber-card">
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-cyber-blue mr-2" />
              <h2 className="text-2xl font-bold">Interests & Activities</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cyber-dark p-4 border border-cyber-gray">
                <h3 className="text-lg font-bold mb-2">Professional Interests</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Offensive Security & Red Teaming</li>
                  <li>Zero-Knowledge Cryptography</li>
                  <li>Smart Contract Security</li>
                  <li>Threat Intelligence</li>
                  <li>Security Automation</li>
                </ul>
              </div>
              
              <div className="bg-cyber-dark p-4 border border-cyber-gray">
                <h3 className="text-lg font-bold mb-2">Personal Activities</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Capture The Flag (CTF) Competitions</li>
                  <li>Contributing to Open Source Security Tools</li>
                  <li>Tech Meetups & Conferences</li>
                  <li>Rock Climbing & Hiking</li>
                  <li>Science Fiction Literature</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;