import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ImageSlider from '../components/ImageSlider';
import Carousel from '../components/Carousel';
import ExpertsCard from '../components/ExpertsCard';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image1 from '../bg-home1.png'
import Image2 from '../bg-home2.png'
import Image3 from '../bg-home3.png'
import Image4 from '../bg-home4.png'


const Home = () => {
  const [text] = useTypewriter({
    words: ['your candidate', 'you before your next opportunity'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const images = [Image1, Image2, Image3, Image4];

  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //     const intervalId = setInterval(() => {
  //         if(currentIndex === images.length - 1) {
  //             setCurrentIndex(0);
  //         } 
  //         else {
  //               setCurrentIndex(currentIndex + 1);
  //         }
  //     }, 5000)
      
  //     return () => clearInterval(intervalId);
  //   }, []
  // )

  useEffect(() => {
    setInterval(() => {
      let random = Math.floor(Math.random() * 4);
      setCurrentIndex(random);
    }, 3000)
  }, [])


  return (
    <div>
      <div className='bg-homepage'>
      <section class="hero-section mb-3">
        <div class="content">
            <h1 className='show-head-text-large'>Find the right <span class="multicolor-text">Expert</span></h1>
            <h2 className='show-head-text-mobile'>Find the right <span class="multicolor-text-mobile">expert</span> to interview your candidate</h2>

            <p className="poppins-regular type-text">to interview {' '}
              <span>{text}</span>
              <span className="cursor-type">
                <Cursor cursorStyle='|' />
              </span>
            </p>
            
            <form action="#" class="search-form">
                <input type="text" placeholder="Search for any service..." required />
                <button class="material-symbols-outlined">search</button>
            </form>

            <div class="popular-tags">
                Popular:
                <ul class="tags">
                    <li><a href="#">Product Design</a></li>
                    <li><a href="#">Software Dev</a></li>
                    <li><a href="#">Data Analysis</a></li>
                </ul>
            </div>
        </div>
        {/* <LazyLoadImage src="./images/bg-home1.png" alt="" /> */}
        <LazyLoadImage src={images[currentIndex]} loading='lazy' effect='blur' />
      </section></div>

      <section className="brand-companies container d-flex justify-content-center align-items-center gap-0 gap-md-3 gap-xl-5">
        <span className='brand-relative'>Trusted by:</span>
        <LazyLoadImage src="./images/companies-brand/meta.png" loading='lazy' alt="meta" />
        <LazyLoadImage src="./images/companies-brand/google.png" loading='lazy' alt="google" />
        <LazyLoadImage src="./images/companies-brand/netflix.png" loading='lazy' alt="netflix" />
        <LazyLoadImage src="./images/companies-brand/pg.png" loading='lazy' alt="pg" />
        <LazyLoadImage src="./images/companies-brand/paypal.png" loading='lazy' alt="paypal" />
      </section>
      
      <section className='section-2 mb-5'>
        <h2 className="fw-bold crimson-pro mb-5">Popular Services</h2>
        <ImageSlider />
      </section>

      <div className='section-3'>
        <section className="row mb-4 gap-3 offerdiv">
          <div className="col-sm-12 col-md">
            <h2 className="fw-bold crimson-pro mb-5">What we have to offer?</h2>
            <LazyLoadImage className='mb-2' src="./images/1txt.png" loading='lazy' alt="" />
            <LazyLoadImage className='mb-2' src="./images/2txt.png" loading='lazy' alt="" />
            <LazyLoadImage className='mb-2' src="./images/3txt.png" loading='lazy' alt="" />
            <LazyLoadImage src="./images/4txt.png" loading='lazy' alt="" />
          </div>

          <LazyLoadImage loading='lazy' className='col-sm-12 col-md h-md-25 offerdiv-img' src="./images/bg-sec3.png" alt="" />
        </section>

        <div className='offer-btn-submit-div'>
        <button class="get-started-offerbtn" type="button">
          <a className='a-2' id='offer-btn' href="#!">Get Started</a>
        </button>
        </div>
      </div>

      <section className="section-4">
        <h2 className="fw-bold crimson-pro mb-5 sect-4-txt">We've got the Experts you need</h2>
        <div class="row card-row-1">
          <div className="col-xl col-md col-6 card-logo">
            <LazyLoadImage src="./images/brands/b1.png" loading='lazy' alt="" />
          </div>
          <div className="col-xl col-md col-6 card-logo">
            <LazyLoadImage src="./images/brands/b2.png" loading='lazy' alt="" />
          </div>
          <div className="col-xl col-md col-6 card-logo">
            <LazyLoadImage src="./images/brands/b3.png" loading='lazy' alt="" />
          </div>
          <div className="col-xl col-md col-6 card-logo">
            <LazyLoadImage src="./images/brands/b4.png" loading='lazy' alt="" />
          </div>
          <div className="col-xl col-md col-12 card-logo">
            <LazyLoadImage src="./images/brands/b5.png" loading='lazy' alt="" />
          </div>
        </div>

        <div class="row card-row-2">
          <div class="col-xl col-md col-6 card-logo">
            <LazyLoadImage src="./images/brands/b6.png" loading='lazy' alt="" />
          </div>
          <div class="col-xl col-md col-6 card-logo">
            <LazyLoadImage src="./images/brands/b7.png" loading='lazy' alt="" />
          </div>
          <div class="col-xl col-md col-6 card-logo">
            <LazyLoadImage src="./images/brands/b8.png" loading='lazy' alt="" />
          </div>
          <div class="col-xl col-md col-6 card-logo">
            <LazyLoadImage src="./images/brands/b9.png" loading='lazy' alt="" />
          </div>
          <div class="col-xl col-md col-12 card-logo">
            <LazyLoadImage src="./images/brands/b10.png" loading='lazy' alt="" />
          </div>
        </div>
      </section>

      <div className="section-5">
        <section className="row revodiv">
          <div className='col-sm-12 col-md mb-4'>
            <h4 className="fw-bold crimson-pro-black">Revolutionized Recruitment</h4>
            <LazyLoadImage className='w-50 py-4' src="./images/ensure.png" loading='lazy' alt="" />
            <LazyLoadImage className='w-100' src="./images/down-ex.png" loading='lazy' alt="" />
          </div>

          <LazyLoadImage className='col-sm-12 col-md' src="./images/sec5-img.png" loading='lazy' alt="" />
        </section>

        <div class="getstarted offer-btn-submit-div">
          <button class="get-started-revobtn" type="button">
            <a className='a-2' href="#!">Get Started</a>
          </button>
        </div>
      </div>

      <section className='section-6 mb-5'>
        <Carousel />
      </section>

      <section className="section-7 row mb-5 d-flex justify-content-center align-items-center">
        <div className="col-xl col-sm-6 col-md recruitdiv">
          <span className="recruit-text">As a Recruiter</span>
          <p className="relax-text">Relax, while we handle recruiting for you</p>
          <button className='join-now'><a className='a-2' href="#!">Join now</a></button>
        </div>
        
        <LazyLoadImage src="./images/unsplash.png" alt="" loading='lazy' className="col-xl col-md recruitimg" />
      </section>

      <section className="section-8">
        <h3 className="fw-bold crimson-pro mb-3">Featured Experts</h3>
        <ExpertsCard />
      </section>
    </div>
  )
}

export default Home