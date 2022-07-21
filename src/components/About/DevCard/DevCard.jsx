import './DevCard.scss'
import linkedin from '../../../assets/linkedin.png'
import github from '../../../assets/github.png'

export function DevCard({img, name}) {
    return <div>

<div class="image-card" style={{backgroundImage:`url(${img})`,backgroundSize:"cover",backgroundPosition:"center"}}>
      {/* <img src={img} /> */}
      <h2>{name}</h2>
      <ul>
        <li><i class="fab fa-facebook-f"></i><span>Facebook</span></li>
        <li><i class="fab fa-twitter"></i><span>Twitter</span></li>
        <li><i class="fab fa-instagram"></i><span>Instagram</span></li>
        <li><i class="fab fa-youtube"></i><span>Youtube</span></li>
      </ul>
    </div>









        {/*         
        <div className="devcard">
            <div className="dev-info">
                <div className="devcard-title">
                    <span>Juan Manuel Cataldo</span>
                </div>
                <div className="dev">
                    <span>Frontend Developer</span>
                </div>
            <div className="dev-img">
                <img src={juan} alt="" />
            </div>
            </div>
        </div> */}
    </div>
}