import './About.scss'
import video from '../../assets/weedical.mp4'
export function About() {
    return <div>
        <div className="about">
            <video width="600" height="400" autoplay controls>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    </div>
}