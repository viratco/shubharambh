import React, { useRef, useState } from 'react';
import { Ruler, BedDouble, Bath } from 'lucide-react';
import { motion } from 'framer-motion';
import './Projects.css';
import projectImage1 from '../assets/project_farmhouse.png';
import projectImage2 from '../assets/project_villa.png';
import projectImage3 from '../assets/project_modern_home.png';

const Projects = () => {
    const scrollContainer = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainer.current.offsetLeft);
        setScrollLeft(scrollContainer.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollContainer.current.scrollLeft = scrollLeft - walk;
    };

    const projects = [
        {
            id: 1,
            name: 'The Serene Orchard',
            price: '₹4.5 Cr',
            image: projectImage1,
            sqft: '4,200 sq. ft.',
            beds: 4,
            baths: 4
        },
        {
            id: 2,
            name: 'Grand Horizon Villa',
            price: '₹7.2 Cr',
            image: projectImage2,
            sqft: '6,500 sq. ft.',
            beds: 5,
            baths: 6
        },
        {
            id: 3,
            name: 'City Lights Penthouse',
            price: '₹3.8 Cr',
            image: projectImage3,
            sqft: '3,000 sq. ft.',
            beds: 3,
            baths: 3
        }
    ];

    return (
        <section className="projects-section">
            <div className="projects-header">
                <motion.span
                    className="projects-label"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Exclusive Portfolio
                </motion.span>
                <motion.h2
                    className="projects-headline"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Explore Our Handpicked<br />
                    Premium Properties
                </motion.h2>
            </div>

            <motion.div
                className="projects-carousel"
                ref={scrollContainer}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <div className="drag-indicator">
                    « DRAG »
                </div>

                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="card-image-wrapper">
                            <img src={project.image} alt={project.name} draggable="false" />
                            <div className="price-tag">{project.price}</div>
                        </div>
                        <div className="card-details">
                            <h3 className="project-title">{project.name}</h3>
                            <div className="project-specs">
                                <div className="spec-item">
                                    <Ruler size={16} />
                                    <span>{project.sqft}</span>
                                </div>
                                <div className="spec-item">
                                    <BedDouble size={16} />
                                    <span>{project.beds}</span>
                                </div>
                                <div className="spec-item">
                                    <Bath size={16} />
                                    <span>{project.baths}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
