import React, { useState } from 'react';
import './AccordionCard.css'; // Ensure to import your CSS file

const AccordionCard = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-card ${isOpen ? 'open' : ''}`}>
            <div className="accordion-header" onClick={toggleAccordion}>
                <h2 style={{marginRight: "20px"}}>{title} {isOpen ? '-' : '+'}</h2>
            </div>
            <div className="accordion-content">
                {isOpen && <p>{content}</p>}
            </div>
        </div>
    );
};

export default AccordionCard;
