import {createStore,combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {getProductsReducer} from './reducers/productReducer'
const reducer=combineReducers({
    getProducts:getProductsReducer
})
const midleware=[thunk]
const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...midleware))
)
export default store;