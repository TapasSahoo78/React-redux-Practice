import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducers, productDetailsReducers } from "./Reducers/productReducers";


const reducer = combineReducers({
    tapas: productReducers,
    productDetails: productDetailsReducers
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));


export default store;