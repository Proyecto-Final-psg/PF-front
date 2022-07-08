import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductById } from "../../Redux/Actions";
import "./Card.scss";

const Card = ({ name, id, description, img, price }) => {
  return (
    <div className="card" style={{ backgroundImage: "" }}>
      <NavLink to={`/products/${id}`}>
       
        <div className="card-details">
          <p className="text-title">{name}</p>
          <div className="card-img">
            <img className="card-img" src={img} alt={description} />
          </div>
          <p className="text-body">{description}</p>
          <h2  className="card-price" > ${price}</h2>
        </div>

      </NavLink>
      <button className="card-button">
        <span className="material-symbols-outlined">add_shopping_cart</span>
      </button>
    </div>
  );
};
export default Card;
