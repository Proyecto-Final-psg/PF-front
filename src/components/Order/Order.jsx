import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import './Order.scss'
import { submitOrder, cleanCart, usedCoupon } from '../../Redux/Actions'
import { useEffect } from 'react';
import { validator } from '../CreateProduct/helpers/Validator';
import logo from '../../assets/logo.png'
import { API_URL } from '../../Redux/Constants';
function Order() {
    const cart = useSelector((store) => store.cart);
    const user = useSelector((store) => store.user);

    const discountText = document.getElementById('discountText')

    const dispatch = useDispatch()

    const [code, setCode] = useState('')
    const [addressOrder, setAddressOrder] = useState({
        address: '',
        city: '',
        state: '',
        zipCode: ''
    })

    const [error, setError] = useState({})
    const [disc, setDisc] = useState(0)
    const [order, setOrder] = useState({
        user_id: user[0].user_id,
        name: '',
        email: '',
        address: '',
        arrayItems: []
    })

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {
        setOrder({
            ...order,
            address: `address: ${addressOrder.address}, city: ${addressOrder.city}, state: ${addressOrder.state}, zip: ${addressOrder.zipCode}`,
            arrayItems: cart.map(item => {
                return (
                    { product_id: item.id, quantity: parseInt(item.cant), price: item.price }
                )
            }),
            total: subtotal + (subtotal * (10 / 100))
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addressOrder])

    useEffect(() => {

        setOrder(
            {
                ...order,
                total: disc
            }
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disc])


    let subtotal = (cart.map((e) => (e.price * e.cant))).reduce(function (a, b) { return a + b; })
    function handleSubmitOrder(e) {
        e.preventDefault();

        dispatch(usedCoupon(code))
        dispatch(submitOrder(order))
        dispatch(cleanCart())
    }

    function handleInputOrder(e) {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        })
        setError(validator({
            ...order,
            ...addressOrder,
            [e.target.name]: e.target.value
        }))
    }

    function handleInputAddress(e) {
        setAddressOrder({
            ...addressOrder,
            [e.target.name]: e.target.value
        })
        setError(validator({
            ...addressOrder,
            ...order,
            [e.target.name]: e.target.value,
        }))
    }

    function setTheCode(e) {
        setCode(e.target.value)

    }

    function fetchTheCode(e) {
        e.preventDefault()
        let aux = 0;
        let d = 0;
        fetch(`${API_URL}/get-discount?code=${code}`)
            .then(data => data.json())
            .then(res => {
                // console.log(res);
                if (res.discount !== 'Discount not found') {
                    if (!res.discount.used) {
                        discountText.textContent = res.discount.amount + '% COUPON!'
                        aux = subtotal + (subtotal * (10 / 100))
                        // console.log('total con envio', aux);
                        d = Math.ceil(res.discount.amount * aux / 100)
                        // console.log('valor a restar',d);
                        // console.log(d);
                        // console.log('CON DESCUENTO QUEDA ',);
                        setDisc(Math.ceil(aux - d))
                    } else {
                        discountText.textContent = 'This coupon is not available'
                    }
                }
                else {
                    discountText.textContent = 'Coupon not found'
                    setDisc(0)
                }
            })
            .catch(e => console.log(e))
    }

    return (
        <div className="order-container">

            <div className="form-container">
                <img src={logo} alt="logo_icon" className='logo' />
                <form className='form-vertical'>
                    <p><b>Getting your order</b></p>
                    <br />
                    <div className="field-order">
                        <label className="label-order">Personal data</label>
                        <div className="control control-order">
                            <div className='input-order'>
                                <input className="input" type="text" name='name' onChange={handleInputOrder} required autoComplete="on" />
                                <p className="help">{error.name ? <span style={{ color: 'red' }}>{error.name}</span> : 'First and last name'}</p>
                            </div>
                            <div className='input-order'>
                                <input className="input" type="text" name='email' onChange={handleInputOrder} required autoComplete="on" />
                                <p className="help">{error.email ? <span style={{ color: 'red' }}>{error.email}</span> : 'Email'}</p>
                            </div>
                            <div className='input-order'>
                                <input className="input" type="text" name='dni' onChange={handleInputOrder} />
                                <p className="help">{error.dni ? <span style={{ color: 'red' }}>{error.dni}</span> : 'DNI'}</p>
                            </div>
                            <div >
                                <input className="input" type="text" name='phone' onChange={handleInputOrder} />
                                <p className="help">{error.phone ? <span style={{ color: 'red' }}>{error.phone}</span> : 'Phone'}</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="field-order">
                        <label className="label-order laber-order-address">Address</label>
                        <div className="control control-address">
                            <input className="input input-address" type="text" name='address' onChange={handleInputAddress} />
                            <p className="help">{error.address ? <span style={{ color: 'red' }}>{error.address}</span> : 'Street & number'}</p>
                        </div>
                        <div className="constrol control-order">
                            <div className='input-order'>
                                <input className="input" type="text" name='city' onChange={handleInputAddress} />
                                <p className="help">{error.city ? <span style={{ color: 'red' }}>{error.city}</span> : 'City'}</p>
                            </div>
                            <div className='input-order'>
                                <input className="input" type="text" name='state' onChange={handleInputAddress} />
                                <p className="help">{error.state ? <span style={{ color: 'red' }}>{error.state}</span> : 'State'}</p>
                            </div>
                            <div className='input-order'>
                                <input className="input" type="text" name='zipCode' onChange={handleInputAddress} />
                                <p className="help">{error.zipCode ? <span style={{ color: 'red' }}>{error.zipCode}</span> : 'Zip code'}</p>
                            </div>
                        </div>
                    </div>
                </form>

                <hr className='hr-order' />
                <form action="" className='coupon' onSubmit={fetchTheCode}>
                    <input type="text" name="" id="discountInput" placeholder='Coupon code' onChange={setTheCode} />
                    <button type='submit' className='btn btn-success btn-w'>Coupon</button>
                </form>
                <span style={{ fontSize: "15px", fontWeight: "bold"}} id='discountText' className='mb-5'></span>
                <div className='bottom-container'>
                    <p className="label-order">Resume Order</p>
                    <div className='items-order'>
                        {cart && cart.map(item => {
                            return (
                                <div key={item.id}>
                                    <span>{item.cant} {item.name} x ${item.price}</span>
                                    <br />
                                </div>
                            )
                        })}
                        <span>Shipping: ${Math.ceil(subtotal * (10 / 100))}</span>
                    </div>

                    <p className="label-order">
                        Total: ${
                            disc !== 0 ?
                                <>
                                    <span style={{ textDecoration: "line-through" }}>{subtotal + (subtotal * (10 / 100))}</span>
                                    <p>${disc}</p>
                                </>
                                : subtotal + (subtotal * (10 / 100))}</p>

                </div>
                {order.email === '' || order.name === '' || Object.keys(error).length > 0 ? <button type='submit' className='button-submit-order no-submit' disabled>Submit</button>
                    :
                    <button type='submit' className='button-submit-order' onClick={handleSubmitOrder}>Submit</button>
                }

            </div>

        </div>
    )
}

export default Order;