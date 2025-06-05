import React from 'react';
import PropTypes from 'prop-types';

// Basic styling for the card (can be moved to a CSS file)
const cardStyle = {
  border: '1px solid #eee',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  width: '250px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '4px',
  marginBottom: '12px'
};

const nameStyle = {
  fontSize: '1.2em',
  fontWeight: 'bold',
  margin: '8px 0'
};

const priceStyle = {
  color: '#007bff',
  fontSize: '1.1em',
  margin: '4px 0'
};

const categoryStyle = {
  fontSize: '0.9em',
  color: '#6c757d',
  fontStyle: 'italic'
};

function ProductCard({ product }) {
  if (!product) {
    return null; // Or some fallback UI
  }

  return (
    <div style={cardStyle} className="product-card">
      <img src={product.image} alt={product.name} style={imageStyle} />
      <h3 style={nameStyle}>{product.name}</h3>
      <p style={priceStyle}>
        Rp{product.price.toLocaleString('id-ID')}
      </p>
      <p style={categoryStyle}>Category: {product.category}</p>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;