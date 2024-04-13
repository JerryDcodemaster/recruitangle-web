import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ['your candidate', 'you before your next opportunity'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div>
      {/* <section className="section-1 row align-items-center mb-3">
        <div className='col-xl-6 col-md-12'>
          <h2 className="poppins-bold multi-head">Find the right <span className="multicolor-text">Expert</span></h2>
          <span className="poppins-regular type-text">to interview {' '}
            <span>{text}</span>
            <span className="cursor-type">
              <Cursor cursorStyle='|' />
            </span>
          </span>

          <div class="input-group search-bar mt-4 pb-4">
            <input type="text" class="form-control search-input" placeholder="Search for any service..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-outline-success" type="button" id="button-addon2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className='d-flex gap-2 product-tag'>
            <span className="fw-bold">Popular:</span>
            <button>Product Design</button>
            <button>Software Dev</button>
            <button>Data Analysis</button>
          </div>

        </div>

        <img id='image' className='col-xl-6 col-md-6' src="./images/bg-home1.png" alt="" />
      </section> */}

      <section class="hero-section mb-3">
        <div class="content">
            <h1>Find the right <span class="multicolor-text">Expert</span></h1>

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
        <img src="./images/bg-home1.png" alt="" />
    </section>

      <section className="brand-companies container d-flex justify-content-center align-items-center gap-0 gap-md-3 gap-xl-5">
        <span className='brand-relative'>Trusted by:</span>
        <img src="./images/companies-brand/meta.png" alt="meta" />
        <img src="./images/companies-brand/google.png" alt="google" />
        <img src="./images/companies-brand/netflix.png" alt="netflix" />
        <img src="./images/companies-brand/pg.png" alt="pg" />
        <img src="./images/companies-brand/paypal.png" alt="paypal" />
      </section>
      
      <section className='section-2 mb-5'>
        <h2 className="fw-bold crimson-pro mb-5">Popular Services</h2>
        <div class="row gap-3 gap-xl-0 services-card">
          <div class="col-md-5 col-xl-3 card-transit">
            <img src="./images/card-1.png" alt="" />
          </div>
          <div class="col-md-5 col-xl-3 card-transit">
            <img src="./images/card-2.png" alt="" />
          </div>
          <div class="col-md-5 col-xl-3 card-transit">
            <img src="./images/card-3.png" alt="" />
          </div>
          <div class="col-md-5   col-xl-3 card-transit">
            <img src="./images/card-4.png" alt="" />
          </div>
        </div>
      </section>

    <div className='section-3'>
      <section className="row mb-4 gap-3">
        <div className="col-xl-6">
          <h2 className="fw-bold crimson-pro mb-5">What we have to offer?</h2>
          <img className='mb-2' src="./images/1txt.png" alt="" />
          <img className='mb-2' src="./images/2txt.png" alt="" />
          <img className='mb-2' src="./images/3txt.png" alt="" />
          <img src="./images/4txt.png" alt="" />
        </div>

        <img className='col h-md-25' src="./images/bg-sec3.png" alt="" />
      </section>

      <div class="d-grid gap-2 col-xl-6 col-md-12 mx-auto">
        <button class="get-started" type="button">
          <a className='a-2' href="#!">Get Started</a>
        </button>
      </div>
      </div>

      <section className="section-4">
        <h2 className="fw-bold crimson-pro mb-5">We've got the Experts you need</h2>
        <div class="row">
          <div className="col-xl col-sm-6 col-md card-logo">
            <img src="./images/brands/b1.png" alt="" />
          </div>
          <div className="col-xl col-sm-6 col-md card-logo">
            <img src="./images/brands/b2.png" alt="" />
          </div>
          <div className="col-xl col-sm-6 col-md card-logo">
            <img src="./images/brands/b3.png" alt="" />
          </div>
          <div className="col-xl col-sm-6 col-md card-logo">
            <img src="./images/brands/b4.png" alt="" />
          </div>
          <div className="col-xl col-sm-6 col-md card-logo">
            <img src="./images/brands/b5.png" alt="" />
          </div>
        </div>

        <div class="row">
          <div class="col-xl col-sm-6 col-md card-logo">
            <img src="./images/brands/b6.png" alt="" />
          </div>
          <div class="col-xl col-sm-6 col-md card-logo">
            <img src="./images/brands/b7.png" alt="" />
          </div>
          <div class="col-xl col-sm-6 col-md card-logo">
            <img src="./images/brands/b8.png" alt="" />
          </div>
          <div class="col-xl col-sm-6 col-md card-logo">
            <img src="./images/brands/b9.png" alt="" />
          </div>
          <div class="col-xl col-sm-6 col-md card-logo">
            <img src="./images/brands/b10.png" alt="" />
          </div>
        </div>
      </section>

      <div className="section-5">
        <section className="row section-5 mb-0 d-flex">
          <div className='col-xl-6'>
            <h4 className="fw-bold crimson-pro-black">Revolutionized Recruitment</h4>
            <img className='w-50 py-4' src="./images/ensure.png" alt="" />
            <img className='w-100' src="./images/down-ex.png" alt="" />
          </div>

          <img className='col' src="./images/sec5-img.png" alt="" />
        </section>

        <div class="d-grid gap-2 col-xl-6 col-md-12 mx-auto">
          <button class="get-started" type="button">
            <a className='a-2' href="#!">Get Started</a>
          </button>
        </div>
      </div>

      <section className='section-6 mb-5'>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active d-flex text-white gap-3 align-items-center">
              <img src="./images/carousel-image.png" className="d-block w-50" alt="..." />

              <div className="w-50 d-block align-items-center">
                <p className="d-flex justify-content-left gap-3">
                  <span className='fw-light rita'>Rita Walter, Chief Technology Officer</span>
                  <span className='text-dark'>|</span>
                  <span className='fw-bold text-dark'>XYZ Tech Solutions</span>
                </p>
                {/* <img src="./images/experts-re.png" alt="" /> */}
                <span className="carousel-text">
                  “The experts on RecruitAngle are the best of the best! They’ve made our hiring process smooth and we don’t need to vet candidates ourselves. This has been an amazing experience.”
                </span>
              </div>
              
            </div>

            <div className="carousel-item d-flex text-white gap-3 align-items-center">
              <img src="./images/carousel-image.png" className="d-block w-50" alt="..." />

              <div className="w-50 d-block align-items-center">
                <p className="d-flex justify-content-left gap-3">
                  <span className='fw-light rita'>Rita Walter, Chief Technology Officer</span>
                  <span className='text-dark'>|</span>
                  <span className='fw-bold text-dark'>XYZ Tech Solutions</span>
                </p>

                <span className="carousel-text">
                  “The experts on RecruitAngle are the best of the best! They’ve made our hiring process smooth and we don’t need to vet candidates ourselves. This has been an amazing experience.”
                </span>
              </div>
              
            </div>

            <div className="carousel-item d-flex text-white gap-3 align-items-center">
              <img src="./images/carousel-image.png" className="d-block w-50" alt="..." />

              <div className="w-50 d-block align-items-center">
                <p className="d-flex justify-content-left gap-3">
                  <span className='fw-light rita'>Rita Walter, Chief Technology Officer</span>
                  <span className='text-dark'>|</span>
                  <span className='fw-bold text-dark'>XYZ Tech Solutions</span>
                </p>

                <span className="carousel-text">
                  “The experts on RecruitAngle are the best of the best! They’ve made our hiring process smooth and we don’t need to vet candidates ourselves. This has been an amazing experience.”
                </span>
              </div>
              
            </div>
            
            
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="section-7 row mb-5 d-flex justify-content-center align-items-center">
        <div className="col-xl col-sm-6 col-md">
          {/* <img src="./images/as-a-recruiter.png" alt="" className='w-25 mb-2' /> */}
          <span className="recruit-text">As a Recruiter</span>
          <p className="relax-text">Relax, while we handle recruiting for you</p>
          {/* <img src="./images/relax.png" alt="" className="w-100 mb-3" /> */}
          {/* <button className='join-now'><a className='a-2' href="#!">Join now</a></button> */}
        </div>
        
        <img src="./images/unsplash.png" alt="" className="col-xl col-md" />
      </section>

      <section className="section-8">
        <h3 className="fw-bold crimson-pro">Featured Experts</h3>

        <div className="card-container">
          <div className="card text-center">
            <img src="./images/face.png" alt="" className="card-img" />
            <h5 className="card-title text-dark">Mr John Smith</h5>
            <span className='card-text mb-4'>Architectural Engineer</span>
            <button className='session'><a className='a-session' href="#!">Book a Session</a></button>
          </div>

          <div className="card text-center">
            <img src="./images/face.png" alt="" className="card-img" />
            <h5 className="card-title text-dark">Mr John Smith</h5>
            <span className='card-text mb-4'>Architectural Engineer</span>
            <button className='session'><a className='a-session' href="#!">Book a Session</a></button>
          </div>

          <div className="card text-center">
            <img src="./images/face.png" alt="" className="card-img" />
            <h5 className="card-title text-dark">Mr John Smith</h5>
            <span className='card-text mb-4'>Architectural Engineer</span>
            <button className='session'><a className='a-session' href="#!">Book a Session</a></button>
          </div>

          <div className="card text-center">
            <img src="./images/face.png" alt="" className="card-img" />
            <h5 className="card-title text-dark">Mr John Smith</h5>
            <span className='card-text mb-4'>Architectural Engineer</span>
            <button className='session'><a className='a-session' href="#!">Book a Session</a></button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home