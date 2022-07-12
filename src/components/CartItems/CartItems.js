import "./CartItems.scss";

const CartItems = ({ name, id, img, price, cant }) => {


  return (
    <div className="cart-items">
      <input className="cart-cant" type="number" placeholder={cant} ></input>
      <span className="cart-span">{name}</span>
      <div className="cart-span">${price}</div>
      <button className="item-delete">BORRAR</button>
    </div>
  );
};
export default CartItems;
