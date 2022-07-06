import './Login.scss'
import { useAuth0 } from '@auth0/auth0-react/dist/use-auth0'


const Login = () => {
    const { loginWithRedirect } = useAuth0()
    return (
        <button onClick={() => loginWithRedirect()}>
            Login
        </button>
    )

}

export default Login