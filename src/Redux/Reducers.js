
import {GET_ALL_REVIEWS, DISCOUNT, REMOVE_FAVORITE,CLEAN_FAVORITES, CLEAR_CART, GET_USER_REVIEWS, GET_ORDER_BY_ORDERID, GET_BEST_CUSTOMERS, GET_REVIEWS, GET_ITEMS_OF_ORDER, GET_ALL_PRODUCTS, GET_ALL_ORDERS, GET_ORDER_DETAILS, GET_ALL_ITEMS, ADD_TO_CART, DELETE_TO_CART, UPDATE_TO_CART, GET_ALL_USERS, GET_PRODUCT_BY_ID, GET_ALL_CATEGORIES, REGISTER_USER, ADD_GUEST, EDIT_PRODUCT, GET_USER_ORDER, GET_ORDER_ITEMS, GET_AUTH0_USERS, ADD_FAVORITE, GET_FAVORITE } from "./Constants"


const initialState = {
    user: [],
    products: [],
    product: {},
    categories: [],
    users: [],
    cart: [],
    order: [],
    orderDetails: [],
    orderItems: [],
    itemsOfOrderId: [],
    user_order: {},
    topCustomers: [],
    auth0Users: [],
    reviews: [],
    userReviews: [],
    allReviews:[],
    order_detailed: {},
    wishlist : [],    
    discount:{}
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVORITE:
            // console.log(state.wishlist)
            const newFav = state.products.find(product => product.id === action.payload)
            return {
                ...state,
                wishlist: [...state.wishlist, newFav]
            }
        case ADD_FAVORITE:
            return {
                ...state,
                wishlist: action.payload
            }
        case CLEAN_FAVORITES:
            return {
                ...state,
                whishlist: []
            }
        case REMOVE_FAVORITE:
            return{
                ...state,
                wishlist: state.wishlist.filter( p => p.id !== action.payload)
            }
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                product: action.payload
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case GET_ALL_ORDERS:
            return {
                ...state,
                order: action.payload
            }
        case GET_ORDER_DETAILS:
            return {
                ...state,
                orderDetails: action.payload
            }
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload
            }
        case ADD_GUEST:
            return {
                ...state,
                user: action.guest
            }
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case ADD_TO_CART:
            const cartfound = state.cart.find((p) => p.id === action.payload.id);
            return {
                ...state,
                cart: !cartfound ? [...state.cart, action.payload].sort(function (a, b) {
                    if (a.name < b.name) { return -1; }
                    if (a.name > b.name) { return 1; }
                    return 0;
                }) : [...state.cart]
            }
        case DELETE_TO_CART:
            const filtercart = state.cart.filter((p) => p.id !== action.payload);

            return {
                ...state,
                cart: filtercart
            }
        case UPDATE_TO_CART:
            const cartfilter2 = state.cart.filter((p) => p.id !== action.payload.id);
            // const cartfilter2 = state.cart.map((p) => {
            //     if (p.id == action.payload.id) {
            //         p.cant = action.payload.cant
            //     } return p
            // }
            // )
            return {
                ...state,
                cart: (cartfilter2.concat(action.payload)).sort(function (a, b) {
                    if (a.name < b.name) { return -1; }
                    if (a.name > b.name) { return 1; }
                    return 0;
                })

            }

        case GET_USER_ORDER:
            return {
                ...state,
                user_order: action.payload
            }

        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            }

        case GET_ALL_REVIEWS:
            return {
                ...state,
                allReviews: action.payload
            }
        case GET_USER_REVIEWS:
            return {
                ...state,
                userReviews: action.payload
            }
        case GET_ALL_ITEMS:
            return {
                ...state,
            }

        case GET_ORDER_ITEMS:
            return {
                ...state,
                orderItems: action.payload
            }
        case GET_AUTH0_USERS:
            return {
                ...state,
                auth0Users: action.payload
            }
        case GET_ITEMS_OF_ORDER:
            return {
                ...state,
                itemsOfOrderId: action.payload
            }
        case GET_BEST_CUSTOMERS:
            return {
                ...state,
                topCustomers: action.payload
            }
        case GET_ORDER_BY_ORDERID:
            return {
                ...state,
                order_detailed: action.payload
            }
        case DISCOUNT:
            return {
                ...state,
                discount: action.payload
            }
        // case DISCOUNT:
        //     return {
        //         ...state,
        //         discount: action.payload
        //     }

        default:
            return state
    }
}
//////////////////////////EJEMPLO///////////////////
// todo: state.todoV
// [action.id.id, action.id.priceDayModificar, action.id.priceNightModificar]
//
// const initialState = {
//     data:["prueba"]
// }
// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "AGREGAR_PELICULA": {
//             return ({
//                 ...state, movies: [...state.movies, action.movieNew]
//             })
//         }
//         case "MODIFICAR_PRECIOS": {
//             return ({
//                 ...state, movies: state.movies.map((e, i) => {
//                     if (i + 1 == action.id.id) {
//                         e.priceDay = parseInt(action.id.priceDayModificar)
//                         e.priceNight = parseInt(action.id.priceNightModificar)
//                     }
//                     return e
//                 })
//             })
//         }
//         case "BORRAR_PELICULA": {
//             return ({
//                 ...state, movies: state.movies.filter((e, i) => i + 1 != action.id),
//             })
//         }
//         case "GET_MOVIES": {
//             return ({
//                 ...state, movies: action.data
//             })
//         }
//         default:
//             return state
//     }
// }