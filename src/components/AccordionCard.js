import React, { useState } from 'react';
import './AccordionCard.css'; // Ensure to import your CSS file

const AccordionCard = ({ item, expanded, onClick }) => {
    const handleClick = () => {
        onClick(item.id);
    };

    return (
        <div className="accordion-card">
            <div className="accordion-header" onClick={handleClick}>
                <h4>{item.title}</h4>
                <span className={`accordion-icon ${expanded ? 'expanded' : 'collapsed'}`}>
                    {expanded ? '-' : '+'}
                </span>
            </div>
            <div className={`accordion-content ${expanded ? 'expanded' : 'collapsed'}`}>
                {expanded && <p>{item.content}</p>}
            </div>
        </div>
    );
};

export default AccordionCard;
