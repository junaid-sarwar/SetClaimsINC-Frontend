import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

// Actual local logo paths
import LogoColor from '../assets/logos/logo-nobg.png'; 
import LogoWhite from '../assets/logos/white-logo2c.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const serviceLinks = [
    { name: "Medical Coding Services", href: "/services" },
    { name: "Eligibility Verification", href: "/services" },
    { name: "Prior Authorization", href: "/services" },
    { name: "Account Receivable", href: "/services" },
    { name: "Denials Management", href: "/services" },
    { name: "Payment Posting", href: "/services" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 font-['Poppins'] ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
    >
      {/* Primary Navigation - SEO Friendly */}
      <nav className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center" aria-label="Main Navigation">
        
        {/* LOGO SECTION - Swaps images based on scroll */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-10 md:h-12 overflow-hidden rounded-lg">
             <img 
               src={isScrolled ? LogoColor : LogoWhite} 
               alt="Set Claims Solutions Inc Logo" 
               className="h-full w-auto transition-opacity duration-500" 
             />
          </div>
          {/* <span className={`text-xl font-black tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-[#1D2B80]' : 'text-white'}`}>
            SET<span className="text-[#38B0E3]">CLAIMS</span>
          </span> */}
        </Link>

        {/* DESKTOP MENU - Semantic Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-bold tracking-wide transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#14B8A6]' : 'text-white/80 hover:text-white'}`}
          >
            HOME
          </Link>

          {/* SERVICES DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              aria-expanded={isDropdownOpen}
              className={`flex items-center gap-1 text-sm font-bold tracking-wide transition-colors uppercase ${
                isScrolled ? 'text-gray-700' : 'text-white/80'
              }`}
            >
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-4"
                >
                   {/* Secondary Nav for Services */}
                  <nav aria-label="Services Dropdown">
                    {serviceLinks.map((link, i) => (
                      <Link
                        key={i}
                        to={link.href}
                        className="block px-6 py-3 text-[13px] font-semibold text-gray-600 hover:bg-[#14B8A6]/5 hover:text-[#14B8A6] transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <Link to="/specialties" className={`text-sm font-bold tracking-wide transition-colors uppercase ${isScrolled ? 'text-gray-700 hover:text-[#14B8A6]' : 'text-white/80 hover:text-white'}`}>
            Specialties
          </Link> */}
          <Link to="/about" className={`text-sm font-bold tracking-wide transition-colors uppercase ${isScrolled ? 'text-gray-700 hover:text-[#14B8A6]' : 'text-white/80 hover:text-white'}`}>
            About
          </Link>

          {/* CTA BUTTON */}
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#14B8A6] to-[#38B0E3] text-white px-7 py-3 rounded-full text-xs font-black tracking-widest shadow-lg shadow-[#14B8A6]/20 transition-all uppercase"
            >
              Free Audit Now
            </motion.button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          aria-label="Toggle Menu"
          className="lg:hidden p-2 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
             <X className={isScrolled ? 'text-[#1D2B80]' : 'text-white'} /> 
          ) : (
             <Menu className={isScrolled ? 'text-[#1D2B80]' : 'text-white'} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY - SEO Friendly Nav Tag */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col p-6 gap-5">
              <Link to="/" className="text-sm font-bold text-gray-800 border-b border-gray-50 pb-2">HOME</Link>
              <div className="space-y-3">
                <p className="text-[10px] font-black text-[#14B8A6] tracking-widest uppercase">Our Services</p>
                {serviceLinks.map((link, i) => (
                  <Link key={i} to={link.href} className="block text-sm font-semibold text-gray-500 pl-2">{link.name}</Link>
                ))}
              </div>
              {/* <Link to="/specialties" className="text-sm font-bold text-gray-800">SPECIALTIES</Link> */}
              <Link to="/about" className="text-sm font-bold text-gray-800">ABOUT</Link>
              <Link to="/contact" className="bg-[#1D2B80] text-white py-4 rounded-2xl text-center font-black tracking-widest text-xs uppercase">
                Free Audit Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;