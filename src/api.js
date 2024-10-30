const API_URL = '/api';

export const fetchProperties = async () => {
    const response = await fetch(`${API_URL}/properties`);
    return await response.json();
};

// Additional API functions can be added here
