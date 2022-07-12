import "./Cart.scss";
import { useSelector, useDispatch } from 'react-redux'
import CardItems from '../CartItems/CartItems'
import { useEffect, useState } from 'react';
import { addToCart, getAllItems } from '../../Redux/Actions';

const Cart = () => {

  const allCartItems = useSelector(store => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllItems())
    // if (allCartItems.length > 0) {
    //   setTotal(total.map((e) => (e.price * e.cant))).reduce(function (a, b) { return a + b; })
    // }
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

      {(allCartItems.length == 0) && <button className="cart-purchase">
        Carrito vacío
      </button>}

      {(allCartItems.length > 1) && <button className="cart-purchase">
        Realizar compra por ${(allCartItems.map((e) => (e.price * e.cant))).reduce(function (a, b) { return a + b; })}
      </button>}

      {(allCartItems.length == 1) && <button className="cart-purchase">
        Realizar compra por ${allCartItems[0].price}


      </button>}

    </div>

  );
};
export default Cart;
