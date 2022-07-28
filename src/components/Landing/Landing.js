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
        }, 800);
        return () => { };
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
                        Es una realidad, cada vez hay más productos derivados del cannabis en el mercado.
                        Y lejos de lo que muchas personas podrían pensar, sus usos no son recreativos.
                        En Cannabis Store nos desempeñamos en acercar estos derivados.
                    </p>
                    <p className="landing-paragraph">
                        PROYECTO FICTICIO DESARROLADO CON TERMINOS EDUCATIVOS
                    </p>
                    <Login />
                    <NavLink to='./home' >
                        <button className="landing-button">
                            Ingresar como invitado
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