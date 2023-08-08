import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
//line to connect with redux extension
const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(rootReducer, componseEnhancer(applyMiddleware(thunk)))

console.log(store.getState());


export default store;