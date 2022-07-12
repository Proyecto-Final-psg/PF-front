import "./CartItems.scss";

const CartItems = ({ name, id, img, price, cant }) => {


  return (
    <div className="cart-items">
      <input  className="cart-cant" type="number" placeholder={cant} ></input>
      <span>{name}</span>
      <span>${price}</span>
      <button className="item-delete">BORRAR</button>
    </div>
  );
};
export default CartItems;
