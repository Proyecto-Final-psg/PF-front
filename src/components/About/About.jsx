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
        Aos.init({ 
            duration: 2000,
            once: true,
         })
    }, [])

    return <div>
        <div className="about">
                <h1 className='custom-title'>About Weedical</h1>
            <div className="about-video">
                <hr />
                <video width="600" height="400" controls>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <hr />
            <div className="team" style={{width:"100%", padding:"50px"}}>
            <h1 className='m-5'>Development Team</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus dolore nostrum reprehenderit aperiam eveniet, modi cumque voluptates vero. Adipisci nisi dignissimos alias unde. Laboriosam voluptates reiciendis repellendus voluptatum adipisci!</span>
              <div className="devs">
                <div data-aos="fade-up">
                    <DevCard img={juan} name='Juan Cataldo' />
                </div>

                <div data-aos="fade-down">
                    <DevCard img={gian} name='Gianfranco Gobbi'/>
                </div>

                <div data-aos="fade-up">
                    <DevCard img={martin} name='Martin Barreiro'/>
                </div>

                <div data-aos="fade-down">
                    <DevCard img={flor} name='Florencia Taburelli'/>                
                </div>

                <div data-aos="fade-up">
                    <DevCard img={rodrigo} name='Rodrigo Perez'/>
                </div>

                <div data-aos="fade-down">
                    <DevCard img={rami} name='Ramiro Grisales'/>
                </div>
            </div>  
            </div>
        </div>
    </div>
}