import { NavLink } from "react-router-dom";
import "./Card.scss";
import { addToCart } from "../../Redux/Actions"
import { useDispatch } from 'react-redux'
import party from "party-js";
import Toastify from 'toastify-js'

const Card = ({ name, id, description, img, price, stock, review, setModal, setLocalState, localState, widthProp, heightProp }) => {
  const dispatch = useDispatch()
  function addItemToCart(e) {

     //Efecto confeti
     party.confetti(e.target, {
      count: party.variation.range(20, 40),
    });

    Toastify({
      text: "Added to cart 🙌",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #83c78a, #417a4b)",
        padding: "20px"
      },
      onClick: function(){} // Callback after click
    }).showToast();

    dispatch(addToCart( id,name, price,))
  }

  const handleReviewId = (id) => {
    setLocalState({
      ...localState,
      product_id: id
    })
    setModal(true)
  }

  return (
    <div className="card" style={{ width: widthProp, height: heightProp }}>
      <NavLink to={`/products/${id}`}>

        <div className="card-details">
          <p className="text-title">{name}</p>
          <div className="card-img">
            <img className="card-img" src={img} alt={description} />
          </div>
          <p className="text-body">{description}</p>
          {
            !review &&
            <h2 className="card-price" > ${price}</h2>
          }
        </div>

      </NavLink>
      {
        !review &&
        <div className={`stock ${stock === 0 ? 'none' : (stock < 10 ? 'low' : '')}`}>{stock === 0 ? 'No stock' : (stock < 10 ? 'Low stock' : 'Stock')}</div>
      }
      {
        stock > 0 && !review ?
        <button onClick={addItemToCart} className="card-button" key={id}>
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
        :
        review &&
        <button className="card-button review" onClick={() => handleReviewId(id)}>Leave review</button>
      }

    </div>
  );
};
export default Card;
