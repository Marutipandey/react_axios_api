// ProductComponent.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, price, image, category } = product;

    return (
      <div key={id} className="four column wide">
        <Link to={`/product/${id}`}>
          <div className="ui links card">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} style={{width:"40px"}} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta">{category}</div>
                <div className="description">{`$${price}`}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
