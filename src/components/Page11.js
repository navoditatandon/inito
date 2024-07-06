import React from 'react';
import AccordionCard from './AccordionCard';
import './Page11.css'; // Ensure to import your CSS file

const Page11 = () => {
    // Sample data for accordion items
    const accordionItems = [
        { title: 'Accordion Title 1', content: 'This is the content for Accordion Title 1 that will expand and collapse.' },
        { title: 'Accordion Title 2', content: 'This is the content for Accordion Title 2 that will expand and collapse.' },
        { title: 'Accordion Title 3', content: 'This is the content for Accordion Title 3 that will expand and collapse.' },
        { title: 'Accordion Title 4', content: 'This is the content for Accordion Title 4 that will expand and collapse.' },
        { title: 'Accordion Title 5', content: 'This is the content for Accordion Title 5 that will expand and collapse.' },
        { title: 'Accordion Title 6', content: 'This is the content for Accordion Title 6 that will expand and collapse.' },
        { title: 'Accordion Title 7', content: 'This is the content for Accordion Title 7 that will expand and collapse.' },
        { title: 'Accordion Title 8', content: 'This is the content for Accordion Title 8 that will expand and collapse.' },
    ];

    // Separate items for left and right columns
    const leftColumnItems = accordionItems.slice(0, 4);
    const rightColumnItems = accordionItems.slice(4, 8);

    return (
        <div className="page-11-container">
            <h1 style= {{display: "flex", justifyContent:"center"}}>Your top questions, answered</h1>
            <div className="accordion-grid">
                {/* Left column items */}
                <div className="column">
                    {leftColumnItems.map((item, index) => (
                        <AccordionCard key={index} title={item.title} content={item.content} />
                    ))}
                </div>
                {/* Right column items */}
                <div className="column">
                    {rightColumnItems.map((item, index) => (
                        <AccordionCard key={index + 4} title={item.title} content={item.content} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page11;
