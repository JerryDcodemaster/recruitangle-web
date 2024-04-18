import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // <div className="footer row">
    //   <div className="col-xl col-md-6">
    //     <table className="table table-sm table-borderless">
    //       <thead>
    //         <tr>
    //           <th scope="col">Product</th>
    //           <th scope="col">Information</th>
    //           <th scope="col">Company</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td>Interviews</td>
    //           <td>FAQs</td>
    //           <td>About us</td>
    //         </tr>
    //         <tr>
    //           <td>Career advice</td>
    //           <td>Blog</td>
    //           <td>Careers</td>
    //         </tr>
    //         <tr>
    //           <td>Recruiters</td>
    //           <td>Support</td>
    //           <td>Contact us</td>
    //         </tr>
    //         <tr>
    //           <td>Experts</td>
    //         </tr>
    //         <tr>
    //           <td>Pricing</td>
    //         </tr>
    //       </tbody>
    //     </table>

    //     {/* <div className="row mb-3">
    //       <span className="col fw-bold">Product</span>
    //       <span className="col fw-bold">Information</span>
    //       <span className="col fw-bold">Company</span>
    //     </div>

    //     <div className="row mb-2">
    //       <span className="col">Interviews</span>
    //       <span className="col">Blog</span>
    //       <span className="col">About us</span>
    //     </div>

    //     <div className="row mb-2">
    //       <span className="col">Career advice</span>
    //       <span className="col">FAQs</span>
    //       <span className="col">Careers</span>
    //     </div>

    //     <div className="row mb-2">
    //       <span className="col">Recruiters</span>
    //       <span className="col">FAQs</span>
    //       <span className="col">Careers</span>
    //     </div>

    //     <div className="row mb-2">
    //       <span className="col">Career advice</span>
    //       <span className="col">Support</span>
    //       <span className="col">Contact us</span>
    //     </div>

    //     <div className="row mb-2">
    //       <span className="col">Experts</span>
    //     </div>

    //     <div className="row">
    //       <span className="col">Pricing</span>
    //     </div> */}
    //   </div>
    //   <div className="col-xl col-md-6">Hello</div>
    // </div>

    <footer className="footer">
      <div className="footer-container">
        <div className="row split">
          <div className="col-md-8 footer-row">
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

            {/* <div className="footer-col">
              <h4>follow us</h4>
              <div className='social-links'>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i> </a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div> */}
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
          
          <div className='terms'>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
          
          <div className='social-links'>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter"></i> </a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <Link className='footer-logo' to='/'>
          <img className='logo' src="./images/logo.png" alt="" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer