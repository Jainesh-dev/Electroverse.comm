import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Linkedin } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "events", label: "Events" },
    { id: "team", label: "Team" },
    {label: "Sponsors",id: "sponsors",},
    { id: "contact", label: "Contact Us" },
    
  ];

  const socialLinks = {
    instagram: "https://www.instagram.com/electroverse.comm_tsec/",
    linkedin: "https://www.linkedin.com/company/electroverse-comm-tsec/"
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-black-900/95 backdrop-blur-lg border-b shadow-lg" 
        : "bg-black-900/90 backdrop-blur-md"
    }`}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Left Corner - Logo */}
        <div 
          className="cursor-pointer flex items-center space-x-3 group"
          onClick={() => onNavigate("home")}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white-500 to-black-600 flex items-center justify-center shadow-lg group-hover:shadow-gray-500/25 transition-all duration-300">
            <img 
              src="/logo.png" 
              alt="Electroverse Logo" 
              className="h-8 w-8 object-contain"
            />
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-gray-500 bg-clip-text text-transparent group-hover:from-blue-50 group-hover:to-Gray-800 transition-all duration-300">
            ELECTROVERSE
          </span>
        </div>

        {/* Center Navigation */}
        <div className="flex items-center space-x-1 bg-black-800/60 rounded-2xl px-2 py-2  ">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeSection === item.id 
                  ? " text-white shadow-inner border border-gray-500/30" 
                  : "text-gray-300 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Corner - Social Media Icons */}
        <div className="flex items-center space-x-3">
          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-black-800 flex items-center justify-center border border-gray-700 text-gray-300 hover:text-white hover:border-black-500 hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
          >
            <Instagram size={24} />
          </a>
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-black-800 flex items-center justify-center border border-gray-700 text-gray-300 hover:text-white hover:border-black-500 hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden w-full">
        <div className={`flex items-center justify-between px-4 py-3 ${
          isScrolled ? "bg-black-900/95" : "bg-black-900/90"
        }`}>
          {/* Left Corner - Logo */}
          <div 
            className="cursor-pointer flex items-center space-x-2"
            onClick={() => onNavigate("home")}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white-500 to-black-600 flex items-center justify-center shadow-md">
              <img 
                src="/logo.png" 
                alt="Electroverse Logo" 
                className="h-6 w-6 object-contain"
              />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-gray-500 bg-clip-text text-transparent">
              ELECTROVERSE
            </span>
          </div>

          {/* Right Corner - Social Media Icons and Menu Button */}
          <div className="flex items-center space-x-2">            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-lg bg-black-800 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-800/75 backdrop-blur-lg border-t border-gray-700 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? " text-white border border-gray-500/30"
                      : "text-gray-300 hover:text-white hover:bg-black-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;