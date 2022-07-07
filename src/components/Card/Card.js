import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../Redux/Actions";
import "./Card.scss";

const Card = ({name}) => {

  return (
    <div class="card" style={{backgroundImage:""}}>
  <div class="card-details">
    <p class="text-title">{name}</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  <button class="card-button">
    <span class="material-symbols-outlined">add_shopping_cart</span>
  </button>
</div>
  );
};
export default Card;
