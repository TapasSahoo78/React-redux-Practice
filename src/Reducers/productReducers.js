import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    // UPDATE_PRODUCT_REQUEST,
    // UPDATE_PRODUCT_SUCCESS,
    // UPDATE_PRODUCT_FAIL,
    // DELETE_PRODUCT_REQUEST,
    // DELETE_PRODUCT_SUCCESS,
    // DELETE_PRODUCT_FAIL
} from "../Constants/productConstants";

const iniatialState = {
    "name": "",
    "job": ""
};


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

export const productDetailsReducers = (state = { data: {} }, action) => {
    switch (action.type) {
        case SINGLE_PRODUCT_REQUEST:
            return {
                loading: true,
                ...state
            };
        case SINGLE_PRODUCT_SUCCESS:
            return {
                loading: false,
                data: action.payload.data
            }
        case SINGLE_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};


export const createProductReducers = (state = iniatialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST:
            return {
                loading: true,
                ...state
            };
        case CREATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                data: action.payload.data
            }
        case CREATE_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

// export const updateProductReducers = (state = { data: {} }, action) => {
//     switch (action.type) {
//         case UPDATE_PRODUCT_REQUEST:
//             return {
//                 loading: true,
//                 ...state
//             };
//         case UPDATE_PRODUCT_SUCCESS:
//             return {
//                 loading: false,
//                 data: action.payload.data
//             }
//         case UPDATE_PRODUCT_FAIL:
//             return {
//                 loading: false,
//                 error: action.payload
//             };

//         default:
//             return state;
//     }
// }

// export const deleteProductReducers = (state = { data: {} }, action) => {
//     switch (action.type) {
//         case DELETE_PRODUCT_REQUEST:
//             return {
//                 loading: true,
//                 ...state
//             };
//         case DELETE_PRODUCT_SUCCESS:
//             return {
//                 loading: false,
//                 data: action.payload.data
//             }
//         case DELETE_PRODUCT_FAIL:
//             return {
//                 loading: false,
//                 error: action.payload
//             };

//         default:
//             return state;
//     }
// }