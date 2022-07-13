import { Link } from 'react-router-dom'
import Logo from './logo_navbar.png'
import Carrito from './carrito.png'
import { useAuth0 } from '@auth0/auth0-react'
import './Nav.scss'
import Logout from '../Logout/Logout'
import Profile from '../Profile/Profile'
import { useSelector } from 'react-redux'

const Nav = () => {
    const userRedux = useSelector(state => state.user[0])
    const { user, isAuthenticated, loginWithRedirect } = useAuth0()
    var admin = userRedux.roll === "admin" || userRedux.roll === "super-admin"
    return (
        <div>
            {/* <Profile />
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <img className="navbar-brand-image" src={Logo} alt="navbar-img" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {
                                admin && 
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/products/create">Create Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/users">Users Role</Link>
                                    </li>
                                </>
                            }
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
                                <Link className="nav-link" to="/cart"><img src={Carrito} alt="alti1" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar is-light has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand logo_container">
                    <Link className="brand" to="/home">
                        <img src={Logo} />
                    </Link>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    {console.log(userRedux)}
                    {
                        admin &&
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/products/create">
                                Create product
                            </Link>

                            <Link className="navbar-item" to="/users">
                                Users role
                            </Link>
                        </div>
                    }

                    <div className="navbar-end user_dropdown">
                        {
                            isAuthenticated ?
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link avatar">
                                        <img src={user.picture} alt='user' />
                                        <p>{user.name}</p>
                                    </a>

                                    <div className="navbar-dropdown">
                                        <Link className="navbar-item" to="/account">
                                            Profile
                                        </Link>
                                        <hr className="navbar-divider" />
                                        <a className="navbar-item">
                                            <Logout />
                                        </a>
                                    </div>
                                </div>
                                :
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <button className="button is-secondary" onClick={() => { loginWithRedirect() }}>
                                            Sign in
                                        </button>
                                        <button className="button is-primary" onClick={() => { loginWithRedirect({ screen_hint: 'signup' }) }}>
                                            <strong>Sign up</strong>
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