import './LandingPage.scss'
import { NavLink } from 'react-router-dom'
const LandingPage = () => {
    return (
        <div>
            <h1>
                LANDING
            </h1>
            <NavLink to='./home'>Home</NavLink>
        </div>



    )
}

export default LandingPage