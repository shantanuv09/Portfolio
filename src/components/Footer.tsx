import { Link } from 'react-router-dom';
import { 
  Shield,
  Github, 
  Linkedin, 
  Twitter,
  Mail
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-dark border-t border-cyber-gray relative z-10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 text-cyber-blue mb-4">
              <Shield className="h-6 w-6" />
              <span className="font-mono font-bold text-lg">CYBERDEFENDER</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Cybersecurity professional specializing in penetration testing, 
              vulnerability assessment, and blockchain security.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyber-light hover:text-cyber-blue transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-light hover:text-cyber-blue transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-light hover:text-cyber-blue transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-light hover:text-cyber-blue transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-white mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm text-cyber-light hover:text-cyber-blue transition-colors duration-300">Home</Link>
              <Link to="/about" className="text-sm text-cyber-light hover:text-cyber-blue transition-colors duration-300">About</Link>
              <Link to="/projects" className="text-sm text-cyber-light hover:text-cyber-blue transition-colors duration-300">Projects</Link>
              <Link to="/experience" className="text-sm text-cyber-light hover:text-cyber-blue transition-colors duration-300">Experience</Link>
              <Link to="/certifications" className="text-sm text-cyber-light hover:text-cyber-blue transition-colors duration-300">Certifications</Link>
              <Link to="/skills" className="text-sm text-cyber-light hover:text-cyber-blue transition-colors duration-300">Skills</Link>
              <Link to="/contact" className="text-sm text-cyber-light hover:text-cyber-blue transition-colors duration-300">Contact</Link>
              <Link to="/resume" className="text-sm text-cyber-light hover:text-cyber-blue transition-colors duration-300">Resume</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-mono text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-cyber-light">
              <p>Email: contact@cyberdefender.com</p>
              <p>Location: Remote / Global</p>
              <p>Available for freelance & full-time opportunities</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyber-gray mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-cyber-light mb-4 md:mb-0">
            &copy; {currentYear} CyberDefender. All rights reserved.
          </p>
          <p className="text-xs text-cyber-light font-mono">
            <span className="text-cyber-green">$</span> whoami --version 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;