import React from 'react';
import "../css/expert.css";

const Expert = () => {
  return (
    <>
      <section class="expert-section mt-5">
        <div class="content">
            <h1>How can we help you?</h1>

            <form action="#" class="search-form">
                <input type="text" placeholder="Search..." required />
                <button class="material-symbols-outlined">search</button>
            </form>

            <div class="popular-tags">
                Popular searches:
                <ul class="tags">
                    <li><a href="#">Booking</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Experts</a></li>
                </ul>
            </div>
          </div>
          {/* <img src="./images/about/fill-2.png" alt="" /> */}
      </section>

      <section className="categories-section">
        <h2>Search by Categories</h2>
        <div className='row gap-4 expertbox-container'>
          <div className="box col-3">
            <img src="./images/about/user.png" alt="" />
            <span>Your Recruitangle Account</span>
          </div>
          <div className="box col-3">
            <img src="./images/about/shopping-basket-02.png" alt="" />
            <span>Booking a session</span>
          </div>
          <div className="box col-3">
            <img src="./images/about/notebook.png" alt="" />
            <span>Bookings Management</span>
          </div>
          <div className="box col-3">
            <img src="./images/about/wallet-01.png" alt="" />
            <span>Payment & Withdrawals</span>
          </div>
          <div className="box col-3">
            <img src="./images/about/security-validation.png" alt="" />
            <span>Regulations & Guidelines</span>
          </div>
          <div className="box col-3">
            <img src="./images/about/wallet-done-02.png" alt="" />
            <span>Refunds</span>
          </div>
          <div className="box col-3">
            <img src="./images/about/security-lock.png" alt="" />
            <span>Trust and Safety</span>
          </div>
          <div className="box col-3">
            <img src="./images/about/laptop-video.png" alt="" />
            <span>Becoming an Expert</span>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="col details-sec">
          <h1>Can’t find what you’re looking for?</h1>
          <span>We’re here to help.</span>

          <p className='mail mt-5'>
            <img src="./images/about/mail.png" alt="" />
            info@recruitangle.com
          </p>
          <p className='call'>
            <img src="./images/about/call.png" alt="" />
            Support (+234) 905 4435 232 
          </p>
        </div>
        <div className="col contact-form">
          <h2>We’d love to hear from you!</h2>
          <h2>Let’s get in touch</h2>

          <div className="form mt-5">
            <div className="row mb-4">
                <div className="col-12 col-md-6 space-md">
                  <label className="form-label">Full Name</label>
                  <input type="text" class="form-control shadow-none" required />
                </div>
                
                <div className="col-12 col-md-6">
                  <label className="form-label">Company</label>
                  <input type="text" class="form-control shadow-none" required />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12 col-md-6 space-md">
                  <label className="form-label">Email</label>
                  <input type="email" class="form-control shadow-none" required />
                </div>
                
                <div className="col-12 col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input type="number" class="form-control shadow-none" required />
                </div>
            </div>

            <div class="col-auto mb-4">
              <label className="form-label">Address</label>
              <input type="text" class="form-control shadow-none" required/>
            </div>

            <div className="mb-4">
              <label className="form-label">Your message</label>
              <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="col-auto">
              <button type="submit" className="mb-3 msg-btn">Send Message</button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Expert