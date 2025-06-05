import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
}

const Header = ({ currentPage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-black bg-opacity-95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-cyber-blue hover:text-cyber-green transition-colors duration-300"
          >
            <Shield className="h-8 w-8" />
            <span className="font-mono font-bold text-xl hidden sm:block">CYBERDEFENDER</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-mono text-sm uppercase tracking-wider hover:text-cyber-blue transition-colors duration-300 ${
                    isActive ? 'text-cyber-blue' : 'text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-cyber-dark border-t border-cyber-gray transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container-custom py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `font-mono text-sm py-2 uppercase tracking-wider hover:text-cyber-blue transition-colors duration-300 ${
                  isActive ? 'text-cyber-blue' : 'text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
      
      {/* Page title bar */}
      <div className="bg-cyber-dark border-y border-cyber-gray">
        <div className="container-custom py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2 font-mono text-sm">
            <span className="text-cyber-green">~/</span>
            <span>{currentPage.toLowerCase()}</span>
            <span className="animate-blink">_</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1 text-xs text-cyber-light">
            <span>v1.0.0</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;