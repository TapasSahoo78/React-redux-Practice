import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <Link to={`/product/${data.id}`}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="java">{data.first_name}</h2>
                <p className="java">{data.email}</p>
                <img src={data.avatar} alt="no img" />
              </div>
            </div>
            <div className="face face2">
              <h2>{data.id}</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProductCard;