import './Purchases.scss'
import imgEnvio1 from './envio1.png';
import despacahdo from './despachado.png';
import mensaje from './mensaje.png';
import entregado from './entregado.png'
import { NavLink } from "react-router-dom";

const Purchases = ({ data }) => {
    let total = 0
    const sumaTotal = () => {
        data.arrayItems.map((e) => {
            total += e.price
        })
        return total
    }
    return (
        < div className='cmp-purchases-container' >
            <NavLink to={`/orden-compra-detalle/${data.order_id}`}>
                <div className="card container-card">
                    <div className='container-imagenes-pequeñas'>
                        <img className='cmp-purchases-img-mensaje' src={mensaje} />
                        {data.arrayItems.map((e, i) => {
                            if (i <= 3) {
                                return <div key={i} className="media-left">
                                    <img className='cmp-purchases-img' src={e.img} alt="Placeholder image" />
                                    <img className='cmp-purchases-img-despachado' src={despacahdo} />

                                </div>
                            }
                        })}
                    </div>

                    {data.status === "inprogress" &&
                        <div className='container-imagenPrincipal'>
                            <img className='cmp-purchases-img-puntos' src="https://miro.medium.com/max/600/1*jAd0U5wLSjHXe1xL7TH67w.png" />
                            <img className='cmp-purchases-img-puntos camion' src={imgEnvio1} />
                        </div>
                    }
                    {data.status === "done" &&
                        <div className='container-imagenPrincipal'>
                            <img className='cmp-purchases-img-puntos camion entregado' src={entregado} />
                        </div>
                    }

                    <div className='cmp-purchases-status'>
                        {data.status === "done" && <span className="tag is-success">Success</span>}
                        {data.status === "inprogress" && <span className="tag is-warning">{data.status}</span>}
                        <span className="tag is-success is-light">{`Total:  $  ${sumaTotal()}`}</span>
                    </div>

                </div>
            </NavLink>
        </div >
    )
}
export default Purchases;