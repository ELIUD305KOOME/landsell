import { useState, useEffect } from 'react';

export const useMessages = () => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        const response = await fetch('/messages');
        const data = await response.json();
        setMessages(data);
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    return { messages };
};
