import { React } from 'react';
import './Landing.css';
import Landingimage from './Landing-image.png'


export function Landing() {
    return (
        <div className="landing" >
            <div className="landing-linea"></div>
            <div className="landing-conteiner-title">
                <h2 className="landing-title">Cannabis</h2>
                <h1 className="landing-subtitle">STORE</h1>
                <button className="landing-button">Login</button>
                <button className="landing-button">Ingresar como invitado</button>
            </div>
            <div className="landing-conteiner-image">
                <img src={Landingimage} className="landing-image" />
            </div>
            <div className="landing-linea-botton"></div>
        </div >
    );
}

export default Landing;