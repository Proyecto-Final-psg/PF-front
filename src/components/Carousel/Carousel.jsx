import './carousel.scss'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper';

import 'swiper/css/effect-fade';

const Carousel2 = React.memo(() => {
  SwiperCore.use([Autoplay]);

  return <div className='carrusel'>
    <Swiper className='mySwiper'
      modules={[Navigation, Pagination, A11y, EffectFade]}
      autoplay={{ delay: 4000 }}
      effect="fade">
      <SwiperSlide>
        <div className='banner-img' id='one' ></div>
        {/* <img src={image1} alt="Product pic" /> */}
      </SwiperSlide>
      <SwiperSlide>
        <div className='banner-img' id='two' ></div>
        {/* <img src={image1} alt="Product pic" /> */}
      </SwiperSlide>
      <SwiperSlide>
        <div className='banner-img' id='three' ></div>
        {/* <img src={image1} alt="Product pic" /> */}
      </SwiperSlide>
      <SwiperSlide>
        <div className='banner-img' id='four' ></div>
        {/* <img src={image1} alt="Product pic" /> */}
      </SwiperSlide>
      <SwiperSlide>
        <div className='banner-img' id='five' ></div>
        {/* <img src={image1} alt="Product pic" /> */}
      </SwiperSlide>

      {/* <SwiperSlide>  <img src={image6} alt="Product pic" />     </SwiperSlide>
      <SwiperSlide> <img src={image2} alt="Product pic" />   </SwiperSlide>
      <SwiperSlide> <img src={image3} alt="Product pic" />   </SwiperSlide>
      <SwiperSlide> <img src={image5} alt="Product pic" />   </SwiperSlide>
      <SwiperSlide> <img src={image4} alt="Product pic" />   </SwiperSlide> */}
    </Swiper>

  </div>

})

export default Carousel2