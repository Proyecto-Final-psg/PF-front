import { Link } from 'react-router-dom'
import Logo from './logo_navbar.png'
import Carrito from './carrito.png'
import noImage from '../.././assets/no_user_image.jpeg'
import { useAuth0 } from '@auth0/auth0-react'
import './Nav.scss'
import Profile from '../Profile/Profile'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faUser, faSignal, faUsers, faArrowRightFromBracket, faCannabis } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [nav, setNav] = useState('')
    const userRedux = useSelector(state => state.user[0])
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()

    const handleMenu = (e) => {
        e.preventDefault()
        if (nav === '') setNav('is-active')
        else setNav('')
    }

    var admin = userRedux.roll === "admin" || userRedux.roll === "super-admin"
    return (
        <div>
            <Profile/>
            <nav className="navbar is-light is-fixed-top nav" role="navigation" aria-label="main navigation">
                <div className="navbar-brand logo_container">
                    <Link className="brand" to="/home">
                        <img src={Logo} />
                    </Link>

                    <a role="button" className={`navbar-burger ${nav}`} onClick={handleMenu} aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>


                    <div className={`menu-resp ${nav}`}>
                        <div className="navbar-dropdown sidebar">
                            {
                                admin &&
                                <>
                                    <div className='item'>
                                        <Link className="navbar-item" to="/products/create">
                                            Create product
                                        </Link>
                                        <FontAwesomeIcon icon={faScrewdriverWrench} />
                                    </div>
                                    <div className='item'>
                                        <Link className="navbar-item" to="/users">
                                            User role
                                        </Link>
                                        <FontAwesomeIcon icon={faUsers} />
                                    </div>
                                    <div className='item'>
                                        <Link className="navbar-item" to="/metrics">
                                            Admin panel
                                        </Link>
                                        <FontAwesomeIcon icon={faSignal} />
                                    </div>
                                </>
                            }
                            <div className='item'>
                                <Link className="navbar-item" to="#">
                                    About
                                </Link>
                                <FontAwesomeIcon icon={faCannabis} />
                            </div>
                            <div className='item'>
                                <Link className="navbar-item" to="/account">
                                    Profile
                                </Link>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <hr className="navbar-divider" />
                            <div className='item'>
                                <a className="navbar-item" onClick={() => logout({ returnTo: window.location.origin })}>
                                    Log out
                                </a>
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            </div>

                        </div>
                    </div>

                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                   
                    <div className="navbar-start">
                        {
                            admin &&
                            <>
                                <Link className="navbar-item" to="/products/create">
                                    Create product
                                </Link>

                                {/* <Link className="navbar-item" to="/users">
                                    User role
                                </Link> */}
                                <Link className="navbar-item" to="/metrics">
                                    Admin panel
                                </Link>
                            </>
                        }
                        <Link className="navbar-item" to="#">
                            About
                        </Link>
                    </div>

                    <div className="navbar-end user_dropdown">
                        {
                            isAuthenticated ?
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link avatar">
                        
                                        <img src={userRedux.user_img ? userRedux.user_img : noImage} alt='user' />
                                        <p>{userRedux.user_name}</p>
                                    </a>

                                    <div className="navbar-dropdown">
                                        <Link className="navbar-item" to="/account">
                                            Profile
                                        </Link>
                                        <hr className="navbar-divider" />
                                        <a className="navbar-item" onClick={() => logout({ returnTo: window.location.origin })}>
                                            Log out
                                        </a>
                                    </div>
                                </div>
                                :
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <button className="btn_in" onClick={() => { loginWithRedirect() }}>
                                            Sign in
                                        </button>
                                        <button className="btn_up" onClick={() => { loginWithRedirect({ screen_hint: 'signup' }) }}>
                                            <strong className='has-text-white'>Sign up</strong>
                                        </button>
                                    </div>
                                </div>
                        }

                        <Link className="navbar-item carrito" to="/cart"><img src={Carrito} alt="cart" /></Link>

                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Nav
