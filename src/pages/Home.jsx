import React from 'react'

const Home = () => {
  return (
    <div>
      <section className="d-flex justify-content-between align-items-center mb-5">
        <div className='w-50'>
          <img className='w-75 mb-3' src="./images/find.png" alt="" />
          <img className='w-50 mb-5' src="./images/interview.png" alt="" />
          <div class="input-group mb-5">
            <input type="text" class="form-control search-input" placeholder="Search for any service..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-outline-success" type="button" id="button-addon2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className='d-flex gap-2 pop'>
            <span className="fw-bold">Popular:</span>
            <button>Product Design</button>
            <button>Software Dev</button>
            <button>Data Analysis</button>
          </div>

        </div>

        <img className='w-50' src="./images/left-image.png" alt="" />
      </section>
      
      <section className='section-2 mb-5 container text-center'>
        <div class="row">
          <div class="col">
            <img src="./images/card-1.png" alt="" />
          </div>
          <div class="col">
            <img src="./images/card-2.png" alt="" />
          </div>
          <div class="col">
            <img src="./images/card-3.png" alt="" />
          </div>
          <div class="col">
            <img src="./images/card-4.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section-3 mb-5 gap-3 p-5 container d-flex justify-content-between align-items-center">
        <div className="w-50">
          <h3 className="fw-bold offers mb-5">What we have to offer?</h3>
          <img className='mb-2' src="./images/1txt.png" alt="" />
          <img className='mb-2' src="./images/2txt.png" alt="" />
          <img className='mb-2' src="./images/3txt.png" alt="" />
          <img src="./images/4txt.png" alt="" />
        </div>

        <img className='w-50 h-md-25' src="./images/bg-sec3.png" alt="" />
      </section>

      <section className="section-4 p-5 container">
        <h3 className="fw-bold offers mb-5">We've got the Experts you need</h3>
        <div class="row">
          <div class="col">
            <img src="./images/brands/b1.png" alt="" />
          </div>
          <div class="col">
            <img src="./images/brands/b2.png" alt="" />
          </div>
          <div class="col">
            <img src="./images/brands/b3.png" alt="" />
          </div>
          <div class="col">
            <img src="./images/brands/b4.png" alt="" />
          </div>
          <div class="col">
            <img src="./images/brands/b5.png" alt="" />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <img src="./images/brands/b6.png" alt="" />
          </div>
          <div class="col">
            <img src="./images/brands/b7.png" alt="" />
          </div>
          <div class="col">
            <img src="./images/brands/b8.png" alt="" />
          </div>
          <div class="col">
            <img src="./images/brands/b9.png" alt="" />
          </div>
          <div class="col">
            <img src="./images/brands/b10.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section-5 p-5 mb-5 container d-flex">
        <div className='w-50'>
          <h4 className="fw-bold text-white">Revolutionized Recruitment</h4>
          <img className='w-50 py-4' src="./images/ensure.png" alt="" />
          <img className='w-100' src="./images/down-ex.png" alt="" />
        </div>

        <img className='w-50' src="./images/sec5-img.png" alt="" />
      </section>
      
      <section className='mb-5 p-5 text-left'>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active d-flex text-white gap-3 align-items-center">
              <img src="./images/carousel-image.png" className="d-block w-50" alt="..." />

              <div className="w-50 d-block align-items-center text-center">
                <p className="d-flex justify-content-left gap-3">
                  <span className='fw-light rita'>Rita Walter, Chief Technology Officer</span>
                  <span className='text-dark'>|</span>
                  <span className='fw-bold text-dark'>XYZ Tech Solutions</span>
                </p>
                <img src="./images/experts-re.png" alt="" />
              </div>
              
            </div>

            <div className="carousel-item d-flex text-white gap-3 align-items-center">
              <img src="./images/carousel-image.png" className="d-block w-50" alt="..." />

              <div className="w-50 d-block align-items-center text-center">
                <p className="d-flex justify-content-left gap-3">
                  <span className='fw-light rita'>Rita Walter, Chief Technology Officer</span>
                  <span className='text-dark'>|</span>
                  <span className='fw-bold text-dark'>XYZ Tech Solutions</span>
                </p>
                <img src="./images/experts-re.png" alt="" />
              </div>
              
            </div>

            <div className="carousel-item d-flex text-white gap-3 align-items-center">
              <img src="./images/carousel-image.png" className="d-block w-50" alt="..." />

              <div className="w-50 d-block align-items-center text-center">
                <p className="d-flex justify-content-left gap-3">
                  <span className='fw-light rita'>Rita Walter, Chief Technology Officer</span>
                  <span className='text-dark'>|</span>
                  <span className='fw-bold text-dark'>XYZ Tech Solutions</span>
                </p>
                <img src="./images/experts-re.png" alt="" />
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
    </div>
  )
}

export default Home