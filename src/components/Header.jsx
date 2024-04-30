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
                    <span>Recruitangle</span>
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
                            
                            <select className='select-language'>
                                <option selected>EN</option>
                                <option value="1">AR</option>
                                <option value="2">BE</option>
                                <option value="3">BG</option>
                                <option value="3">DE</option>
                                <option value="3">DA</option>
                            </select>
                        </a>
                    </li>
                    <li><Link to="https://www.joinas.recruitangle.com/">Sign In</Link></li>
                    <li className="join-btn"><Link to="https://www.joinas.recruitangle.com/">Join now</Link></li>
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