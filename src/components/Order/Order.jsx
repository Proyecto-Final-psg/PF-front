import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import './Order.scss'
import { submitOrder, cleanCart, orderProductsCbd } from '../../Redux/Actions'
import { useEffect } from 'react';
import { validator } from '../CreateProduct/helpers/Validator';
import logo from '../../assets/logo.png'
function Order() {
    const cart = useSelector((store) => store.cart);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch()

    const [addressOrder, setAddressOrder] = useState({
        address: '',
        city: '',
        state: '',
        zipCode: ''
    })

    const [error, setError] = useState({})

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
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addressOrder])

    const subtotal = (cart.map((e) => (e.price * e.cant))).reduce(function (a, b) { return a + b; })

    function handleSubmitOrder(e) {
        e.preventDefault();
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
            [e.target.name]: e.target.value,
            email: order.email,
            name: order.name
        }))
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
                                <input className="input" type="text" name='name' onChange={handleInputOrder}  required autoComplete="on" />
                                <p className="help">{error.name ? <span style={{ color: 'red' }}>{error.name}</span> : 'First and last name'}</p>
                            </div>
                            <div className='input-order'>
                                <input className="input" type="text" name='email' onChange={handleInputOrder} required autoComplete="on" />
                                <p className="help">{error.email ? <span style={{ color: 'red' }}>{error.email}</span> : 'Email'}</p>
                            </div>
                            <div className='input-order'>
                                <input className="input" type="text" onChange={handleInputOrder} />
                                <p className="help">DNI</p>
                            </div>
                            <div >
                                <input className="input" type="text" onChange={handleInputOrder} />
                                <p className="help">Phone</p>
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

                    <p className="label-order">Total: ${subtotal + (subtotal * (10 / 100))}</p>
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