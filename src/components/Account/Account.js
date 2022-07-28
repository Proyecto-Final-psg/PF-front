// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, getUserReviews } from "../../Redux/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Purchases from "../Purchases/Purchases";
import LoadingImg from "../../assets/Loading.gif";
import mensaje from './mensaje.png';
import noOrders from './no_orders.png'
//import bag from "../../assets/bag.png";
// eslint-disable-next-line
/* import boy1 from "../../assets/boy1.png";
import boy2 from "../../assets/boy2.png"; */
// eslint-disable-next-line
//import Image from '../../assets/no_user_image.jpeg'
import "./Account.scss";
import Accordion from "react-bootstrap/Accordion";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Account = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  
  useEffect(() => {
      Aos.init({ 
          duration: 400,
          once: true,
       })
  }, [])
  
  const [active, setActive] = useState("history-shops");
  const usr = useSelector((store) => store.user);
  const orders = useSelector((store) => store.orderDetails);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getUserReviews(usr[0].user_id));
    dispatch(getOrderDetails(usr[0].user_id));
    setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usr]);

  return (
    <div>
      {loading && (
        <div className="cmp-CardDetails-loading-container-profile" >
          <img
            className="cmp-Account-loading-img"
            src={LoadingImg}
            alt="my-gif"
            style={{padding:"100px"}}
          />
        </div>
      )}
      {!loading && (
        <div className="account">
          <div className="account_container">
            <div className="user_container">
              <div className="user_card">
                <div className="user_image">
                  <img src={usr[0].user_img} alt="usr" />
                </div>
                <div className="user_description">
                  <h1 style={{ textAlign: "center" }}>{usr[0].user_name}</h1>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} /> {usr[0].user_email}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faUser} /> {usr[0].roll}
                  </p>
                </div>
              </div>

              <div className="user_options">
                <ul className="nav-menu">
                  <li
                    className={
                      active === "history-shops"
                        ? "nav-item-active"
                        : "nav-item"
                    }
                  >
                    <button
                      className="link"
                      onClick={() => setActive("history-shops")}
                    >
                      <FontAwesomeIcon icon={faUser} /> Purchases
                    </button>
                  </li>
                  <li
                    className={
                      active === "favourites" ? "nav-item-active" : "nav-item"
                    }
                  >
                    <button
                      className="link"
                      onClick={() => setActive("favourites")}
                    >
                      <FontAwesomeIcon icon={faUser} /> Favorites
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {active === "favourites" ? (
            <div className="cmp-account-container-purchases">
              <h1>Favorites</h1>
            </div>
          ) : (
            <div className="cmp-account-container-purchases mt-5">
              <h2 className="custom-title mb-5">Purchases</h2>
              {orders && orders.length > 0 ? orders.map((e, i) => {
                return (
                  <Accordion defaultActiveKey="1" data-aos="fade-left">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Order n° {i}
                        <img src={mensaje} id='cmp-account-mensaje' />
                        </Accordion.Header>
                      <Accordion.Body>
                        <Purchases key={i} user={usr} data={e} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                );
              })
            :
            <div style={{textAlign:"center"}}>
              <h4>You have no purchases</h4>
              <img src={noOrders} alt="no_order_icon" className="mt-5" />
            </div>
            }
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Account;
