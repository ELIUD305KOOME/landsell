import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetail = () => {
    const { propertyId } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        fetch(`/api/properties/${propertyId}`)
            .then(res => res.json())
            .then(data => setProperty(data))
            .catch(err => console.error(err));
    }, [propertyId]);

    if (!property) return <div>Loading...</div>;

    return (
        <div>
            <h1>{property.title}</h1>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            <p>Location: {property.location}</p>
            <p>Views: {property.views}</p>
            <p>Likes: {property.likes}</p>
            {/* Add a message sending component here */}
        </div>
    );
};

export default PropertyDetail;
