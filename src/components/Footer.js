import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <h1>Contact Us</h1>
            <div className='details'>
                <span>
                <i className="fas fa-map-marker-alt"></i>Jaison House, Cet, Trivandrum
                </span>
                <span>
                <i className="far fa-envelope"></i>msicdcs@gmail.com
                </span>
                <span>
                <i className="fas fa-phone-square-alt"></i> 6282387049
                </span>

            </div>
        </div>
    )
}

export default Footer;
