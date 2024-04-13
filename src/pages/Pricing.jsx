import React from 'react';
import '../css/pricing.css';

const Pricing = () => {
  return (
    <div className="container py-5">
      <h4 className='poppins-semibold head-text'>Choose Your Subscription plan</h4>

      <section className="card-section">
        <h4 className="crimson-pro-font small-text">For Jobseekers</h4>

        <div className="pricing-container">
          <div className="card">
            <h4 className='poppins-semibold mb-5'>Basic</h4>
            <h4 className='poppins-semibold free'>Free</h4>

            <span className='d-flex align-items-center pt-2 pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Join for free</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Pay per interview session with experts</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Pay for career advice with experts</span>
            </span>

            <button className='pricing-btn mt-2'><a className='a-session' href="#!">Get Started</a></button>
          </div>

          <div className="card second-card">
            <h4 className='poppins-semibold'>Standard</h4>
            <button className="tag">Most Popular</button>
            <h4 className='poppins-semibold free'>$29 <span className='text-dark fs-6'>USD /month</span></h4>

            <span className='d-flex align-items-center pt-2 pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2"> Join for free</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Pay per interview session with experts</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Pay for career advice with experts</span>
            </span>

            <button className='pricing-btn'><a className='a-session' href="#!">Get Started</a></button>
          </div>

          <div className="card">
            <h4 className='poppins-semibold'>Pro</h4>
            <button className="tag">Save $30</button>
            <h4 className='poppins-semibold free'>$150 <span className='text-dark fs-6'>USD /6 months</span></h4>

            <span className='d-flex align-items-center pt-2 pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2"> Join for free</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Pay per interview session with experts</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Pay for career advice with experts</span>
            </span>

            <button className='pricing-btn'><a className='a-session' href="#!">Get Started</a></button>
          </div>

          
        </div>
      </section>

      <section className="card-section">
        <h4 className="crimson-pro-font small-text">For Recruiters</h4>

        <div className="pricing-container">
          <div className="card">
            <h4 className='poppins-semibold mb-5'>Pay per session</h4>
            <h4 className='poppins-semibold free mb-2'>Flexible</h4>

            <span className='d-flex align-items-center pt-2 pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Pay for individual candidate</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Pay per interview session to experts</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Pay for career advice with experts</span>
            </span>

            <button className='pricing-btn mt-5'><a className='a-session' href="#!">Get Started</a></button>
          </div>

          <div className="card second-card">
            <h4 className='poppins-semibold'>Standard</h4>
            <button className="tag">Most Popular</button>
            <h4 className='poppins-semibold free'>$29 <span className='text-dark fs-6'>USD /10 Candidates</span></h4>

            <span className='d-flex align-items-center pt-2 pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Pay for interview sessions of 10 candidates</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Get feedback from interviewer of the sponsored candidates</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Get notified when session begins</span>
            </span>

            <button className='pricing-btn'><a className='a-session' href="#!">Get Started</a></button>
          </div>

          <div className="card">
            <h4 className='poppins-semibold'>Pro</h4>
            <button className="tag">Save $30</button>
            <h4 className='poppins-semibold free'>$49 <span className='text-dark fs-6'>USD /20 Candidates</span></h4>

            <span className='d-flex align-items-center pt-2 pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Pay for interview sessions of 20 candidates</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">et feedback from interviewer of the sponsored candidates</span>
            </span>
            <span className='d-flex align-items-center pb-3'>
              <i class="fa-solid fa-check"></i>
              <span className="poppins-reg px-2">Get notified when session begins</span>
            </span>

            <button className='pricing-btn'><a className='a-session' href="#!">Get Started</a></button>
          </div>

          
        </div>
      </section>
    </div>



    // <div class="d-grid gap-2 col-xl-6 col-md-12 mx-auto">
    //       <button class="get-started" type="button">
    //         <a className='a-2' href="#!">Get Started</a>
    //       </button>
    //       </div>
  )
}

export default Pricing