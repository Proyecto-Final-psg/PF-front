import "./Cart.scss";
import { useSelector, useDispatch } from 'react-redux'
import CardItems from '../CartItems/CartItems'
import { useEffect } from 'react';
import { addToCart,getAllItems } from '../../Redux/Actions';

const Cart = () => {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllItems() )
   
  })


  const allCartItems = useSelector(store => store.cart)

  return (
    <div className="cart">
      {allCartItems && allCartItems.map(item =>
     
        <CardItems
          name={item.name}
          id={item.id}
          key={item.id}
          img={item.img}
          price={item.price}
        ></CardItems>
      )}

    </div>
    
  );
};
export default Cart;
