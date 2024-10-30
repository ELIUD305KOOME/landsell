import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Land<span className='hedspani'>B</span>ridge</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/properties">Properties</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/terms">Terms</Link>
            </nav>
        </header>
    );
};

export default Header;
