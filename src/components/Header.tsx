import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "R00t", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Certifications", path: "/certifications" }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyber-black bg-opacity-95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Menu */}
          {/* Centered Navbar Items with Resume Button */}
          <div className="hidden md:flex justify-center items-center space-x-6 pt-2 w-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-mono text-sm uppercase tracking-wider hover:text-cyber-blue transition-colors duration-300 ${
                    isActive ? "text-cyber-blue" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Resume Button */}
            <a
              href="/Resume.pdf"
              className="font-mono text-sm uppercase tracking-wider flex items-center hover:text-cyber-blue transition-colors duration-300"
              
              download="Resume.pdf"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-cyber-dark border-t border-cyber-gray transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
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
                  isActive ? "text-cyber-blue" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* ✅ Resume Download Button for Mobile */}
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="font-mono text-sm py-2 uppercase tracking-wider hover:text-cyber-blue transition-colors duration-300 flex items-center w-fit"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
