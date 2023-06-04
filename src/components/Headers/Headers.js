import React from 'react';
import image from '../../images/Logo.svg'
import './Headers.css';

const Headers = () => {
    return (
        <nav className='header'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='anchor'>
                <a href="/order">Order</a>
                <a href="/orderreview">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Headers;