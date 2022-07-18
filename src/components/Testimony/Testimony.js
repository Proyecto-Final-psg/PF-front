import React from 'react';
import "./Testimony.scss";
import Brand from "./Brand.png";

const Testimony = () => {
  return (
    <div>
      <h1 className="testimony-h1">TESTIMONIALS</h1>
      <div className="testimony">
        <div className="video-container">
        <img src={Brand} alt="brand" className='video-brand' />
          <label className="video-label">Elsa experience CBD</label>
        
          <video className="video-html" controls >
        
            <source src="https://cannabity.com/wp-content/uploads/2021/12/Francina-Colonques-Artritis-Articulaciones-Aceite-CBD-Cannabi-Cannabity-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-container">
          <img src={Brand} alt="brand" className='video-brand' />
          <label className="video-label">Depression CBD experience</label>
          <video className="video-html" controls >
            <source src="https://cannabity.com/wp-content/uploads/2021/04/Ansiedad-Estres-Luis-Palomeque-Empresa-Ofistema-Cannabity-1-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-container">
          <img src={Brand} alt="brand" className='video-brand' />
          <label className="video-label">Antrodesis experience</label>
          <video className="video-html" controls >
            <source src="https://cannabity.com/wp-content/uploads/2021/12/Ricardo-Soto-Aceite-CBD-Cannabi-Cannabity_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-container">
          <img src={Brand} alt="brand" className='video-brand' />
          <label className="video-label">Epilepsy CBD</label>
          <video className="video-html" controls >
            <source src="https://cannabity.com/wp-content/uploads/2021/03/Epilepsia-Carlos-Perez-Cannabity.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-container">
          <img src={Brand} alt="brand" className='video-brand' />
          <label className="video-label">Epilepsy CBD</label>
          <video className="video-html" controls >
            <source src="https://cannabity.com/wp-content/uploads/2022/03/Epilepsia-Leyre-Sanz-Mascota-Cancer-piel-Cardiopata-Prostatitis-Aceite-cbd-Cannabity.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
};
export default Testimony;
