import { Terminal, Shield, Code, Github, Mail, Linkedin } from "lucide-react";
import TerminalText from "../components/TerminalText";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="cyber-terminal mb-6 inline-block justify-center">
              <div>
                <p>Hi! I am Shantanu Vartak</p>
              </div>
              <TerminalText
                text={[
                  "Cybersecurity Specialist",
                  "Penetration Tester",
                  "Security Researcher",
                  "Blockchain Security Analyst",
                ]}
                className="text-2xl md:text-4xl font-bold text-white"
                typeSpeed={80}
                startDelay={500}
              />
            </div>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-center">
              I help organizations protect their critical assets from evolving
              cyber threats through expert security analysis, penetration
              testing, and blockchain security solutions.
            </p>

            <div className="justify-center flex flex-wrap gap-4">
              <a
                href="mailto:shantanuvartak09@gmail.com"
                className="font-mono text-sm uppercase tracking-wider hover:text-cyber-blue transition-colors duration-300"
              >
                <Mail className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shantanuvartak/"
                className="font-mono text-sm uppercase tracking-wider hover:text-cyber-blue transition-colors duration-300"
              >
                <Linkedin className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://github.com/shantanuv09"
                className="font-mono text-sm uppercase tracking-wider hover:text-cyber-blue transition-colors duration-300"
              >
                <Github className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="cyber-section bg-cyber-dark bg-opacity-70">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-cyber-blue">&gt;_</span> Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card text-center ">
              <h3 className="text-2xl font-bold mb-2">Donate Now</h3>

              <p className="text-cyber-blue font-mono text-sm mb-4">
                Blockchain-based Crypto Donation System
              </p>
              <p className="text-gray-300 mb-6">
                Developed a web-app to cater the needs of a future-proof charity
                system which enables users to donate Ethereum (ETH) to the needy
                and verified campaigns setup by verified organizations in an
                interactive but secure fashion.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  Solidity
                </span>
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  React
                </span>
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  Smart Contracts
                </span>
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  Web3Sec
                </span>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/shantanuv09/Donate-Now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs font-mono text-white hover:text-cyber-blue transition-colors duration-300"
                  >
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>

            <div className="cyber-card text-center ">
              <h3 className="text-2xl font-bold mb-2">
                DeCap (Decentralized Capital)
              </h3>
              <p className="text-cyber-blue font-mono text-sm mb-4">
                Blockchain-based Banking System
              </p>
              <p className="text-gray-300 mb-6">
                Semi-Decentralized Banking Web App to tackle challenges like
                financial inclusion, transparency and trust in traditional
                systems with fixed-deposit and loan-lending capabilities.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  Solidity
                </span>
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  JavaScript
                </span>
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  JWT
                </span>
                <span className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue">
                  Web3Sec
                </span>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/shantanuv09/DeCap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs font-mono text-white hover:text-cyber-blue transition-colors duration-300"
                  >
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialities Section */}
      <section className="cyber-section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-cyber-blue">&lt;</span> Security Specialties{" "}
            <span className="text-cyber-blue">/&gt;</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card text-center hover:border-cyber-blue transition-all duration-300">
              <Terminal className="h-12 w-12 text-cyber-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Penetration Testing</h3>
              <p className="text-gray-300">
                Identifying and exploiting vulnerabilities in networks,
                applications, and systems to strengthen your security posture.
              </p>
            </div>

            <div className="cyber-card text-center hover:border-cyber-blue transition-all duration-300">
              <Shield className="h-12 w-12 text-cyber-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Security Consulting</h3>
              <p className="text-gray-300">
                Strategic guidance on security frameworks, compliance, risk
                management, and building comprehensive defense systems.
              </p>
            </div>

            <div className="cyber-card text-center hover:border-cyber-blue transition-all duration-300">
              <Code className="h-12 w-12 text-cyber-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Development</h3>
              <p className="text-gray-300">
                Building security into software from the ground up through
                secure coding practices and continuous security testing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
