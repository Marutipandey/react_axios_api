import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import axios from 'axios';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        console.log('API Response:', response.data);
        dispatch(selectedProduct(response.data));
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    // Correct placement of parenthesis
    if (productId && productId !== "") {
      fetchProductDetail();
    }

    // Cleanup function: remove the selected product when the component is unmounted
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  // Check if product is defined before rendering
  if (!product) {
    return <div>Loading...</div>; // You can also show a loading spinner or other UI here
  }

  const { image, title, id, description } = product;

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">||</div>
            <div className="middle aligned row">
              <div className="column">
                <img
                  src={image} style={{ width: '40px' }}
                  alt={title}
                  className="ui image"
                />
              </div>
              <div className="column">
                <h2 className="ui header">{title}</h2>
                <p>ID: {id}</p>
                <p>{description}</p>
                {/* Render other details as needed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
