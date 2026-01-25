import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "events", label: "Events" },
    { id: "team", label: "Team" }, // separate page
    { id: "contact", label: "Contact Us" },
  ];

  const socialLinks = {
    instagram: "https://www.instagram.com/electroverse.comm_tsec/",
    linkedin: "https://www.linkedin.com/company/electroverse-comm-tsec/",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (id === "team") {
      navigate("/team");
    } else {
      onNavigate(id);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg">
            <img src="/logo.webp" alt="Electroverse Logo" className="h-8 w-8" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-gray-400 bg-clip-text text-transparent">
            ELECTROVERSE.COMM
          </span>
        </div>

        {/* Nav Items */}
        <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-2xl px-2 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all ${
                activeSection === item.id && item.id !== "team"
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-3">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white/5 backdrop-blur-md
                       flex items-center justify-center
                       border border-white/10
                       text-gray-300 hover:text-white hover:bg-white/10 transition"
          >
            <Instagram size={22} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-white/5 backdrop-blur-md
                       flex items-center justify-center
                       border border-white/10
                       text-gray-300 hover:text-white hover:bg-white/10 transition"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center">
              <img src="/logo.webp" alt="Logo" className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-gray-400 bg-clip-text text-transparent">
              ELECTROVERSE
            </span>
          </div>

          {/* Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-background/80 backdrop-blur-xl border-t border-white/10 px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-4 rounded-xl text-lg font-semibold
                           text-gray-300 hover:text-white hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
