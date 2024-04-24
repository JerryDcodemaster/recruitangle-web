import React from 'react';
import "../css/about-us.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
  return (
    <>
      <header className="about-hero-section">
        <div className='w-100 w-xl-50'>
          <h2 className="crimson-font">Dedicated Teams.</h2>
          <h2 className="crimson-font">For Your Dedicated Dreams</h2>
          <p className='poppins-font'>We Provide the best recruitment service for Jobseekers and Recruiters to help make smarter hiring decisions.</p>
          <LazyLoadImage className='about-hero-img' src="./images/about/about-hero-img.png" loading='lazy' alt="" />
        </div>

        <div className="hero-background-img w-50 d-flex align-items-center">
          <LazyLoadImage className='second-img' src="./images/about/fill-1.png" loading='lazy' alt="" />
          <LazyLoadImage className='third-img' src="./images/about/fill-2.png" loading='lazy' alt="" />
          <LazyLoadImage className='fourth-img' src="./images/about/fill-3.png" loading='lazy' alt="" />
        </div>
      </header>
      
      <section className="row welcome-section mb-3">
        <div className="col d-none d-xl-block welcome-LazyLoadImage">
          <LazyLoadImage className='welcome-1' src="./images/about/welcome1.png" loading='lazy' alt="" />  
          <LazyLoadImage className='welcome-2' src="./images/about/welcome2.png" loading='lazy' alt="" />
        </div>
        <div className="col welcome-text">
          <h2 className='crimson-header-text mb-3'>Meet Recruitangle</h2>
          <div className='subtext'>
            <p className="poppins-subtext">
              Welcome to Recruitangle, where innovation meets expertise in the world of recruitment.
            </p>

            <p className="poppins-subtext">
              At RecruitAngle, we are passionate about transforming the way businesses hire talent. 
              Our platform connects companies with a global network of experienced interviewers, each bringing their unique insights and skills to the recruitment process.
            </p>

            <p className="poppins-subtext">
              Founded on the belief that every company deserves access to the best talent, we are committed to simplifying and enhancing the recruitment journey. 
              Whether you’re a small startup or a multinational corporation, Recruitangle offers a seamless solution to streamline your hiring process and find the perfect fit for every role.
            </p>

            <p className="poppins-subtext">
              Join us as we redefine recruitment together. Welcome to a new era of talent acquisition.
            </p>
          </div>
        </div>
      </section>

      <section className="vision-mission">
        <h2 className="vision-headtext">Our Vision</h2>
        <p className='vision-subtext'>
          Our vision is to revolutionize the recruitment process by creating a global network of expert interviewers, enabling seamless and efficient candidate evaluations for businesses worldwide.
        </p>

        <h2 className="mission-headtext">Our Mission</h2>
        <p className='mission-subtext'>
          Our mission is to empower businesses by providing access to diverse pool of skilled interviewers through our platform, streamlining the recruitment process, 
          and ensuring the best fit for every job role. 
          We strive to foster collaboration, innovation, and excellence in talent acquisition, ultimately driving organizational success and growth.
        </p>
      </section>
      
      <section className="value-section">
        <h2 className="value-headtext">Our Value</h2>
        <p className="value-subtext">
          Our platform streamlines the recruitment  process by connecting businesses with a network of experts interviewers. 
          Say goodbye to lengthy hiring cycles and hello to finding the perfect candidate faster than ever before. With our innovative solution, you can save time, reduce costs, and make smarter hiring decisions with confidence.
        </p>
      </section>

      <section className="team">
        <h2 className="team-headtext">Meet our Team</h2>
        <div className="row team-cards">
          <div className="col-xl-3 col-md-6 team-card">
            <LazyLoadImage src="./images/about/person1.png" loading='lazy' alt="1st Person" />
            <h2>Sarah Lobey</h2>
            <small>Founder & CEO</small>
          </div>
          <div className="col-xl-3 col-md-6 team-card">
            <LazyLoadImage src="./images/about/person2.png" loading='lazy' alt="2nd Person" />
            <h2>Mike Owen</h2>
            <small>Chief Technology Officer</small>
          </div>
          <div className="col-xl-3 col-md-6 team-card">
            <LazyLoadImage src="./images/about/person3.png" loading='lazy' alt="3rd Person" />
            <h2>Jinny Buehner</h2>
            <small>Marketing Manager</small>
          </div>
          <div className="col-xl-3 col-md-6 team-card">
            <LazyLoadImage src="./images/about/person4.png" loading='lazy' alt="" />
            <h2>Lucas Grabowska</h2>
            <small>Finance Manager</small>
          </div>
        </div>
      </section>
    </>
  )
}

export default About