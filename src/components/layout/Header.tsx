import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GearIcon } from '../icons/GearIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 20);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Close menu on resize if open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const navigationItems = [
    { name: 'Home', href: '/#hero', ariaLabel: 'Go to home section' },
    { name: 'Challenges', href: '/#challenges', ariaLabel: 'View common challenges' },
    { name: 'Services', href: '/#services', ariaLabel: 'View our services' },
    { name: 'Benefits', href: '/#benefits', ariaLabel: 'See the benefits' },
    { name: 'Process', href: '/#process', ariaLabel: 'Learn about our process' },
    { name: 'Contact', href: '/#contact', ariaLabel: 'Contact us' }
  ];

  const handleNavigation = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/' && href.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const targetId = href.substring(2);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else if (href.startsWith('/#')) {
      const targetId = href.substring(2);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      navigate(href);
    }
    
    setIsMenuOpen(false);
  }, [location.pathname, navigate]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}
      role="banner"
    >
      <nav 
        className="container mx-auto px-4 py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-lg"
            onClick={(e) => handleNavigation(e, '/')}
            aria-label="Ypma Automation - Go to homepage"
          >
            <GearIcon className="h-8 w-8 text-accent-blue transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold bg-gradient-to-r from-accent-blue to-accent-orange bg-clip-text text-transparent">
              Ypma Automation
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div 
            className="hidden md:flex items-center space-x-8"
            role="menubar"
          >
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-600 hover:text-accent-blue transition-colors relative group font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-lg px-2 py-1"
                role="menuitem"
                aria-label={item.ariaLabel}
              >
                {item.name}
                <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-accent-blue transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white mt-4 rounded-lg shadow-lg"
              role="menu"
            >
              <div className="flex flex-col space-y-2 p-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className="text-gray-600 hover:text-accent-blue transition-colors py-2 px-4 rounded-lg hover:bg-gray-100 font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    role="menuitem"
                    aria-label={item.ariaLabel}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}