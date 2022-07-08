import './carousel.css'
import { useEffect } from 'react'
import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'

function Carousel(){
   

    return <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={one} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={two} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={three} className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}
export default Carousel