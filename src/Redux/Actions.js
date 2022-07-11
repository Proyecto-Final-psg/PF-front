import { API_URL, GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID, GET_ALL_CATEGORIES, REGISTER_USER } from "./Constants"

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

export function getProductByName(name){
    return function(dispatch){
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

export function orderProductsCbd(category, azOrZa){
    return function(dispatch){
        return fetch(`${API_URL}/products/orderCbd/`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({category: category, setOrder: azOrZa}), // data can be `string` or {object}!
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

export function orderProductsThc(category, azOrZa){
    return function(dispatch){
        return fetch(`${API_URL}/products/orderThc/`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({category: category, setOrder: azOrZa}), // data can be `string` or {object}!
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

export function orderProductsPrice(category, azOrZa){
   
    return function(dispatch){
        return fetch(`${API_URL}/products/orderPrice/`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({category: category, setOrder: azOrZa}), // data can be `string` or {object}!
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

export function filterByCategory(category){
    return function(dispatch){
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








