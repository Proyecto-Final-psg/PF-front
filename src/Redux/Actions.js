



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








