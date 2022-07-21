// eslint-disable-next-line 
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, getUserReviews } from "../../Redux/Actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import bag from "../../assets/bag.png";
// eslint-disable-next-line 
/* import boy1 from "../../assets/boy1.png";
import boy2 from "../../assets/boy2.png"; */
// eslint-disable-next-line 
//import Image from '../../assets/no_user_image.jpeg'
import "./Account.scss";
const Account = () => {
  const [active, setActive] = useState('history-shops')
  const usr = useSelector((store) => store.user);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrderDetails(usr[0].user_id))
    dispatch(getUserReviews(usr[0].user_id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usr])

  return (
    <div className="account">
      <div className="account_container">
        <div className="user_container">

          <div className="user_card">
            <div className="user_image">
              <img src={usr[0].user_img} alt="usr" />
            </div>
            <div className="user_description">
              <h1 style={{textAlign:"center"}}>{usr[0].user_name}</h1>
              <p><FontAwesomeIcon icon={faEnvelope} />  {usr[0].user_email}</p>
              <p><FontAwesomeIcon icon={faUser} />  {usr[0].roll}</p>
            </div>
          </div>

          <div className="user_options">
            <ul className='nav-menu'>
              <li className={active === 'history-shops' ? 'nav-item-active' : 'nav-item'}>
                <Link className="link" to="history-shops"  onClick={() => setActive('history-shops')} ><FontAwesomeIcon icon={faUser} />  Purchases</Link>
              </li>
              <li className={active === 'favourites' ? 'nav-item-active' : 'nav-item'}>
                <Link className="link" to="favourites"  onClick={() => setActive('favourites')} ><FontAwesomeIcon icon={faUser} />  Favorites</Link>
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
