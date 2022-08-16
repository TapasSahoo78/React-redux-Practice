import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from "../../Actions/productActions";
import ProductCard from "./ProductCard";
import "./product.css";
import Loader from "../Layouts/Loader/Loader";



const Product = () => {

    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.tapas);//from state.js pass combineReducers

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch, error]);

    return (
        <Fragment>
            {loading ? (<Loader />)
                : (
                    <Fragment>
                        <div className='mycard'>
                            {
                                data.map(tt => {
                                    return <ProductCard key={tt.id} data={tt} />
                                })
                            }
                        </div>

                    </Fragment>
                )}
        </Fragment>
    )
}

export default Product;