// import { createStore, applyMiddleware } from "redux";
// import { reducer } from "./Reducers";
// import Thunk from "redux-thunk";   //asyncronico!
// // export const store = createStore(reducer)
// export const store = createStore(
//    reducer,
//    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() , // esto es para q ande la herramienta devtool en browser
//    applyMiddleware(Thunk)  //nos permite despacahr acciones asyncronas
// )


import { configureStore } from '@reduxjs/toolkit'
import { reducer } from "./Reducers";
import  Thunk from "redux-thunk";   //asyncronico!
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
const persistConfig = {
   key: 'counter',
   storage,
};
const reducers = reducer;
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer ,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
  
})


