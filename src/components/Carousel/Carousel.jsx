import './carousel.scss'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import 'swiper/css/effect-fade';

const Carousel2 = React.memo(() => {
  SwiperCore.use([Autoplay]);

  return <div className='carrusel'>
    <Swiper className='mySwiper'
      modules={[Navigation, Pagination, A11y, EffectFade]}
      autoplay={{ delay: 3000 }}
      effect="fade"
    >
      <SwiperSlide>  <img src={image1} alt="Product pic" />     </SwiperSlide>
      <SwiperSlide> <img src={image2} alt="Product pic" />   </SwiperSlide>
      <SwiperSlide> <img src={image3} alt="Product pic" />   </SwiperSlide>
      <SwiperSlide> <img src={image4} alt="Product pic" />   </SwiperSlide>
    </Swiper>

  </div>

})

export default Carousel2