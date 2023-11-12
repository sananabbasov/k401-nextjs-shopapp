import { CART_ERROR, CART_LOADING, CART_SUCCESS } from "../constants/CartReducer";



export const cartReducer = (state = { cart: [] }, action) => {

    switch (action.type) {
        case CART_SUCCESS:
            return {
                ...state,
                cart: action.payload
            }
        case CART_ERROR:
            return {
                ...state,
                cart: action.payload
            }
        case CART_LOADING:
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state;
    }

}