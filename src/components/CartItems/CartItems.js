import "./CartItems.scss";
import { useSelector, useDispatch } from 'react-redux'
import { updateToCart, deleteToCart, getAllProducts } from '../../Redux/Actions';
import Toastify from 'toastify-js'

const CartItems = ({ name, id, price, cant }) => {
  // const allCartItems = useSelector(store => store.cart)
  const allProducts = useSelector(store => store.products)
  const dispatch = useDispatch()
  const deleteItemToCart = (e) => {
    dispatch(deleteToCart(id))
  }

  const updateCart = (event) => {
    if (event.target.name === "suma") {
      dispatch(getAllProducts())
      let productfilter = allProducts.filter(product => product.id === id)
      if (productfilter[0].stock > cant) {
        let contador = cant + 1
        dispatch(updateToCart(id, name, price, contador))
      }
      if (productfilter[0].stock === cant) {
        Toastify({
          text: "No more stock of " + name ,
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: false,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#438A00",
            padding: "20px"
          },
          onClick: function () { } // Callback after click
        }).showToast();
      }
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
      <button onClick={deleteItemToCart} className="item-delete">

        <span className="material-symbols-outlined">delete</span>

      </button>
    </div>
  );
};
export default CartItems;
