// eslint-disable-next-line 
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Account.scss";
import bag from "../../assets/bag.png";
import { useAuth0 } from "@auth0/auth0-react";
// eslint-disable-next-line 
import boy1 from "../../assets/boy1.png";
import boy2 from "../../assets/boy2.png";
// eslint-disable-next-line 
import Footer from '../Footer/Footer.jsx'
import { getOrderDetails } from "../../Redux/Actions";
import Image from '../../assets/no_user_image.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { NavLink, Outlet } from 'react-router-dom'

const Account = () => {

  const [active, setActive] = useState('history-shops')

  const usr = useSelector((store) => store.user);
  //console.log('order detail',usr)
  // const history = useSelector(store => store.orderDetails)
  const { user } = useAuth0()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrderDetails(usr[0].user_id))
    console.log('order detail',usr[0])
    // dispatch(getOrderDetails(1))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usr])


  return (
    <div className="account">
      <div className="account_container">
        <div className="user_container">

          <div className="user_card">
            <div className="user_image">
              <img src={usr[0].user_img} />
            </div>
            <div className="user_description">
              <h1>{usr[0].user_name}</h1>
              <p><FontAwesomeIcon icon={faEnvelope} />  {usr[0].user_email}</p>
              <p><FontAwesomeIcon icon={faUser} />  {usr[0].roll}</p>
            </div>
          </div>

          <div className="user_options">
            <ul className='nav-menu'>
              <li className={active === 'history-shops' ? 'nav-item-active' : 'nav-item'}>
                <Link className="link" to="history-shops"  onClick={() => setActive('history-shops')} ><FontAwesomeIcon icon={faUser} />  history</Link>
              </li>
              <li className={active === 'favourites' ? 'nav-item-active' : 'nav-item'}>
                <Link className="link" to="favourites"  onClick={() => setActive('favourites')} ><FontAwesomeIcon icon={faUser} />  favourites</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
            <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Account;
