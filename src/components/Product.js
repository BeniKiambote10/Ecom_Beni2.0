import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={`${product.image}`} alt={product.name} />
    </div>
  );
};

export default Product;
