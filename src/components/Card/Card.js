import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductById } from "../../Redux/Actions";
import "./Card.scss";

const Card = ({name, id}) => {

  return (
    <div className="card" style={{backgroundImage:""}}>
      <NavLink to={`/products/${id}`}>
        <div className="card-details">
          <p className="text-title">{name}</p>
          <p className="text-body">Here are the details of the card</p>
        </div>
  </NavLink>
        <button className="card-button">
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
</div>
  );
};
export default Card;
