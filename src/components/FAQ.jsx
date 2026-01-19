import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <motion.div
            className={`faq-item ${isOpen ? 'open' : ''}`}
            onClick={toggle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="faq-question">
                <h3>{question}</h3>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            question: "How do I schedule a site visit?",
            answer: "You can easily schedule a site visit through our website or by calling our dedicated concierge team. We offer complimentary pick-up and drop-off services for premium bookings."
        },
        {
            question: "What documents are required for booking a property?",
            answer: "For Indian residents, you'll need a PAN card, Aadhar card/Passport for address proof, and recent passport-sized photographs. NRIs may require additional documentation as per FEMA regulations."
        },
        {
            question: "Do you provide home loan assistance?",
            answer: "Yes, we have exclusive tie-ups with top banks like HDFC, SBI, and ICICI to ensure you get the best interest rates and quick loan processing."
        },
        {
            question: "Are all listed properties RERA approved?",
            answer: "Absolutely. Transparency is our core value. We only list projects that are fully RERA registered and have clear legal titles."
        },
        {
            question: "What are the brokerage charges?",
            answer: "For new project bookings, we charge 0% brokerage. Our services are compensated by the specialized developer partners we work with."
        }
    ];

    return (
        <section className="faq-section">
            <div className="faq-container">
                <motion.div
                    className="faq-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="faq-label">Common Inquiries</span>
                    <h2 className="faq-headline">
                        Your Guide to Seamless<br />
                        Real Estate Transactions
                    </h2>
                    <div className="faq-buttons">
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-secondary">Learn More</button>
                    </div>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggle={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
