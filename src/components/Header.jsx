import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header = () => {

    const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const typedText = document.querySelector(".type-text");

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

        // <nav className='navbar navbar-expand-lg'>
        //     <div className='container-sm'>
        //         <Link to='/'>
        //             <img className='navbar-brand logo' src="./images/logo.png" alt="" />
        //         </Link>
               
        //         <button 
        //           className="navbar-toggler" 
        //           type="button" 
        //           data-bs-toggle="collapse" 
        //           data-bs-target="#navmenu"
        //         >
        //         <span className="navbar-toggler-icon"></span>
        //         </button>

        //         <div className="collapse navbar-collapse" id="navmenu">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <Link to="/" className="nav-link poppins-medium">Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/pricing" className="nav-link poppins-medium">Pricing</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/about" className="nav-link poppins-medium">About us</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/experts" className="nav-link poppins-medium">Join as Expert</Link>
        //                 </li>
        //             </ul>
        //         </div>

        //         <div className="d-flex justify-content-center gap-1 header-btn">
        //             <button className='sign-in'><Link className='a-1' to="#!">Sign in</Link></button>
        //             <button className='join-now'><Link className='a-2' to="#!">Join now</Link></button>
        //         </div>

        //         <select className='p-1 ms-5'>
        //             <option selected>EN</option>
        //             <option>BE</option>
        //             <option>BG</option>
        //             <option>CY</option>
        //             <option>CS</option>
        //             <option>DE</option>
        //             <option>EL</option>
        //         </select>
        //     </div>
        // </nav>

        <header>
            <nav className="navbar">
                <a href="#" className="header-logo">
                    <img src="images/logo.png" alt="Recruitangle Logo" />
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

                {/* <button className={isActive ? 'show-mobile-menu' : ''}> */}
                <span 
                    onClick={toggleClass} 
                    id="hamburger-btn" 
                    className="material-symbols-outlined"
                >
                    menu
                </span>
                {/* </button> */}
            </nav>
    </header>
    )
}

{/* <script src="../../script.js"></script> */}


export default Header