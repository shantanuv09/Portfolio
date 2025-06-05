import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Shield, Code, Database } from 'lucide-react';
import TerminalText from '../components/TerminalText';
import Background from '../images/DonateNow.png' 

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="cyber-terminal mb-6 inline-block">
              <div>
                <p>Hi! I am Shantanu Vartak</p>
              </div>
              <TerminalText 
                text={[
                  "Cybersecurity Specialist",
                  "Penetration Tester",
                  "Security Researcher",
                  "Blockchain Security Analyst"
                ]}
                className="text-2xl md:text-4xl font-bold text-white"
                typeSpeed={80}
                startDelay={500}
              />
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              I help organizations protect their critical assets from evolving 
              cyber threats through expert security analysis, penetration testing,
              and blockchain security solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="cyber-button">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/contact" className="cyber-button border-cyber-green text-cyber-green hover:bg-cyber-green hover:bg-opacity-10">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Specialties Section */}
      <section className="cyber-section bg-cyber-dark bg-opacity-70">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-cyber-blue">&lt;</span> Security Specialties <span className="text-cyber-blue">/&gt;</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card text-center hover:border-cyber-blue transition-all duration-300">
              <Terminal className="h-12 w-12 text-cyber-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Penetration Testing</h3>
              <p className="text-gray-300">
                Identifying and exploiting vulnerabilities in networks, applications,
                and systems to strengthen your security posture.
              </p>
            </div>
            
            <div className="cyber-card text-center hover:border-cyber-blue transition-all duration-300">
              <Shield className="h-12 w-12 text-cyber-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Security Consulting</h3>
              <p className="text-gray-300">
                Strategic guidance on security frameworks, compliance, risk management,
                and building comprehensive defense systems.
              </p>
            </div>
            
            <div className="cyber-card text-center hover:border-cyber-blue transition-all duration-300">
              <Code className="h-12 w-12 text-cyber-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Development</h3>
              <p className="text-gray-300">
                Building security into software from the ground up through secure
                coding practices and continuous security testing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Project Section */}
      <section className="cyber-section">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">
              <span className="text-cyber-blue">&gt;_</span> Featured Project
            </h2>
            <Link to="/projects" className="font-mono text-sm text-cyber-blue hover:underline">
              View All Projects <ArrowRight className="inline h-3 w-3" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div 
                className="h-72 bg-cyber-dark rounded border border-cyber-gray overflow-hidden"
                style={{
                  backgroundImage: `url(${Background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
            
            <div className="cyber-card flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold mb-2">Donate Now</h3>
              <p className="text-cyber-blue font-mono text-sm mb-4">Blockchain-based Crypto Donation System</p>
              <p className="text-gray-300 mb-6">
                Developed a web-app to cater the needs of a future-proof charity system which enables users to donate Ethereum (ETH) to the needy and verified campaigns setup by verified organizations in an interactive but secure fashion.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  Solidity
                </span>
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  JavaScript
                </span>
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  Ethereum
                </span>
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  Web3Sec
                </span>
              </div>
              
              <Link to="/projects" className="cyber-button self-start">
                View Project Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="cyber-section bg-cyber-dark bg-opacity-70">
        <div className="container-custom">
          <div className="cyber-card text-center max-w-4xl mx-auto">
            <Database className="h-16 w-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Digital Assets?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to build robust security solutions tailored to your needs.
            </p>
            <Link to="/contact" className="cyber-button mx-auto inline-flex">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;