import "./CartItems.scss";

const CartItems = ({ name, id, img, price }) => {


  return (
    <div className="cart-items">
      <span>{name}</span>
      <span>{id}</span>
      <span>{img}</span>
      <span>{price}</span>
    </div>
  );
};
export default CartItems;
