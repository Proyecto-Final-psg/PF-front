import './About.scss'
import video from '../../assets/weedical.mp4'
import { DevCard } from './DevCard/DevCard'
import juan from '../../assets/devs/juano.jpeg'
import gian from '../../assets/devs/gian.jpeg'
import martin from '../../assets/devs/martin.jpeg'
import flor from '../../assets/devs/flor.jpeg'

export function About() {
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
            <div className="team" style={{width:"100%"}}>
            <h1 className='m-5'>Development Team</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus dolore nostrum reprehenderit aperiam eveniet, modi cumque voluptates vero. Adipisci nisi dignissimos alias unde. Laboriosam voluptates reiciendis repellendus voluptatum adipisci!</span>
              <div className="devs">
                <DevCard img={juan} name='Juan Cataldo' />
                <DevCard img={gian} name='Gianfranco Gobbi'/>
                <DevCard img={martin} name='Martin Barreiro'/>
                <DevCard img={flor} name='Florencia Taburelli'/>                
                <DevCard img={flor} name='Ramiro Grisales'/>
                <DevCard img={flor} name='Rodrigo Perez'/>
            </div>  
            </div>
        </div>
    </div>
}