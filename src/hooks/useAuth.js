import { useState } from 'react';

export const useAuth = () => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        if (response.ok) {
            const data = await response.json();
            setUser(data.user);
            localStorage.setItem('token', data.token);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return { user, login, logout };
};
