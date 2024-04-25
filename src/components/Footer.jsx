import React from 'react';
import '../css/footer.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row split">
          <div className="col-md-8 footer-row d-none d-md-flex">
            <div className="footer-col">
              <h4>product</h4>
              <ul>
                <li><a href="#">interviews</a></li>
                <li><a href="#">career advice</a></li>
                <li><a href="#">recruiters</a></li>
                <li><a href="#">experts</a></li>
                <li><a href="#">pricing</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>information</h4>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">support</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">careers us</a></li>
                <li><a href="#">contact us</a></li>
              </ul>
            </div>
          </div>

          <div className='col mail-box'>
            <h4>Subscribe</h4>

            <div class="input-group mb-3">
              <input type="text" class="form-control shadow-none" placeholder="Email address" />
              <button class="arrow-btn" type="button">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <span className='poppins-font-footer'>
              Hello fam, would you like to get emails regarding our products and services, updates and changes? Subscribe to our Newsletter. 
            </span>
          </div>
        </div>
        <hr className='pb-2 mt-5' />
        <div className='terms-icon-cont d-block d-md-flex mb-5 justify-content-between align-items-center'>
          <div></div>
          
          <div className='terms t1'>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>

          <div className='terms d-md-none'>
            <a href="#">Terms</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
          </div>
          
          <div className='social-links'>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter"></i> </a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <Link className='footer-logo' to='/'>
          <LazyLoadImage className='logo' src="./images/logo.png" loading='lazy' alt="" />
          <span>Recruitangle</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer