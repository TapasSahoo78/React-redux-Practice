import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from "../../Actions/productActions";
import "./productDetails.css";
import Loader from "../Layouts/Loader/Loader";
import { useAlert } from 'react-alert';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ReactStars from 'react-stars';



const ProductDetails = () => {

    const options = {
        value: 5,
        readOnly: true,
        precision: 0.5
    }

    const dispatch = useDispatch();
    const params = useParams();
    const alert = useAlert();
    let navigate = useNavigate();
    const { loading, error, data } = useSelector((state) => state.productDetails);

    //console.log(data);

    useEffect(() => {
        if (error) {
            alert.error(error);
        }

        dispatch(getSingleProduct(params.id));
    }, [dispatch, error, params.id, alert]);


    return (
        <Fragment>
            {loading ? (<Loader />)
                : (
                    <Fragment>
                        <div className="product-card">
                            <button onClick={() => navigate(-1)} className="mycardback">Back <span id='mycardback'></span></button>

                            <div className="badge">Hot</div>
                            <div className="product-tumb">
                                <img src={data.avatar} alt="no-img" />
                            </div>
                            <div className="product-details">
                                <span className="product-catagory">{data.first_name}&nbsp;{data.last_name}</span>
                                <h4>{data.email}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                                <div className="product-bottom-details">
                                    {/* <div className="product-price"><small>$96.00</small>$230.99</div> */}
                                    <ReactStars {...options} />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
        </Fragment>
    )
}

export default ProductDetails;