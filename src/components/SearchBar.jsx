
import React from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { Users, CheckCircle, Award } from 'lucide-react';
import './SearchBar.css';

const Counter = ({ from = 0, to, duration = 2, prefix = "", suffix = "" }) => {
  const nodeRef = React.useRef();
  const inView = useInView(nodeRef, { once: true });

  React.useEffect(() => {
    if (!inView) return;

    const node = nodeRef.current;
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = `${prefix}${Math.round(value)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [from, to, duration, inView, prefix, suffix]);

  return <span ref={nodeRef} className="stat-value">{prefix}{from}{suffix}</span>;
};

const SearchBar = () => {
  return (
    <motion.div
      className="search-bar-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >
      <div className="search-bar stats-mode">
        <div className="search-section stat-section">
          <div className="search-icon-wrapper">
            <Users size={24} className="text-gray-500" />
          </div>
          <div className="search-inputs">
            <Counter to={500} suffix="+" />
            <label>Happy Families</label>
          </div>
        </div>

        <div className="divider"></div>

        <div className="search-section stat-section">
          <div className="search-icon-wrapper">
            <CheckCircle size={24} className="text-gray-500" />
          </div>
          <div className="search-inputs">
            <Counter to={100} suffix="+" />
            <label>Verified Listings</label>
          </div>
        </div>

        <div className="divider"></div>

        <div className="search-section stat-section">
          <div className="search-icon-wrapper">
            <Award size={24} className="text-gray-500" />
          </div>
          <div className="search-inputs">
            <Counter to={1} prefix="#" />
            <label>In Greater Noida</label>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;

