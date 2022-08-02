import './Logout.scss'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux';
import { cleanFavs } from '../../Redux/Actions'

const Logout = () => {
    const { logout } = useAuth0();
    const dispatch = useDispatch()

    function handleClick(e){
        e.preventDefault();
        logout({ returnTo: window.location.origin })
        dispatch(cleanFavs())
    }

    return (
        <button className='btn_logout' onClick={handleClick}>
            Logout
        </button>
    )

}

export default Logout