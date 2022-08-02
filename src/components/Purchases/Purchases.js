import './Purchases.scss'
import imgEnvio1 from './envio1.png';
import despacahdo from './despachado.png';
// import mensaje from './mensaje.png';
import entregado from './entregado.png'
import { NavLink } from "react-router-dom";
import canceled from './canceled.png'
import { useEffect } from 'react';
const Purchases = ({ data }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    let total = 0
    const sumaTotal = () => {
        data.arrayItems.forEach((e) => {
            total += e.price * e.quantity
        })
        return total
    }
    return (
        < div className='cmp-purchases-container' >
            <NavLink to={`/orden-compra-detalle/${data.order_id}`}>
                <div className="container-card">
                    <div className='container-imagenes-pequeñas'>
                        {/* <img className='cmp-purchases-img-mensaje' src={mensaje} alt="mensaje" /> */}
                        {data.arrayItems.map((e, i) => {
                            if (i <= 3) {
                                return <div key={i} className="media-left">
                                    <img className='cmp-purchases-img' src={e.img.split(',')[0]} alt="Placeholder" />
                                    <img className='cmp-purchases-img-despachado' src={despacahdo} alt="despacho" />

                                </div>
                            }


                            return <div key={i}></div>


                        })}
                    </div>


                    <div className='cmp-purchases-status'>
                        {data.status === "completed" && <span className="tag is-success">Success</span>}
                        {data.status === "inprogress" && <span className="tag is-warning">{data.status}</span>}
                        {data.status === "canceled" && <span className="tag is-danger">Canceled</span>}
                        <span className="tag is-success is-light">{`Total:  $  ${sumaTotal()}`}</span>
                        {data.status === "inprogress" &&
                            <div className='container-imagenPrincipal'>
                                <img className='cmp-purchases-img-puntos camion' src={imgEnvio1} alt="envio" />
                                <img className='cmp-purchases-img-puntos puntos' src="https://miro.medium.com/max/600/1*jAd0U5wLSjHXe1xL7TH67w.png" alt="puntos" />
                            </div>
                        }
                        {data.status === "completed" &&
                            <div className='container-imagenPrincipal'>
                                <img className='cmp-purchases-img-puntos camion entregado' src={entregado} alt="entregado" />
                            </div>
                        }
                        {data.status === "canceled" &&
                            <div className='container-imagenPrincipal'>
                                <img className='cmp-purchases-img-puntos camion entregado' src={canceled} alt="canceled" />
                            </div>
                        }
                    </div>

                </div>
            </NavLink>
        </div >
    )
}
export default Purchases;