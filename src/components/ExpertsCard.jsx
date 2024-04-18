import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

export default () => {
  return (
    <Swiper 
      className="card-container"
      modules={[Navigation, A11y]}
      spaceBetween={15}
      slidesPerView={4}
      navigation
      
    breakpoints={{
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
        slidesPerView: 3,
        spaceBetween: 10,
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 15,
        },
    }}
    >
      <SwiperSlide>
        <div className="card text-center">
          <img src="./images/face.png" alt="" className="card-img" />
          <h5 className="card-title text-dark">Mr John Smith</h5>
          <span className='card-text mb-4'>Architectural Engineer</span>
          <button className='session'><a className='a-session' href="#!">Book a Session</a></button>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="card text-center">
           <img src="./images/face.png" alt="" className="card-img" />
           <h5 className="card-title text-dark">Mr John Smith</h5>
           <span className='card-text mb-4'>Architectural Engineer</span>
           <button className='session'><a className='a-session' href="#!">Book a Session</a></button>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="card text-center">
           <img src="./images/face.png" alt="" className="card-img" />
           <h5 className="card-title text-dark">Mr John Smith</h5>
           <span className='card-text mb-4'>Architectural Engineer</span>
           <button className='session'><a className='a-session' href="#!">Book a Session</a></button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card text-center">
          <img src="./images/face.png" alt="" className="card-img" />
          <h5 className="card-title text-dark">Mr John Smith</h5>
          <span className='card-text mb-4'>Architectural Engineer</span>
          <button className='session'><a className='a-session' href="#!">Book a Session</a></button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card text-center">
          <img src="./images/face.png" alt="" className="card-img" />
          <h5 className="card-title text-dark">Mr John Smith</h5>
          <span className='card-text mb-4'>Architectural Engineer</span>
          <button className='session'><a className='a-session' href="#!">Book a Session</a></button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card text-center">
          <img src="./images/face.png" alt="" className="card-img" />
          <h5 className="card-title text-dark">Mr John Smith</h5>
          <span className='card-text mb-4'>Architectural Engineer</span>
          <button className='session'><a className='a-session' href="#!">Book a Session</a></button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};