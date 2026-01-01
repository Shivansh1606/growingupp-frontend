// src/components/layout/Header.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* YELLOW + BLACK LOGO */}
<Link to="/" className="flex items-center gap-2">
  <img 
    src="/src/assets/logo.png"
    alt="GrowingUpp" 
    className="h-12 w-auto drop-shadow-lg"
    onError={(e) => {
      e.target.style.display = 'none';
      e.target.nextSibling.style.display = 'flex';
    }}
  />
  <div className="md:flex items-center">
    <span className="text-xl font-bold text-black">GrowingUpp</span>
  </div>
</Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                      location.pathname === link.path
                        ? 'text-yellow-400 bg-black shadow-md'
                        : 'text-gray-800 hover:text-yellow-400 hover:bg-black/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="/contact"
                className="px-6 py-2 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0, 
            opacity: isOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
                transition={{ delay: isOpen ? index * 0.1 : 0 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-yellow-400 bg-black shadow-md'
                      : 'text-gray-800 hover:text-yellow-400 hover:bg-black/10'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="/contact"
              className="block px-4 py-3 mt-4 rounded-lg font-semibold bg-yellow-400 text-black text-center hover:bg-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}
