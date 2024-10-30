import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
    const [data, setData] = useState({ users: [], properties: [], messages: [] });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/admin/dashboard', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h3>Users</h3>
            <ul>{data.users.map(user => <li key={user.id}>{user.username} ({user.user_type})</li>)}</ul>
            <h3>Properties</h3>
            <ul>{data.properties.map(property => <li key={property.id}>{property.title}</li>)}</ul>
            <h3>Messages</h3>
            <ul>{data.messages.map(message => <li key={message.id}>{message.content}</li>)}</ul>
        </div>
    );
};

export default AdminDashboard;
