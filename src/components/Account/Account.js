// eslint-disable-next-line 
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, getUserReviews } from "../../Redux/Actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Purchases from "../Purchases/Purchases";
import LoadingImg from '../../assets/Loading.gif'
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
  const orders = useSelector((store) => store.orderDetails);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    dispatch(getUserReviews(usr[0].user_id))
    dispatch(getOrderDetails(usr[0].user_id))
    setTimeout(() => {
      setLoading(!loading)
    }, 600)
    return () => {
      setLoading(true)
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usr])

  return (
    <div>

      {loading &&
        <div className='cmp-CardDetails-loading-container-profile'>
          < img className='cmp-CardDetails-loading-img' src={LoadingImg} alt="my-gif" />
        </div>}
      {
        !loading && <div className="account">



          <div className="account_container">
            <div className="user_container">
              <div className="user_card">
                <div className="user_image">
                  <img src={usr[0].user_img} alt="usr" />
                </div>
                <div className="user_description">
                  <h1 style={{ textAlign: "center" }}>{usr[0].user_name}</h1>
                  <p><FontAwesomeIcon icon={faEnvelope} />  {usr[0].user_email}</p>
                  <p><FontAwesomeIcon icon={faUser} />  {usr[0].roll}</p>
                </div>
              </div>

              <div className="user_options">
                <ul className='nav-menu'>
                  <li className={active === 'history-shops' ? 'nav-item-active' : 'nav-item'}>
                    <Link className="link" to="history-shops" onClick={() => setActive('history-shops')} ><FontAwesomeIcon icon={faUser} />  Purchases</Link>
                  </li>
                  <li className={active === 'favourites' ? 'nav-item-active' : 'nav-item'}>
                    <Link className="link" to="favourites" onClick={() => setActive('favourites')} ><FontAwesomeIcon icon={faUser} />  Favorites</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="content">
          <Outlet />
        </div> */}

          </div>

          <div className="cmp-account-container-purchases">
            {orders.map((e, i) => {
              return (
                <Purchases key={i} user={usr} data={e} />
              )
            })}
          </div>

        </div>
      }
    </div>

  );
};

export default Account;
