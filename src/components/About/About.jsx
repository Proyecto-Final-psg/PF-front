import './About.scss'
import video from '../../assets/weedical.mp4'

export function About() {
    return <div>
        <div className="about">
            <h1>About Weedical</h1>
            <hr />
            <video width="600" height="400" controls>
                <source src={video} type="video/mp4" />
            </video>
            <hr />
            <h1>Our Team</h1>
            <hr />
            <div className="team">
                <div className="containerq">
                    <div className="card_boxq">
                        <span></span>
                    </div>
                </div>

                <div className="containerq">
                    <div className="card_boxq">
                        <span></span>
                    </div>
                </div>

                <div className="containerq">
                    <div className="card_boxq">
                        <span></span>
                    </div>
                </div>

                 <div className="containerq">
                    <div className="card_boxb">
                        <span></span>
                    </div>
                </div>

                <div className="containerq">
                    <div className="card_boxb">
                        <span></span>
                    </div>
                </div>

                <div className="containerq">
                    <div className="card_boxb">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}