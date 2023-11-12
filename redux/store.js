import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit'
import { cartReducer } from './reducers/CartReducer';

const {default: thunk} = require('redux-thunk')

const reducer = combineReducers({
    cart: cartReducer
})

const initialState = {

}
const middleware = [thunk]


const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;