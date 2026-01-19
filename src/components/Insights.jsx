import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Insights.css';
import insightsImage from '../assets/project_farmhouse.png';

const Insights = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const cardX = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
    const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section className="insights-section" ref={sectionRef}>
            <div className="insights-container">
                <motion.div
                    className="insights-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="insights-label">Market Intelligence</span>
                    <h2 className="insights-headline">
                        Smarter Investment Decisions
                    </h2>
                </motion.div>
                <motion.div
                    className="insights-card"
                    style={{ x: cardX, opacity: cardOpacity }}
                >
                    <div className="insights-content-left">
                        <div className="chart-preview">
                            <div className="chart-header">
                                <span className="growth-text">13.2%</span>
                                <button className="chart-icon-btn"><ArrowUpRight size={18} /></button>
                            </div>
                            <div className="bar-chart">
                                <div className="bar green" style={{ height: '40%' }}></div>
                                <div className="bar blue" style={{ height: '60%' }}></div>
                                <div className="bar green" style={{ height: '35%' }}></div>
                                <div className="bar blue" style={{ height: '50%' }}></div>
                                <div className="bar green" style={{ height: '30%' }}></div>
                                <div className="bar blue" style={{ height: '45%' }}></div>
                                <div className="bar green" style={{ height: '55%' }}></div>
                                <div className="bar blue" style={{ height: '70%' }}></div>
                            </div>
                            <div className="chart-legend">
                                <span className="legend-item"><span className="dot green"></span> 2024</span>
                                <span className="legend-item"><span className="dot blue"></span> 2025</span>
                            </div>
                        </div>

                        <div className="insights-text">
                            <p>
                                Stay ahead of the curve with our comprehensive market reports.
                                We track property appreciation, infrastructure developments, and rental yields to ensure your investment grows securely over time.
                            </p>
                            <button className="btn-learn-more">Learn More</button>
                        </div>
                    </div>

                    <div className="insights-image-right">
                        <motion.img
                            src={insightsImage}
                            alt="Modern barn house"
                            style={{ y: imageY }}
                        />
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default Insights;
