import './DevCard.scss'
import linkedin from '../../../assets/linkedin.png'
import github from '../../../assets/github.jpg'

export function DevCard({ img, name, link, git }) {
    return <div>

        <div className="image-card" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <h2>{name}</h2>
            <ul className='ul'>
                <li className='li'>
                    <a href={git} target="_blank" rel="noreferrer">
                        <img src={github} alt="" />
                    </a>
                </li>
                <li className='li' style={{ backgroundColor: "rgb(84, 189, 189)" }}>
                    <a href={link} target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
}