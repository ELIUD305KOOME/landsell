import React, { useState } from 'react';
import PropertyList from '../components/Properties/PropertyList';
import './PropertyPage.css';

const PropertyPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState({
        county: '',
        location: '',
        priceRange: '',
        propertyType: '',
        bedrooms: '',
        bathrooms: '',
        landSize: '',
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="property-page">
            <div className="filter-nav">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search properties..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className="filters">
                    <select name="county" onChange={handleFilterChange}>
                        <option value="">Select County</option>
                        <option value="nairobi">Nairobi</option>
                        <option value="mombasa">Mombasa</option>
                        <option value="kisumu">Kisumu</option>
                        <option value="nakuru">Nakuru</option>
                        <option value="eldoret">Eldoret</option>
                    </select>
                    <select name="location" onChange={handleFilterChange}>
                        <option value="">Select Location</option>
                        <option value="westlands">Westlands, Nairobi</option>
                        <option value="kilimani">Kilimani, Nairobi</option>
                        <option value="nyali">Nyali, Mombasa</option>
                        <option value="kisumu-central">Kisumu Central</option>
                        <option value="nairobi-west">Nairobi West</option>
                    </select>
                    <select name="priceRange" onChange={handleFilterChange}>
                        <option value="">Select Price Range</option>
                        <option value="0-100000">Under KSh 10,000,000</option>
                        <option value="100000-300000">KSh 10,000,000 - KSh 30,000,000</option>
                        <option value="300000-500000">KSh 30,000,000 - KSh 50,000,000</option>
                    </select>
                    <select name="propertyType" onChange={handleFilterChange}>
                        <option value="">Select Property Type</option>
                        <option value="residential">Residential Land</option>
                        <option value="commercial">Commercial Land</option>
                        <option value="agricultural">Agricultural Land</option>
                        <option value="industrial">Industrial Land</option>
                        <option value="mixed-use">Mixed-Use Land</option>
                        <option value="vacant">Vacant Land</option>
                    </select>
                    <select name="landSize" onChange={handleFilterChange}>
                        <option value="">Select Land Size</option>
                        <option value="0-500">Under 500 sqm</option>
                        <option value="500-1000">500 - 1000 sqm</option>
                        <option value="1000-2000">1000 - 2000 sqm</option>
                        <option value="2000+">Over 2000 sqm</option>
                    </select>
                </div>
            </div>

            <PropertyList searchTerm={searchTerm} filters={filter} />
        </div>
    );
};

export default PropertyPage;
