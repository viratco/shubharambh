import React, { useState } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="navbar-brand">SHUBHARAMBH</span>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center desktop-only">
                <div className="nav-links">
                    <a href="#" className="nav-link active">Home</a>
                    <a href="#" className="nav-link">Property</a>

                </div>
            </div>

            <div className="navbar-right">
                {/* Mobile Toggle */}
                <button className="icon-btn mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Property</a>


                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
