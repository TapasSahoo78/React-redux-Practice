import React from 'react';

const ProductCard = ({ data }) => {
  return (
    <>
        <div className="container">
          <div className="card">
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
          </div>
        </div>
    </>
  )
}

export default ProductCard;