import React, { useState } from 'react';

const SendMessage = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ content: message }),
        });
        if (response.ok) {
            alert('Message sent!');
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Send Message</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default SendMessage;
