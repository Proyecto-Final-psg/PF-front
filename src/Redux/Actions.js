
import { API_URL, GET_ALL_ORDERS, GET_ORDER_DETAILS, GET_ALL_PRODUCTS, CHANGE_ROLL,GET_ALL_ITEMS, ADD_TO_CART,UPDATE_TO_CART, DELETE_TO_CART, GET_ALL_USERS, GET_PRODUCT_BY_ID, GET_ALL_CATEGORIES, REGISTER_USER, ADD_GUEST, EDIT_PRODUCT, GET_USER_ORDER, GET_ORDER_ITEMS } from "./Constants"


export function getAllProducts() {
    return function (dispatch) {
        return fetch(`${API_URL}/products`)
            .then(res => res.json())
            .then(data => {
                // console.log('data de action ', data)
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
    }
}

export function getProductById(id) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_PRODUCT_BY_ID,
                    payload: data
                })
            })
    }
}

export function getProductByName(name) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/search?name=${name}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
    }
}

export function getAllCategories() {
    return function (dispatch) {
        return fetch(`${API_URL}/category`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_CATEGORIES,
                    payload: data
                })
            })
    }
}

export function getAllUsers() {
    return async function (dispatch) {
        const res = await fetch(`${API_URL}/getAllUsers`)
        const data = await res.json()
        dispatch({
            type: GET_ALL_USERS,
            payload: data
        })
    }
}

export function getUserById(id){
    return function(dispatch){
        return fetch(`${API_URL}/users/${id}`)
        .then(data => data.json())
        .then(res => {
            dispatch({
                type: GET_USER_ORDER,
                payload: res
            })
        })
    }
}

export function registerUser(user) {
    return function (dispatch) {
        return fetch(`${API_URL}/ath0log`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(user), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: REGISTER_USER,
                    payload: data
                })
            })
    }
}

export function submitOrder(order) {
    return function (dispatch) {
        return fetch(`${API_URL}/addOrder`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(order), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => window.location.href = data)
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }
}

export const addGuest = (guest) => {
    return (
        { type: ADD_GUEST, guest: guest }
    )
}
export const changeRoll = (roll) => {
    return (
        { type: CHANGE_ROLL, roll: roll }
    )
}

export const addToCart = (id, name, price, cant) => {
    return (
        {
            type: ADD_TO_CART,
            payload: {
                id: id,
                name: name,
                price: price,
                cant: 1
            }
        }
    )
}

export const deleteToCart = (id) => {
    return (
        {
            type: DELETE_TO_CART,
            payload: id
        }
    )
}


export const updateToCart = (id, name, price, contador) => {
    return (
        {
            type: UPDATE_TO_CART,
            payload: {
                id: id,
                name: name,
                price: price,
                cant: contador
            }
        }
    )
}



export const getAllItems = () => {
    return (
        {
            type: GET_ALL_ITEMS,
        }
    )
}

export function getOrderDetails(user_id) {
    return function (dispatch) {
        return fetch(`${API_URL}/getOrders/${user_id}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ORDER_DETAILS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function getAllOrders() {
    return function (dispatch) {
        return fetch(`${API_URL}/getAllOrders`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_ORDERS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function getOrderItems(){
    return function(dispatch){
        return fetch(`${API_URL}/getOrderItems`)
        .then(data => data.json())
        .then(res => {
            dispatch({
                type: GET_ORDER_ITEMS,
                payload: res
            })
        })
    }
}


export function createProduct(product) {
    return function (dispatch) {
        return fetch(`${API_URL}/products`, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}


export function editProduct(id, editedProduct) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/${id}`, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(editedProduct), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: EDIT_PRODUCT,
                    payload: data
                })
            })
    }
}


export function changeRoles(nuevoroll) {
    return function (dispatch) {
        return fetch(`${API_URL}/changeRoles`, {
            method: 'PUT',
            body: JSON.stringify(nuevoroll),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}

export function orderProductsCbd(category, azOrZa) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/orderCbd/`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({ category: category, setOrder: azOrZa }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function orderProductsThc(category, azOrZa) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/orderThc/`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({ category: category, setOrder: azOrZa }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function orderProductsPrice(category, azOrZa) {

    return function (dispatch) {
        return fetch(`${API_URL}/products/orderPrice/`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({ category: category, setOrder: azOrZa }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function filterByCategory(category) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/filter/${category}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}



////////////////////////Ejemplos/////////////////////////////////////
// export const AgregarMovie = (movieNew) => {
//     return (
//         { type: "AGREGAR_PELICULA", movieNew: movieNew }
//     )
// }
// export const ModificadorDePrecios = (id, movie) => {
//     return (
//         { type: "MODIFICAR_PRECIOS", id: id, movie: movie }
//     )
// }
// export const Borrando = (id) => {
//     return (
//         { type: "BORRAR_PELICULA", id: id }
//     )
// }
// ///////////////////////////////////////////////ASYNC////////////////////////////////////////////
// const FETCHING_DATA = "FETCHING_DATA"
// const FETCHING_DATA_SUCCES = "FETCHING_DATA_SUCCES"     ///ESTO SE IMPORTA DE OTRO JS///
// const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE"



// export const GETmovieS = (data) => {
//     return (
//         { type: "GET_MOVIES" ,data:data}
//     )
// }
// export const FetchMovie = () => {
//     return (dispatch) => {
//         // dispatch(GETmovieS([]))
//         fetch('http://192.168.0.12:3001/api')
//         .then(response => response.json())
//         .then(data =>dispatch(GETmovieS(data.movies)));
//     }
// }








