import './Login.scss'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <button className="landing-button" onClick={() => { loginWithRedirect() }}>
            Login
        </button>
    )
}
export default Login

