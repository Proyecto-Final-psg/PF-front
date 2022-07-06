import './Login.scss'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { loginWithRedirect } = useAuth0()
    const Navigate = useNavigate()
    return (
        <button onClick={() => { loginWithRedirect() }}>
            Login
        </button>
    )
}

export default Login