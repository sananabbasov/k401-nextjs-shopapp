import { toast } from "react-toastify";
import { CART_LOADING, CART_SUCCESS } from "../constants/CartReducer";
const initialState = {
    data: null,
    success: false,
    isLoading: true
}


export const getUserCart = (token) => async (dispatch, getState) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    try {

        dispatch({
            type: CART_LOADING,
            payload: initialState
        })
        var res = await fetch(`https://localhost:7037/api/v1/WishList/items`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(x => x.json())


        initialState.data = res.data
        initialState.success = true
        initialState.isLoading = false
        dispatch({
            type: CART_SUCCESS,
            payload: initialState
        })
    } catch (error) {

    }

}