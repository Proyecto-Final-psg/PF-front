import { NavLink } from "react-router-dom";
import "./Card.scss";
import { addToCart } from "../../Redux/Actions"
import { useDispatch } from 'react-redux'
import party from "party-js";
import Toastify from 'toastify-js'
import LoadingImg from '../../assets/Loading.gif'
import { useState, useEffect } from "react";
const Card = ({ name, id, description, img, price, stock, widthProp, heightProp }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 600)
    return () => {
      setLoading(true)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  function addItemToCart(e) {
    //Efecto confeti
    party.confetti(e.target, {
      count: party.variation.range(20, 40),
    });

    Toastify({
      text: "Added to cart 🙌",
      duration: 3000,

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

    dispatch(addToCart(id, name, price,))
  }

  return (
    <div className="card" style={{ width: widthProp, height: heightProp }}>
      <NavLink to={`/products/${id}`}>

        <div className="card-details">
          <p className="text-title">{name}</p>
          {loading && <div className="card-img-loading">
            <img className="card-img" src={LoadingImg} alt="LoadingImg" />
          </div>}
          {!loading && <div className="card-img">
            <img className="card-img" src={img} alt={description} />
          </div>}
          <p className="text-body">{description}</p>
          <h2 className="card-price" > ${price}</h2>
        </div>

      </NavLink>

      <div className={`stock ${stock === 0 ? 'none' : (stock < 10 ? 'low' : '')}`}>{stock === 0 ? 'No stock' : (stock < 10 ? 'Low stock' : 'Stock')}</div>

      {
        stock > 0 &&
        <button onClick={addItemToCart} className="card-button" key={id}>
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      }

    </div>
  );
};
export default Card;
