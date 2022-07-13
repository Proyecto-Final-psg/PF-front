import "./CartItems.scss";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { updateToCart, getAllItems, deleteToCart } from '../../Redux/Actions';

const CartItems = ({ name, id, price, cant }) => {

  const allCartItems = useSelector(store => store.cart)
  const dispatch = useDispatch()
  const [contador, setContador] = useState(1)

  useEffect(() => {
    dispatch(getAllItems())
  }, [contador])

  const deleteItemToCart = (e) => {
    dispatch(deleteToCart(id))
  }
  const updateCart = (event) => {
    setContador(event.target.value);

    dispatch(updateToCart(id, name, price, contador))
  }

  return (
    <div className="cart-items">
      <input className="cart-cant" type="number" onChange={updateCart} value={cant} ></input>
      <span className="cart-span">{name}</span>
      <div className="cart-span">${price}</div>
      <button onClick={deleteItemToCart} className="item-delete">BORRAR</button>
    </div>
  );
};
export default CartItems;
