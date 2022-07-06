import "./Card.scss";

const Card = () => {
  return (
    <div class="card" style={{backgroundImage:""}}>
  <div class="card-details">
    <p class="text-title">Product</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  <button class="card-button">
    <span class="material-symbols-outlined">add_shopping_cart</span>
  </button>
</div>
  );
};
export default Card;
