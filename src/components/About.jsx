import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';
import teamImage from '../assets/team_meeting.png';
import aboutFeatureImage from '../assets/project_villa.png';

const About = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.section
            className="about-section"
            ref={sectionRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="about-header">
                <motion.span variants={itemVariants} className="about-label">Premium Real Estate Partner</motion.span>
                <div className="about-content-grid">
                    <div className="about-text-column">
                        <motion.div variants={itemVariants} className="about-image-container">
                            <img src={aboutFeatureImage} alt="Luxury Real Estate" className="about-replacement-image" />
                        </motion.div>
                    </div>
                    <div className="about-stats-column">
                        <motion.div variants={itemVariants} className="stat-block">
                            <h3 className="stat-number-large">15+ Years</h3>
                            <p className="stat-title">Of Excellence</p>
                            <p className="stat-desc">
                                Delivering unmatched service and market expertise to help you make informed decisions in your property journey.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="stat-block">
                            <h3 className="stat-number-large">1000+</h3>
                            <p className="stat-title">Happy Families</p>
                            <p className="stat-desc">
                                Successfully settling over a thousand families in their dream homes with our transparent and dedicated service.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="about-cards-grid">
                <motion.div variants={itemVariants} className="card green-card">
                    <div className="card-badge">Verified Listings</div>
                    <div className="card-bottom">
                        <p>Every property is thoroughly vetted to ensure 100% legal clarity and peace of mind.</p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="card white-card">
                    <div className="card-badge">End-to-End Support</div>
                    <div className="card-bottom">
                        <p>From site visits to registration, our team guides you through every step of the process.</p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="card image-card">
                    <motion.img
                        src={teamImage}
                        alt="Team collaborating on architectural model"
                        style={{ y: imageY, scale: imageScale }}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
