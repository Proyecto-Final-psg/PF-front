import './LandingPage.scss'
import Logout from '../Logout/Logout'
import Login from '../Login/Login'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

const LandingPage = () => {
    useEffect(() => {
        if (isAuthenticated) {
            Navigate('./home')
        }
    })
    const { user, isAuthenticated, isLoading } = useAuth0()
    const Navigate = useNavigate()
    return (
        <div>
            <h1>
                LANDING PAGE
            </h1>
            <Login />
            <NavLink to='./home'>Guest</NavLink>
            {console.log(isAuthenticated)}
        </div>
    )
}
export default LandingPage