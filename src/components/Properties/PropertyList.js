import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('/api/properties')
            .then(res => res.json())
            .then(data => setProperties(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Properties for Sale</h1>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        <Link to={`/properties/${property.id}`}>{property.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
