import { React } from 'react';
import './Landing.scss';
import Landingimage from './Landing-image.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import Login from '../Login/Login';
import Brand from './Brand.png'
import { addGuest } from '../../Redux/Actions'
import { useDispatch } from 'react-redux';
import LoadingImg from "../../assets/Loading.gif";

export function Landing() {
    const { isAuthenticated } = useAuth0()
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let guest = [
            {
                email: "guest",
                name: "guest",
                roll: "guest"
            }
        ]
        dispatch(addGuest(guest))
        if (isAuthenticated) {
            Navigate('./home')
        } else {

        }
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => {



        };
    })
    return (

        <div>

            {loading &&
                <div className="cmp-landing-loading-container">
                    <img
                        className="cmp-landing-loading-img"
                        src={LoadingImg}
                        alt="my-gif"
                    />
                </div>
            }
            {!loading && <div className="landing" >

                <div className="landing-linea"></div>
                <div className="landing-conteiner-title">

                    <img className="landing-brand" src={Brand} alt={Brand} />
                    <p className="landing-paragraph">
                        It's a reallity, cannabis-products are present in shops.
                        And further of bad critics, they have healthy uses.
                        In Weedical we offer the best quality in this kind of products.
                    </p>
                    <p className="landing-paragraph">
                        This project is not real. It was developed as a final bootcamp project.
                        {/* PROYECTO FICTICIO DESARROLADO CON TERMINOS EDUCATIVOS */}
                    </p>
                    <Login />
                    <NavLink to='./home' >
                        <button className="landing-button">
                            Guest
                        </button>
                    </NavLink>
                </div>
                <div className="landing-conteiner-image">
                    <img src={Landingimage} className="landing-image" alt="landing-img" />
                </div>
                <div className="landing-linea-botton"></div>
            </div >}

        </div>


    );
}

export default Landing;