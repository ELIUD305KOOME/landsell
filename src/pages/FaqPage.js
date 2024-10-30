import React, { useEffect } from 'react';
import './FaqPage.css';

const FaqPage = () => {
    const faqs = [
        {
            question: "How do I create an account?",
            answer: "To create an account, click on the 'Register' button on the homepage and fill out the necessary information.",
            image: "https://randomuser.me/api/portraits/men/1.jpg" // Random image URL
        },
        {
            question: "How can I list my property?",
            answer: "Once logged in as a seller, navigate to the 'Properties' section and click 'Add Property' to list your property.",
            image: "https://randomuser.me/api/portraits/women/2.jpg" // Random image URL
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods including credit cards, bank transfers, and payment through secure online gateways.",
            image: "https://randomuser.me/api/portraits/men/3.jpg" // Random image URL
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach our support team via the 'Contact Us' page or email us directly at support@landbridge.com.",
            image: "https://randomuser.me/api/portraits/women/4.jpg" // Random image URL
        },
        {
            question: "How do I reset my password?",
            answer: "Click on the 'Forgot Password?' link on the login page, then follow the instructions sent to your email.",
            image: "https://randomuser.me/api/portraits/men/5.jpg" // Random image URL
        },
        {
            question: "Can I edit my property listing after it's posted?",
            answer: "Yes, as a seller, you can edit your property listings anytime by going to the 'My Properties' section.",
            image: "https://randomuser.me/api/portraits/women/6.jpg" // Random image URL
        },
        {
            question: "What should I do if I encounter a problem?",
            answer: "If you encounter any issues, please contact our support team through the 'Contact Us' page for assistance.",
            image: "https://randomuser.me/api/portraits/men/7.jpg" // Random image URL
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.faq-item');
            items.forEach((item) => {
                const itemPosition = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (itemPosition < windowHeight * 0.75 && itemPosition > 0) {
                    item.classList.add('animate-in');
                } else {
                    item.classList.remove('animate-in');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                    <img src={faq.image} alt={faq.question} className="faq-image" />
                </div>
            ))}
        </div>
    );
};

export default FaqPage;
