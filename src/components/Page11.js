import React, { useState } from 'react';
import AccordionCard from './AccordionCard';
import './Page11.css'; // Ensure to import your CSS file

const Page11 = () => {
    // Sample data for accordion items
    const accordionItems = [
        { id: 1, title: 'What results does Inito give?', content: 'Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 4 hormones.' },
        { id: 2, title: 'How many test strips are required per cycle?', content: 'The number of tests depends on the irregularity and length of your cycles. For someone with an average cycle length of 30 days, 12-15 tests may be required to track and confirm ovulation.' },
        { id: 3, title: 'Where can I get more refill strips? Do I need to buy a new monitor every cycle?', content: 'Boxes of strips are available in the ‘shop’ tab in the Inito app. You don’t need to purchase the monitor again.' },
        { id: 4, title: 'Do I need to use a test strip for each hormone?', content: 'No. Inito is the only fertility monitor that measures Estrogen, LH, PdG (urine metabolite of progesterone) and FSH on a single test strip.' },
        { id: 5, title: 'Will Inito work if I have PCOS?', content: 'Every woman is unique, especially with a condition like PCOS, which can influence hormone levels. Inito shows you a full picture of your cycle, which can help you identify your fertile days and confirm ovulation.' },
        { id: 6, title: 'Do medications affect the results?', content: 'Fertility medications or other drugs that influence your hormones can prevent Inito from giving you accurate results. You will still be able to see your hormone patterns via the App.' },
        { id: 7, title: 'Can I use HSA benefits to purchase Inito?', content: 'Yes!' },
        { id: 8, title: 'Are there any limits to specific hormone thresholds?', content: 'Inito is designed to read all kinds of drops and surges in hormone levels. However, the set limits of measurement for E3G is 600 ng/ml, PdG is 40 ug/ml, and FSH & LH is 40 mIU/ml.' },
    ];

    // State to manage which accordion item is currently expanded
    const [expandedId, setExpandedId] = useState(null);

    // Function to handle click on accordion item
    const handleAccordionClick = (id) => {
        if (expandedId === id) {
            setExpandedId(null); // Collapse if already expanded
        } else {
            setExpandedId(id); // Expand if not already expanded
        }
    };

    return (
        <div className="page-11-container">
            <h1 className="page-title">Your top questions, answered</h1>
            <div className="accordion-grid">
                {/* Left column items */}
                <div className="column">
                    {accordionItems.slice(0, 4).map((item) => (
                        <AccordionCard
                            key={item.id}
                            item={item}
                            expanded={expandedId === item.id}
                            onClick={handleAccordionClick}
                        />
                    ))}
                </div>
                {/* Right column items */}
                <div className="column">
                    {accordionItems.slice(4, 8).map((item) => (
                        <AccordionCard
                            key={item.id}
                            item={item}
                            expanded={expandedId === item.id}
                            onClick={handleAccordionClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page11;
