import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';// Assuming ProductCard.jsx is in the same directory
import PropTypes from 'prop-types'; // For PRODUCTS prop validation in this example

const PRODUCTS = [
  { id: 1, name: "MacBook Pro M3", price: 25000000, category: "Laptop", image: "https://via.placeholder.com/200/FF0000/FFFFFF?Text=MacBook" },
  { id: 2, name: "iPhone 15 Pro", price: 15000000, category: "Phone", image: "https://via.placeholder.com/200/00FF00/FFFFFF?Text=iPhone" },
  { id: 3, name: "iPad Air 5", price: 8000000, category: "Tablet", image: "https://via.placeholder.com/200/0000FF/FFFFFF?Text=iPad" },
  { id: 4, name: "AirPods Pro 2", price: 3500000, category: "Audio", image: "https://via.placeholder.com/200/FFFF00/000000?Text=AirPods" },
  { id: 5, name: "Dell XPS 15", price: 22000000, category: "Laptop", image: "https://via.placeholder.com/200/FF00FF/FFFFFF?Text=DellXPS" },
  { id: 6, name: "Samsung Galaxy S24", price: 13000000, category: "Phone", image: "https://via.placeholder.com/200/00FFFF/000000?Text=GalaxyS24" },
  { id: 7, name: "Sony WH-1000XM5", price: 4500000, category: "Audio", image: "https://via.placeholder.com/200/C0C0C0/000000?Text=SonyXM5" },
];

// Basic styling (can be moved to a CSS file)
const catalogStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const headerStyle = {
  textAlign: 'center',
  color: '#333',
  marginBottom: '30px'
};

const controlsStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '30px',
  padding: '15px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  flexWrap: 'wrap', // For responsiveness
  gap: '15px' // Space between items when wrapped
};

const inputStyle = {
  padding: '10px',
  fontSize: '1em',
  border: '1px solid #ccc',
  borderRadius: '4px',
  flexGrow: 1, // Allow search input to take available space
  minWidth: '200px' // Minimum width for search input
};

const selectStyle = {
  padding: '10px',
  fontSize: '1em',
  border: '1px solid #ccc',
  borderRadius: '4px',
  minWidth: '150px' // Minimum width for select
};

const productListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', // Center items if not filling the row
  gap: '10px' // Replaces margin on ProductCard for overall layout
};

const noProductsStyle = {
  textAlign: 'center',
  fontSize: '1.2em',
  color: '#777',
  marginTop: '50px'
};


function ProductCatalog({ initialProducts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  // Extract unique categories for the filter dropdown
  const categories = ['All', ...new Set(initialProducts.map(p => p.category))];

  useEffect(() => {
    let products = initialProducts;

    // Filter by selected category
    if (selectedCategory && selectedCategory !== 'All') {
      products = products.filter(product => product.category === selectedCategory);
    }

    // Filter by search term (checks product name)
    if (searchTerm) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(products);
  }, [searchTerm, selectedCategory, initialProducts]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div style={catalogStyle} className="catalog">
      <h1 style={headerStyle}>🛍️ Product Catalog</h1>

      <div style={controlsStyle} className="controls">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={inputStyle}
          aria-label="Search products"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={selectStyle}
          aria-label="Filter by category"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'All' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        <div style={productListStyle} className="product-list">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p style={noProductsStyle}>😔 No products found matching your criteria.</p>
      )}
    </div>
  );
}

ProductCatalog.propTypes = {
  initialProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

// To use it in App.js or index.js:
// import ProductCatalog from './ProductCatalog';
// const PRODUCTS = [ ... ]; // your products array
// <ProductCatalog initialProducts={PRODUCTS} />

export default ProductCatalog;