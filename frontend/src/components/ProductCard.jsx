import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <Link to={`/product/${product.id}`}>Ver detalhes</Link>
    </div>
  );
}

export default ProductCard;
