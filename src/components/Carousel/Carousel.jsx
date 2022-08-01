import './carousel.css'
import { Carousel } from '3d-react-carousal';
import one from '../../assets/1.jpg'
// import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'
import four from '../../assets/4.jpg'
import five from '../../assets/5.jpg'
import six from '../../assets/6.jpg'

function Carousel2() {

  let slides = [
    <img src={one} alt="1" />,
    <img src={five} alt="5" />,
    // <img  src={two} alt="2" />,
    <img src={three} alt="3" />,
    <img src={six} alt="6" />,
    <img src={four} alt="4" />,
  ]

  const callback = function (index) {
    // console.log("callback",index);
  }

  return <div className='mt-5'>
    <Carousel slides={slides} autoplay={true} interval={3000} onSlideChange={callback} />

  </div>
}
export default Carousel2