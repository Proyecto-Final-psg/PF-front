import './carousel.css'
import { useEffect } from 'react'
import one from '../../assets/1.jpg'

function Carousel(){
   

    return <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={one} className="d-block w-100" alt="..." />
      </div>
      {/* <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..." />
      </div> */}
    </div>
    <button id='carousel-btn' className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button id='carousel-btn' className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}
export default Carousel