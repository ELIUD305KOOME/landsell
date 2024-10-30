import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>Land<span className='hedspani'>B</span>ridge</h1>
                    <p>&copy; 2024 LandBbridge. All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <h2 className='hedtwo'>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/properties">Properties</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/terms">Terms</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h2 className='hedtwo'>Contact Us</h2>
                    <p>Email: <a href="mailto:support@landbbridge.com">support@landbbridge.com</a></p>
                    <p>Phone: <a href="tel:+11234567890">(254) 792-182-559</a></p>
                </div>
                <div className="footer-socials">
                    <h2 className='hedtwo'>Follow Us</h2>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Subscribe to our newsletter for the latest updates:</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
