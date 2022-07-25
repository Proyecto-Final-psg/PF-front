import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faUser, faSignal, faArrowRightFromBracket, faCannabis, faUserPlus, faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import Logo from './logo2.png'
import Carrito from './carrito.png'
import noImage from '../.././assets/no_user_image.jpeg'
import './Nav.scss'
const Nav = () => {
    const [nav, setNav] = useState('')
    const userRedux = useSelector(state => state.user[0])
    const productscart = useSelector(state => state.cart)
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()

    const handleMenu = (e) => {
        e.preventDefault()
        if (nav === '') setNav('is-active')
        else setNav('')
    }
    let admin = userRedux.roll === "admin" || userRedux.roll === "super-admin"
    let isUser = userRedux.roll === 'user'

    return (
        <div>
            <nav className="navbar is-light is-fixed-top nav" role="navigation" aria-label="main navigation">
                <div className="navbar-brand logo_container">
                    <Link className="brand" to="/home">
                        <img src={Logo} alt="#" />
                    </Link>
                    <div role="button" className={`navbar-burger ${nav}`} onClick={handleMenu} aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
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
                            {
                                admin || isUser ?
                                <div className='item'>
                                    <Link className="navbar-item" to="/account">
                                        Profile
                                    </Link>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                : null
                            }
                            <hr className="navbar-divider" />
                            {
                                isAuthenticated ?
                                    <div className='item'>
                                        <div className="navbar-item" onClick={() => logout({ returnTo: window.location.origin })}>
                                            Log out
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                    </div>
                                    :
                                    <>
                                        <div className='item'>
                                            <div className="navbar-item in" onClick={() => { loginWithRedirect() }}>
                                                Sign in
                                            </div>
                                            <FontAwesomeIcon icon={faChalkboardUser} />
                                        </div>
                                        <div className='item'>
                                            <div className="navbar-item has-text-white up" onClick={() => { loginWithRedirect({ screen_hint: 'signup' }) }}>
                                                Sign up
                                            </div>
                                            <FontAwesomeIcon icon={faUserPlus} />
                                        </div>
                                    </>
                            }

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
                                <Link className="navbar-item" to="/metrics">
                                    Admin panel
                                </Link>
                            </>
                        }
                        <Link className="navbar-item" to="/about">
                            About
                        </Link>
                    </div>

                    <div className="navbar-end user_dropdown">
                        {
                            isAuthenticated ?
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <div className="navbar-link avatar">
                                        <img src={user.picture ? user.picture : noImage} alt='user' />
                                        <p>{userRedux.user_name}</p>
                                    </div>
                                    <div className="navbar-dropdown">
                                        <Link className="navbar-item" to="/account">
                                            Profile
                                        </Link>
                                        <hr className="navbar-divider" />
                                        <div className="navbar-item click" onClick={() => logout({ returnTo: window.location.origin })}>
                                            Log out
                                        </div>
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

                    </div>

                </div>
                <div className="carrito-container" >
                    <Link className="navbar-item carrito" to="/cart"><img src={Carrito} alt="cart" />  {(productscart.length > 0) && <div className="navbar-item-carrito_count">{productscart.length}</div>}</Link>
                </div>
            </nav>
        </div>
    )

}

export default Nav
