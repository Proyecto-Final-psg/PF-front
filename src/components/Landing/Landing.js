import { React } from 'react';
import './Landing.scss';
import Landingimage from './Landing-image.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import Login from '../Login/Login';
import Brand from './Brand.png'

export function Landing() {
    const { user, isAuthenticated, isLoading } = useAuth0()
    const Navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            Navigate('./home')
        }
    })
    return (
        <div className="landing" >
            <div className="landing-linea"></div>
            <div className="landing-conteiner-title">

                <img className="landing-brand" src={Brand} alt={Brand} />
                <p className="landing-paragraph">
                    Es una realidad, cada vez hay más productos derivados del cannabis en el mercado.
                    Y lejos de lo que muchas personas podrían pensar, sus usos no son recreativos.
                    En Cannabis Store nos desempeñamos en acercar estos derivados.
                    <p>
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
                <img src={Landingimage} className="landing-image" />
            </div>
            <div className="landing-linea-botton"></div>
        </div >
    );
}

export default Landing;