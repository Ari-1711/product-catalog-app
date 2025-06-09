import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart(); 

  if (!product) {
    return null;
  }

  const handleAddToCartOnCard = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-clickable-area">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
      </Link>
      <div className="product-info">
        <p className="product-category">Kategori: {product.category}</p>
        <p className="product-price">
          Rp{product.price.toLocaleString('id-ID')}
        </p>
      </div>
      <button onClick={handleAddToCartOnCard} className="product-card-add-to-cart-button">
        🛒 Tambah
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  }).isRequired,
};

export default ProductCard;