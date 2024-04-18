import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
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
        <img src="./images/cards/card-1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/cards/card-2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/cards/card-3.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/cards/card-4.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/cards/card-5.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/cards/card-6.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/cards/card-7.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/cards/card-8.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/cards/card-9.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/cards/card-10.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};