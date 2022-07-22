import './DevCard.scss'
import linkedin from '../../../assets/linkedin.png'
import github from '../../../assets/github.jpg'

export function DevCard({ img, name }) {
    return <div>

        <div className="image-card" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <h2>{name}</h2>
            <ul className='ul'>
                <li className='li'>
                    <img src={github} alt="" />
                </li>
                <li className='li' style={{ backgroundColor: "rgb(84, 189, 189)" }}>
                    <img src={linkedin} alt="" />
                </li>
            </ul>
        </div>
    </div>
}