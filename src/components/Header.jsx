import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../css/header.css';

const Header = () => {

    const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector("#hamburger-btn");

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
        header.classList.toggle("show-mobile-menu");
        document.body.style.overflow = 'hidden';
    }

    const closeToggleClass = () => {
        hamburgerBtn.click();
        document.body.style.overflow = 'visible';
    }

    return (
        <header>
            <nav className="navbar">
                <a href="#" className="header-logo">
                    <LazyLoadImage src="images/logo.png" loading='lazy' alt="Recruitangle Logo" />
                </a>
        
                <ul className="menu-links">
                    <span onClick={closeToggleClass} id="close-menu-btn" className="material-symbols-outlined">close</span>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/expert">Join as Expert</Link></li>
                    <li className="language-item">
                        <a href="#">
                            <span className="material-symbols-outlined">language</span>
                            English
                        </a>
                    </li>
                    <li><a href="#">Sign In</a></li>
                    <li className="join-btn"><a href="#">Join now</a></li>
                </ul>

                <span 
                    onClick={toggleClass} 
                    id="hamburger-btn" 
                    className="material-symbols-outlined"
                >
                    menu
                </span>
            </nav>
    </header>
    )
}

export default Header