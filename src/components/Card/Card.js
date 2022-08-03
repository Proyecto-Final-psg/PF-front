import { NavLink } from "react-router-dom";
import { addToCart, getFavorite } from "../../Redux/Actions"
import { useDispatch, useSelector } from 'react-redux'
import { deleteToCart } from '../../Redux/Actions';
import { addToFavourites, deleteFavourite, signInFav } from '../Account/Favourites/favortitesFunctions'
import party from "party-js";
import Toastify from 'toastify-js'
import LoadingImg from '../../assets/Loading.gif'
import { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import StarRating from '../ModalReview/StarRating/StarRating'
import "./Card.scss";


const Card = ({ name, id, description, img, price, stock, widthProp, heightProp }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const allCartItems = useSelector(store => store.cart.map(item => item.name))
  const user = useSelector(state => state.user[0])
  const favourites = useSelector(state => state.wishlist)
  const allReviews = useSelector(state => state.allReviews)
  const score = allReviews.filter(r => r.productId === id).map(r => r.score)
  const reducer = (accumulator, curr) => accumulator + curr;
  const { loginWithRedirect } = useAuth0()
  const productFavourite = favourites && favourites.find(f => f.id === id)
  let admin = user.roll === "admin" || user.roll === "super-admin"
  let isUser = user.roll === 'user'

  useEffect(() => {
    if (admin || isUser) {
      dispatch(getFavorite(user.user_id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 400)
    return () => {
      setLoading(true)
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteItemToCart = (e) => {
    dispatch(deleteToCart(id))

    Toastify({
      text: `Removed ${name} from cart 🗑 `,
      duration: 3000,

      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#6e0000",
        padding: "20px"
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }

  function addItemToCart(e) {
    //Efecto confeti

    party.confetti(e.target, {
      count: party.variation.range(20, 40),
    });

    Toastify({
      text: `Added ${name} to cart 🙌`,
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
      <p
        title={!productFavourite ? 'Add to favorites' : 'Remove from favorites'}
        className={!productFavourite ? "card-green-heart" : "card-red-heart"}
        onClick={!admin && !isUser ? (e) => signInFav(e, loginWithRedirect)
          : !productFavourite ? (e) => addToFavourites(e, id, name, user.user_id, dispatch)
            : (e) => deleteFavourite(e, id, name, user.user_id, dispatch)
        }>♥</p>

      <NavLink to={`/products/${id}`}>
        <div className="card-details">
          <p className="text-title">{name}</p>
          {loading && <div className="card-img-loading">
            <img className="card-img" src={LoadingImg} alt="LoadingImg" />
          </div>}
          {!loading && <div className="card-img">
            <img className="card-img" src={img} alt={description} />
            <div className="card-chala-container">
              {
                score.length > 0 &&
                <StarRating clase={"stars"} value={Math.round(score.reduce(reducer) / score.length)} />
              }
            </div>
          </div>}
          <p className="text-body">{description}</p>
          <h2 className="card-price" > ${price}</h2>
        </div>

      </NavLink>

      <div className={`stock ${stock === 0 ? 'none' : (stock < 10 ? 'low' : '')}`}>{stock === 0 ? 'No stock'
        :
        (stock < 10 ?
          <>
            Low stock
            <span className="material-symbols-outlined">warning</span>
          </>
          :
          <>
            Stock
            <span className="material-symbols-outlined">done</span>
          </>
        )}</div>

      {
        stock > 0 &&
        <button onClick={allCartItems.includes(name) ? deleteItemToCart : addItemToCart} className={allCartItems.includes(name) ? "card-button-cart" : "card-button"} key={id}>
          {allCartItems.includes(name) ?
            <span className="material-symbols-outlined">remove_shopping_cart</span>
            : <span className="material-symbols-outlined">add_shopping_cart</span>
          }
        </button>
      }

    </div>
  );
};
export default Card;