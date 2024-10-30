import React, { useEffect, useState } from 'react';

const MessageList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await fetch('/messages');
            const data = await response.json();
            setMessages(data);
        };
        fetchMessages();
    }, []);

    return (
        <div>
            <h2>Message List</h2>
            <ul>
                {messages.map(message => (
                    <li key={message.id}>{message.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
