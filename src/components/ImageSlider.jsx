import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css/navigation';
import 'swiper/css';

export default () => {
  return (
    <Swiper 
      id='swiper-container'
      modules={[Navigation, A11y]}
      spaceBetween={15}
      slidesPerView={3}
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
        <LazyLoadImage src="./images/cards/card-1.png" loading='lazy' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage src="./images/cards/card-2.png" loading='lazy' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage src="./images/cards/card-3.png" loading='lazy' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage src="./images/cards/card-4.png" loading='lazy' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage src="./images/cards/card-5.png" loading='lazy' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage src="./images/cards/card-6.png" loading='lazy' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage src="./images/cards/card-7.png" loading='lazy' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage src="./images/cards/card-8.png" loading='lazy' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage src="./images/cards/card-9.png" loading='lazy' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage src="./images/cards/card-10.png" loading='lazy' alt="" />
      </SwiperSlide>
    </Swiper>
  );
};