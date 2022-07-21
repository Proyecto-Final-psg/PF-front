import './DevCard.scss'
import linkedin from '../../../assets/linkedin.png'
import github from '../../../assets/github.png'

export function DevCard({img, name}) {
    return <div>


        {/* <h1>Dev Team</h1> */}
        <ul className='ul'>
            <li class="booking-card" style={{ backgroundImage: `url(${img})` }}>
                <div class="book-container">
                    {/* <div class="content">
                        <button class="btn">Linkedin</button>
                        <button class="btn">GitHub</button>
                    </div> */}
                </div>
                <div class="informations-container">
                    <h2 class="title">{name}</h2>
                    <p class="sub-title">Fullstack Developer</p>
                    {/* <p class="price"><svg class="icon" style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                    </svg>De 0 à 15 €</p> */}
                    <div class="more-information">
                        <div class="info-and-date-container">
                            <div class="box info">
                                <svg class="icon" style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                                    {/* <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /> */}
                                </svg>
                                <p>
                                    <button class="btn">
                                        <img src={linkedin} alt="" />
                                    </button>
                                    <button class="btn">
                                        <img src={github} alt="" />
                                    </button>
                                </p>
                            </div>
                           
                        </div>
                        {/* <p class="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p> */}
                    </div>
                </div>
            </li>


        </ul>









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