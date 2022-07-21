import './Purchases.scss'
import imgEnvio from './envio.png';
import despacahdo from './despachado.png';
import mensaje from './mensaje.png';
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
            <div className="card container-card">
                <img className='cmp-purchases-img-mensaje' src={mensaje} />
                {data.arrayItems.map((e, i) => {
                    return <div key={i} className="media-left">
                        <img className='cmp-purchases-img' src={e.img} alt="Placeholder image" />
                        <img className='cmp-purchases-img-despachado' src={despacahdo} />

                    </div>
                })}
                <div>
                    <img className='cmp-purchases-img-puntos' src="https://miro.medium.com/max/600/1*jAd0U5wLSjHXe1xL7TH67w.png" />
                    <img className='cmp-purchases-img-puntos camion' src={imgEnvio} />
                </div>


                <div className='cmp-purchases-status'>
                    {false && <span className="tag is-success is-light span">Success</span>}
                    <span className="tag is-warning">Pending..</span>
                    <span className="tag is-success is-light">{`Total: ${sumaTotal()}`}</span>
                </div>

            </div>

        </div >
    )
}
export default Purchases;