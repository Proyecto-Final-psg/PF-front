import './About.scss'
import video from '../../assets/weedical.mp4'
import { DevCard } from './DevCard/DevCard'
import juan from '../../assets/devs/juano.jpeg'
import gian from '../../assets/devs/gian.jpeg'
import martin from '../../assets/devs/martin.jpeg'
import flor from '../../assets/devs/flor.jpeg'
import rodrigo from '../../assets/devs/rodrigo.jpeg'
import rami from '../../assets/devs/rami.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export function About() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {
        Aos.init({ 
            duration: 2000,
            once: true,
         })
    }, [])

    return <div>
        <div className="about">
        <h1 className="mt-5 custom-title">About us</h1>
                {/* <h1 className='custom-title'>About Weedical</h1> */}
                {/* <img src={logo} alt="" id='logo' /> */}
            <div className="about-video">
                <hr />
                <video width="600" height="400" controls>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <hr />
            <div className="team" style={{width:"100%", padding:"50px"}}>
            <h1 className='m-5'>Development Team 🚀</h1>
            <span>We are Weedical! We are six fullstack developers and this is our final bootcamp project. We've been working on this for a whole month, with 3 frontend developers and 3 backend developers. Henry's bootcamp was a great experience, and we are grateful for it.</span>
              <div className="devs">
                <div data-aos="fade-up">
                    <DevCard img={juan} name='Juan Cataldo' link={'https://www.linkedin.com/in/juanocataldo/'} git={'https://github.com/juanocataldo'} />
                </div>

                <div data-aos="fade-down">
                    <DevCard img={gian} name='Gianfranco Gobbi' link={'https://www.linkedin.com/in/gianfranco-gobbi'} git={'https://github.com/GianfrancoGobbi'} />
                </div>

                <div data-aos="fade-up">
                    <DevCard img={martin} name='Martin Barreiro'/>
                </div>

                <div data-aos="fade-down">
                    <DevCard img={flor} name='Florencia Taburelli' link={'https://www.linkedin.com/in/florencia-taburelli/'} git={'https://github.com/FlorenciaTaburelli'}  />                
                </div>

                <div data-aos="fade-up">
                    <DevCard img={rodrigo} name='Rodrigo Perez' link={'https://www.linkedin.com/in/rodrigo-perez-54073314b'} git={'https://github.com/rodrigo0109'} />
                </div>

                <div data-aos="fade-down">
                    <DevCard img={rami} name='Ramiro Grisales' link={'https://www.linkedin.com/in/rami-grisales-62a086239/'} git={'https://github.com/orimarselasirg'} />
                </div>
            </div>  
            </div>
        </div>
    </div>
}