import "./Cart.scss";
import { useSelector, useDispatch } from 'react-redux'
import CardItems from '../CartItems/CartItems'
import { useEffect, useState } from 'react';
import { addToCart, getAllItems } from '../../Redux/Actions';
import { Link } from "react-router-dom";

const Cart = () => {

  const allCartItems = useSelector(store => store.cart)
  //   .sort(function (a, b) {
  //   if (a.name < b.name) { return -1; }
  //   if (a.name > b.name) { return 1; }
  //   return 0;
  // }))

  const dispatch = useDispatch()

  useEffect(() => {

    // if (allCartItems.length > 0) {
    //   setTotal(total.map((e) => (e.price * e.cant))).reduce(function (a, b) { return a + b; })
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCartItems])

  // const [total, setTotal] = useState(allCartItems)





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
