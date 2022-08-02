import './carousel.scss'
import { Carousel } from '3d-react-carousal';
import React from 'react';


const Carousel2 = React.memo(()=>{
  let slides = [
    // <img src={one} alt="1" />,    
    <div className='banner-img' id='one'></div>,
    <div className='banner-img' id='two'></div>,
    <div className='banner-img' id='three'></div>,
    <div className='banner-img' id='four'></div>,
    <div className='banner-img' id='five'></div>
    // <img src={five} alt="5" />,
    // <img  src={two} alt="2" />,
    // <img src={three} alt="3" />,
    // <img src={six} alt="6" />,
    // <img src={four} alt="4" />,
  ]

  const callback = function (index) {
    // console.log("callback",index);
  }

  return <div className='carrusel'>
    <Carousel slides={slides} autoplay={true} interval={3000} onSlideChange={callback} />

  </div>

})

export default Carousel2