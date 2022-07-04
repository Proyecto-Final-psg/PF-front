
const initialState = {
    state: ["prueba"]
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {

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