import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL
} from "../Constants/productConstants";


export const productReducers = (state = { data: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                data: []
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                data: action.payload.data
            }
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            };


        default:
            return state;
    }
}