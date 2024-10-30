import React, { useState } from 'react';
import './ContactPage.css'; // Import the CSS for styling

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to an API
        setSuccessMessage('Your message has been sent! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        // Add CSS styles for the contact page here
        <div className="cont">
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out using the form below or contact us directly at <a href="mailto:support@landbbridge.com">support@landbbridge.com</a>.</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
                <button type="submit">Send Message</button>
            </form>

            {successMessage && <p className="success-message">{successMessage}</p>}

            <div className="contact-info">
                <h3>Our Office</h3>
                <p>123 landbbridge St.</p>
                <p>ke, Nairobi, 00100</p>
                
            </div>
        </div>
        </div>
    );
};

export default ContactPage;
