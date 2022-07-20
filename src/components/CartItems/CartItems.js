import "./CartItems.scss";
import { useDispatch } from 'react-redux'
import { updateToCart,  deleteToCart } from '../../Redux/Actions';
const CartItems = ({ name, id, price, cant }) => {
  // const allCartItems = useSelector(store => store.cart)
  const dispatch = useDispatch()
  const deleteItemToCart = (e) => {
    dispatch(deleteToCart(id))
  }
  const updateCart = (event) => {

    if (event.target.name === "suma") {
      let contador = cant + 1
      dispatch(updateToCart(id, name, price, contador))
    }
    if (event.target.name === "resta" && (cant > 1)) {
      let contador = cant - 1
      dispatch(updateToCart(id, name, price, contador))
    }
  }

  return (
    <div className="cart-items">
      <button onClick={updateCart} name="resta" className="sum">-</button>
      <label>{cant}</label>
      <button onClick={updateCart} name="suma" className="sum">+</button>
      {/* <input className="cart-cant" type="number" onChange={updateCart} value={cant} ></input> */}
      <span className="cart-span">{name}</span>
      <div className="cart-span">${price}</div>
      <button onClick={deleteItemToCart} className="item-delete">BORRAR</button>
    </div>
  );
};
export default CartItems;
