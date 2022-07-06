import './Logout.scss'
import { useAuth0 } from '@auth0/auth0-react'

const Logout = () => {
    const { Logout } = useAuth0()
    return (
        <button onClick={() => Logout({ returnTo: window.location.origin })}>
            Logout
        </button>
    )

}

export default Logout