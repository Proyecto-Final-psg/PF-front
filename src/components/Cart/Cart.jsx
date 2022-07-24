import "./Cart.scss";
import { useSelector } from 'react-redux'
import CardItems from '../CartItems/CartItems'

import { Link } from "react-router-dom";
import { useEffect } from "react";
const Cart = () => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  const allCartItems = useSelector(store => store.cart)

  return (
    <div className="cart">
      <div className="cart-info">
        <span >Unidades</span>
        <span className="cart-span">Producto</span>
        <span className="cart-span">Precio</span>
        <span className="cart-info1"></span>
      </div>
      {allCartItems && allCartItems.map(item =>

        <CardItems
          name={item.name}
          id={item.id}
          key={item.id}
          img={item.img}
          price={item.price}
          cant={item.cant}
        />
      )}

      {(allCartItems.length === 0) && <button className="cart-purchase">
        Carrito vacío
      </button>}

      {(allCartItems.length > 1) && <Link className="cart-purchase" to='/order'>
        Realizar compra por ${(allCartItems.map((e) => (e.price * e.cant))).reduce(function (a, b) { return a + b; })}
      </Link>}

      {(allCartItems.length === 1) && <Link className="cart-purchase" to='/order'>
        Realizar compra por ${allCartItems[0].price * allCartItems[0].cant}
      </Link>}

    </div>


  );
};
export default Cart;
