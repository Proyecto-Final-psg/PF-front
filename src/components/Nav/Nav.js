import { Link } from 'react-router-dom'
import Logo from './logo_navbar.png'
import Carrito from './carrito.png'
import { useAuth0 } from '@auth0/auth0-react'
import './Nav.scss'
import Logout from '../Logout/Logout'
import Profile from '../Profile/Profile'
import { useSelector } from 'react-redux'

const Nav = () => {
    const userRedux = useSelector(state => state.user)
    const { user, isAuthenticated, loginWithRedirect } = useAuth0()
    return (
        <div>
                 <Profile />
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <img className="navbar-brand-image" src={Logo}  alt="navbar-img"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* //////DEFINIR LINKS SEGUN ADMIN O USER /////// */}
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/products/create">Create Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/users">Users Role</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href={() => false}>Categories</a> */}
                            </li>
                            {
                                isAuthenticated ?
                                <li className="nav-item dropdown">
                                    <img src={user?.picture} alt={user.name} />
                                    <a className="nav-link dropdown-toggle" href='#' id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {user.name}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/account">Profile</Link></li>
                                        <li><Logout /></li>
                                    </ul>
                                </li>
                                :
                                <div className='sign'>
                                    <button className='btn_in' onClick={() => { loginWithRedirect() }}>Sign in</button>
                                    <button className='btn_up' onClick={() => { loginWithRedirect({ screen_hint: 'signup' }) }}>Sign up</button>
                                </div>
                            }
                            <li className="nav-item carrito">
                                <Link className="nav-link" to="#"><img src={Carrito} alt="alti1" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Nav