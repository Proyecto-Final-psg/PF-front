import { API_URL, GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from "./Constants"


export function getAllProducts(){
    return function(dispatch){
        return fetch(`${API_URL}/products`)
        .then(res => res.json())
        .then(data => {
            console.log('data de action ',data)
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload : data
            })
        })
    }
}

export function getProductById(id){
    return function(dispatch){
        return fetch(`${API_URL}/products/${id}`)
        .then(res => res.json())
        .then(data =>{
            dispatch({
                type: GET_PRODUCT_BY_ID,
                payload: data
            })
        })
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








