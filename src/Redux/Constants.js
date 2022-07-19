export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const REGISTER_USER = "REGISTER_USER"
export const ADD_TO_CART = "ADD_TO_CART"
export const GET_USER_CART = "GET_USER_CART"
export const DELETE_TO_CART = "DELETE_TO_CART"
export const ADD_GUEST = "ADD_GUEST"
export const UPDATE_TO_CART = "UPDATE_TO_CART"
export const GET_ALL_ITEMS = "GET_ALL_ITEMS"
export const EDIT_PRODUCT = "EDIT_PRODUCT"
export const GET_ALL_ORDERS = "GET_ALL_ORDERS"
export const GET_ORDER_DETAILS = "GET_ORDER_DETAILS"
export const GET_USER_ORDER = 'GET_USER_ORDER'
export const GET_ORDER_ITEMS = 'GET_ORDER_ITEMS'
export const CHANGE_ROLL = "CHANGE_ROLL"
export const GET_AUTH0_USERS = 'GET_AUTH0_USERS'
export const GET_ITEMS_OF_ORDER = 'GET_ITEMS_OF_ORDER'
export const GET_BEST_CUSTOMERS = 'GET_BEST_CUSTOMERS'
export const GET_REVIEWS = 'GET_REVIEWS'
export const ADD_REVIEW = 'ADD_REVIEW'
export const API_URL = 'https://desarrollo-back.herokuapp.com'
// export const API_URL = 'http://localhost:8081'

export const ModalStyle = {
  overlay: {
    position: 'fixed',
    top: "50px",
    backgroundColor: 'rgba(0, 0, 0, 0.587)'
  },
  content: {
    // backgroundColor:'rgba(0, 0, 0, 0.587)',
    position: 'absolute',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "warp",
    width: "auto",
    flexDirection: "column",
    fontSize: "50px",
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    // border: '1px solid #ccc',
    // background: "rgb(253,253,253)",
    background: "linear-gradient(0deg, rgba(253,253,253,1) 63%, rgba(0,0,0,0) 100%)",
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '20px',
    outline: 'none',
    padding: '20px',

  }
}

export const ModalStyleOrders = {
  overlay: {
    position: 'fixed',
    top: "50px",
    backgroundColor: 'rgba(0, 0, 0, 0.587)'
  },
  content: {
    // backgroundColor:'rgba(0, 0, 0, 0.587)',
    position: 'absolute',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    flexDirection: "column",
    fontSize: "20px",

    // border: '1px solid #ccc',
    background: "rgb(253,253,253)",
    // overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '20px',
    outline: 'none',
    padding: '20px 0px 20px 0px',

  }
}