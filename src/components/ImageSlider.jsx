import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css/navigation';
import 'swiper/css';
import '../css/img-slider.css'

export default () => {
  return (
    <Swiper 
      id='swiper-container'
      modules={[Navigation, A11y]}
      spaceBetween={15}
      slidesPerView={3}
      navigation
      
    breakpoints={{
        350: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
        375: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
        412: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
        500: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 10,
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 15,
        },
    }}
    > 
      <SwiperSlide className='imgslider-card1'>
        <h2 className="slider-headtext">Personalized Growth Plan & Continuous Review</h2>
        <p className='slider-subtext'>
          Choose your field or role, develop a plan with an expert serving as your coach and continuously review it.
        </p>
      </SwiperSlide>
      <SwiperSlide className='imgslider-card2'>
        <h2 className="slider-headtext">Unlimited Coaching Hub</h2>
        <p className="slider-subtext">
          Accelerate your performance from hand-holding sessions with top experts in your field or role.
        </p>
      </SwiperSlide>
      <SwiperSlide className='imgslider-card3'>
        <h2 className="slider-headtext">On-demand interraction with experts/coaches</h2>
        <p className="slider-subtext">
          Do you have a burning question or issue to resolve? Sort it!
        </p>
      </SwiperSlide>
      <SwiperSlide className='imgslider-card4'>
        <h2 className="slider-headtext">One-on-One interview with Expert for Preparation</h2>
        <p className="slider-subtext">
          Do you have an upcoming intrview? Let our expert conduct a thorough interview on you for maximum performance out there!
        </p>
      </SwiperSlide>

      {/* 2nd set */}
      <SwiperSlide className='imgslider-card2'>
        <h2 className="slider-headtext">Unlimited Coaching Hub</h2>
        <p className="slider-subtext">
          Accelerate your performance from hand-holding sessions with top experts in your field or role.
        </p>
      </SwiperSlide>
      <SwiperSlide className='imgslider-card1'>
        <h2 className="slider-headtext">Personalized Growth Plan & Continuous Review</h2>
        <p className='slider-subtext'>
          Choose your field or role, develop a plan with an expert serving as your coach and continuously review it.
        </p>
      </SwiperSlide>
      <SwiperSlide className='imgslider-card3'>
        <h2 className="slider-headtext">On-demand interraction with experts/coaches</h2>
        <p className="slider-subtext">
          Do you have a burning question or issue to resolve? Sort it!
        </p>
      </SwiperSlide>
      <SwiperSlide className='imgslider-card4'>
        <h2 className="slider-headtext">One-on-One interview with Expert for Preparation</h2>
        <p className="slider-subtext">
          Do you have an upcoming intrview? Let our expert conduct a thorough interview on you for maximum performance out there!
        </p>
      </SwiperSlide>
    </Swiper>
  );
};