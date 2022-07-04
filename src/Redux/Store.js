import { createStore, applyMiddleware } from "redux";
import { reducer } from "./Reducers";
import Thunk from "redux-thunk";   //asyncronico!
// export const store = createStore(reducer)
export const store = createStore(
   reducer,
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() , // esto es para q ande la herramienta devtool en browser
   applyMiddleware(Thunk)  //nos permite despacahr acciones asyncronas
)


