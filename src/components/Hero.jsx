import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import SearchBar from './SearchBar';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Find Your Perfect Haven<br />
                    With Trusted Real Estate Experts
                </motion.h1>
            </div>
            <SearchBar />
        </div>
    );
};

export default Hero;
