
import { GET_ALL_PRODUCTS, GET_ALL_ITEMS, ADD_TO_CART, GET_ALL_USERS, GET_PRODUCT_BY_ID, GET_ALL_CATEGORIES, REGISTER_USER, ADD_GUEST, EDIT_PRODUCT } from "./Constants"


const initialState = {
    user: {},
    products: [],
    product: {},
    categories: [],
    users: [],
    cart: [],

}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
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
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case GET_ALL_ITEMS:
            return {
                ...state,
              }


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