import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css/navigation';
import 'swiper/css';
import '../css/carousel.css'

const Carousel = () => {
  return (
    <Swiper 
      id='swiper-container'
      modules={[Navigation, A11y]}
      spaceBetween={15}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide className='carousel-slider d-block d-xl-flex align-items-center gap-3'>
        <LazyLoadImage src="./images/carousel-image.png" className="d-block w-100 w-xl-50" loading='lazy' alt="..." />

        <div className="w-100 w-xl-50 d-block align-items-center">
            <p className="d-flex justify-content-left gap-3">
                <span className='fw-light rita'>Rita Walter, Chief Technology Officer</span>
                <span className='text-dark btw'>|</span>
                <span className='fw-bold text-dark company-carousel-text'>XYZ Tech Solutions</span>
            </p>
            
            <span className="carousel-text">
                “The experts on RecruitAngle are the best of the best! They’ve made our hiring process smooth and we don’t need to vet candidates ourselves. This has been an amazing experience.”
            </span>
        </div>
      </SwiperSlide>

      <SwiperSlide className='carousel-slider d-block d-xl-flex align-items-center gap-3'>
        <LazyLoadImage src="./images/carousel-image.png" className="d-block w-100 w-xl-50" loading='lazy' alt="..." />

        <div className="w-100 w-xl-50 d-block align-items-center">
            <p className="d-flex justify-content-left gap-3">
                <span className='fw-light rita'>Rita Walter, Chief Technology Officer</span>
                <span className='text-dark btw'>|</span>
                <span className='fw-bold text-dark company-carousel-text'>XYZ Tech Solutions</span>
            </p>
            
            <span className="carousel-text">
                “The experts on RecruitAngle are the best of the best! They’ve made our hiring process smooth and we don’t need to vet candidates ourselves. This has been an amazing experience.”
            </span>
        </div>
      </SwiperSlide>

      <SwiperSlide className='carousel-slider d-block d-xl-flex align-items-center gap-3'>
        <LazyLoadImage src="./images/carousel-image.png" className="d-block w-100 w-xl-50" loading='lazy' alt="..." />

        <div className="w-100 w-xl-50 d-block align-items-center">
            <p className="d-flex justify-content-left gap-3">
                <span className='fw-light rita'>Rita Walter, Chief Technology Officer</span>
                <span className='text-dark btw'>|</span>
                <span className='fw-bold text-dark company-carousel-text'>XYZ Tech Solutions</span>
            </p>
            
            <span className="carousel-text">
                “The experts on RecruitAngle are the best of the best! They’ve made our hiring process smooth and we don’t need to vet candidates ourselves. This has been an amazing experience.”
            </span>
        </div>
      </SwiperSlide>
      
    </Swiper>
  )
}

export default Carousel