import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import './Order.scss'
import { submitOrder } from '../../Redux/Actions'
import { useEffect } from 'react';

function Order (){


    const cart = useSelector((store) => store.cart);
   // const mercadoPagoURL = useSelector((store) => store.mercadoPago);
    //console.log(cart)
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch()
    const [ addressOrder, setAddressOrder ] = useState({
        address: '',
        city: '',
        state: '',
        zipCode: ''
    })

    const [ order, setOrder ] = useState({
        user_id: user[0].user_id,
        address: '',
        arrayItems:[]
    })
    
      
     useEffect(() => {
     setOrder({
            ...order,
            address: `address: ${addressOrder.address}, city: ${addressOrder.city}, state: ${addressOrder.state}, zip: ${addressOrder.zipCode}`,
            arrayItems: cart.map(item => {
                return(
                    {product_id: item.id, quantity: parseInt(item.cant), price: item.price}
                )
            })
        })
     },[addressOrder])

    const subtotal = (cart.map((e) => (e.price * e.cant))).reduce(function (a, b) { return a + b; })

    //console.log(addressOrder)
    function handleSubmitOrder(e){
        e.preventDefault();
        
        dispatch(submitOrder(order))
        
    }

    function handleInputOrder(e){
        setAddressOrder({
            ...addressOrder,
           [ e.target.name]: e.target.value
        })
        // setOrder({
        //     ...order,
        //     address: `address: ${addressOrder.address}, city: ${addressOrder.city}, state: ${addressOrder.state}, zip: ${addressOrder.zipCode}`,
        //     arrayItems: cart.map(item => {
        //         return(
        //             {product_id: item.id, quantity: item.cant, price: item.price}
        //         )
        //     })
        // })
    }

    return(
        <div className="order-container">
            
            <div className="form-container">
                
                <form className='form-vertical'>
                <p><b>Getting your order</b></p> 
                <br/>
                <div className="field-order">   
                    <label className="label-order">Personal data</label>
                    <div className="control control-order">
                        <div className='input-order'>
                            <input className="input" type="text" />
                            <p className="help">First Name</p>
                        </div>
                        <div className='input-order'>
                            <input className="input" type="text" />
                            <p className="help">Last Name</p>
                        </div>
                        <div className='input-order'>
                            <input className="input" type="text"/>
                            <p className="help">DNI</p>
                        </div>
                        <div >
                            <input className="input" type="text"/>
                            <p className="help">Phone</p>
                        </div>
                    </div>
                 </div>
                 <br/>
                 <div className="field-order">   
                    <label className="label-order laber-order-address">Address</label>
                    <div className="control control-address">
                        <input className="input input-address" type="text"  name='address' onChange={handleInputOrder}/>
                        <p className="help">Street & number</p>
                    </div>
                    <div className="constrol control-order">
                        <div className='input-order'>
                           <input className="input" type="text"  name='city' onChange={handleInputOrder}/>
                           <p className="help">City</p> 
                        </div>
                        <div className='input-order'>
                             <input className="input" type="text" name='state' onChange={handleInputOrder}/>
                             <p className="help">State</p>
                        </div>
                       <div className='input-order'>
                         <input className="input" type="text"  name='zipCode' onChange={handleInputOrder}/>
                         <p className="help">Zip code</p>
                       </div>
                       
                    </div>
                 </div>
                 
                </form>

                <hr className='hr-order'/>

                <div className='bottom-container'>
                   <p className="label-order">Resume Order</p>
                   <div className='items-order'>
                        {cart && cart.map(item => {
                            return(
                            <div key={item.id}>
                                <span>{item.cant} {item.name} x ${item.price}</span>  
                                <br/>
                            </div>
                            )
                        })}
                        <span>Shipping: ${Math.ceil(subtotal *  (10/100))}</span>
                    </div>
                   
                 <p className="label-order">Total: ${subtotal + (subtotal *  (10/100))}</p>   
                </div>

                <button className='button-submit-order' onClick={handleSubmitOrder}>Submit</button>
            </div>
            
        </div>
    )
}

export default Order;