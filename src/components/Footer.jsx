import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Footer.css';
import footerImage from '../assets/project_modern_home.png';

const Footer = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
    const textScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <footer className="footer-section" ref={containerRef}>
            <div className="footer-top-bar">
                <div className="footer-copyright">
                    © 2024 Shubharambh. All rights reserved
                </div>
                <nav className="footer-nav">
                    <a href="#" className="footer-link">HOME</a>
                    <a href="#" className="footer-link">ABOUT</a>
                    <a href="#" className="footer-link">SERVICES</a>
                    <a href="#" className="footer-link">PROJECT</a>
                    <a href="#" className="footer-link">CONTACT</a>
                </nav>
                <div className="footer-legal">
                    <a href="#" className="footer-link-small">Terms of Use</a>
                    <a href="#" className="footer-link-small">Privacy Policy</a>
                </div>
            </div>

            <div className="footer-contact-info">
                <div className="contact-item">
                    <h3>Location</h3>
                    <p>Ansal golf link sector omega-1</p>
                    <p>sng plaza Mall ground floor office no 17</p>
                </div>
                <div className="contact-item">
                    <h3>Contact</h3>
                    <p>+91 87005 37007</p>
                    <p>+91 92056 50269</p>
                </div>
            </div>

            <div className="footer-hero">
                <motion.h1
                    className="footer-brand-large"
                    style={{
                        backgroundImage: `url(${footerImage})`,
                        scale: textScale,
                        opacity: textOpacity
                    }}
                >
                    SHUBHARAMBH
                </motion.h1>
            </div>

            <div className="footer-image-container">
                <motion.img
                    src={footerImage}
                    alt="Footer Hero"
                    style={{ y: imageY }}
                />
            </div>
        </footer>
    );
};

export default Footer;
