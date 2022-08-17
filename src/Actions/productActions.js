import axios from "axios";
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


//GET All Products
export const getProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST
        });

        const data = await axios.get('https://reqres.in/api/users');
        //console.log(data);
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data.data
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message
        });
    }
}

//GET Single Product
export const getSingleProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: SINGLE_PRODUCT_REQUEST
        });
        const link = `https://reqres.in/api/users/${id}`;
        const data = await axios.get(link);
        //console.log(data);
        dispatch({
            type: SINGLE_PRODUCT_SUCCESS,
            payload: data.data
        })
    } catch (error) {
        dispatch({
            type: SINGLE_PRODUCT_FAIL,
            payload: error.response.data.message
        });
    }
}

//Create a Products
export const createProduct = (post_data) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_PRODUCT_REQUEST
        });
        const link = `https://reqres.in/api/users/`;
        const data = await axios.post(link, post_data);
        //console.log(data);
        dispatch({
            type: CREATE_PRODUCT_SUCCESS,
            payload: data.data
        })
    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAIL,
            payload: error.response.data.message
        });
    }
}

// //Update Products
// export const updateProduct = (id, post_data) => async (dispatch) => {
//     try {
//         dispatch({
//             type: UPDATE_PRODUCT_REQUEST
//         });
//         const link = `https://reqres.in/api/users/${id}`;
//         const data = await axios.put(link, post_data);
//         //console.log(data);
//         dispatch({
//             type: UPDATE_PRODUCT_SUCCESS,
//             payload: data.data
//         })
//     } catch (error) {
//         dispatch({
//             type: UPDATE_PRODUCT_FAIL,
//             payload: error.response.data.message
//         });
//     }
// }

// //Delete Products
// export const deleteProduct = (id) => async (dispatch) => {
//     try {
//         dispatch({
//             type: DELETE_PRODUCT_REQUEST
//         });
//         const link = `https://reqres.in/api/users/${id}`;
//         const data = await axios.delete(link);
//         //console.log(data);
//         dispatch({
//             type: DELETE_PRODUCT_SUCCESS,
//             payload: data.data
//         })
//     } catch (error) {
//         dispatch({
//             type: DELETE_PRODUCT_FAIL,
//             payload: error.response.data.message
//         });
//     }
// }