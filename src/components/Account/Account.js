import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Profile from "../Profile/Profile";
import "./Account.scss";
import bag from "../../assets/bag.png";
import { useAuth0 } from "@auth0/auth0-react";
import boy1 from "../../assets/boy1.png";
import boy2 from "../../assets/boy2.png";
import Footer from '../Footer/Footer.jsx'

const Account = () => {
  const usr = useSelector((store) => store.user);
  useEffect(() => {
    console.log(user);
  }, [usr]);

  const { user } = useAuth0();
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="a">
      <Profile />
      <div className="container usrContainer">
        <div className="row inf">
          <div className="account">
            <h2 className="m-2">Account</h2>
            {/* <img src={boy2} alt="" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
            </svg>
          </div>
          <hr />
          <div className="col-sm-4">
            <div className="user-profile">
            
              <div className="cardAcc">
                <div className="card-image">
                  {user && user.picture 
                  ?
                  <img src={user.picture} alt='profile pic' />
                  :
                  <img src={boy2} alt='profile pic' />
                  }
                  {/* <img src={boy2} alt=""  /> */}
                </div>
                <div class="category"> {usr[0] && usr[0].user_name} </div>
                <div class="heading">
                  <span>{usr[0] && usr[0].user_email}</span>
                  {user && user.email_verified ? (
                    <>
                      <span>Account Verified</span>
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "green" }}
                      >
                        verified
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Account Not Verified</span>
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "red" }}
                      >
                        warning
                      </span>
                    </>
                  )}
                  <div class="author">
                    <span>Rol: {usr[0] && usr[0].roll}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-8 mb-5">
            <div className="user-history">
              <div className="user-history-title">
                <h3>History shop</h3>
                <img src={bag} alt="" />
              </div>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col p-5">Date</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Aceite FyE</td>
                    <td>1</td>
                    <td>10/07/22</td>
                    <td>$60</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Santa Calma</td>
                    <td>1</td>
                    <td>02/03/21</td>
                    <td>$45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
