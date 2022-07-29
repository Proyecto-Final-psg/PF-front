import './carousel.css'
import {Carousel} from '3d-react-carousal';
import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'
import four from '../../assets/4.jpg'

function Carousel2(){

  let slides = [
    <img  src={one} alt="1" />,
    <img  src={two} alt="2" />,
    <img  src={three} alt="3" />,
    <img  src={four} alt="4" />
  ]

  const callback = function(index){
    console.log("callback",index);
}
    
   return <div className='mt-5'>
    <Carousel slides={slides} autoplay={true} interval={3000} onSlideChange={callback}/>
   </div>
  //   return <div id="carouselExampleFade" className="carousel slide carousel-fade mt-4" data-bs-ride="carousel">
  //   <div className="carousel-inner">
  //     <div className="carousel-item active">
  //       <img src={one} className="d-block w-100" alt="..." />
  //     </div>
  //     <div className="carousel-item">
  //       <img src={two} className="d-block w-100" alt="..." />
  //     </div>
  //     <div className="carousel-item">
  //       <img src={three} className="d-block w-100" alt="..." />
  //     </div>
  //     <div className="carousel-item">
  //       <img src={four} className="d-block w-100" alt="..." />
  //     </div>
  //   </div>
  //   <button id='carousel-btn' className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
  //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //     <span className="visually-hidden">Previous</span>
  //   </button>
  //   <button id='carousel-btn' className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
  //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //     <span className="visually-hidden">Next</span>
  //   </button>
  // </div>
}
export default Carousel2