import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Jangan lupa install prop-types jika belum: npm install prop-types
import ProductCard from './components/ProductCard'; // Pastikan path ini benar ke ProductCard.jsx Anda
import './ProductCatalog.css'; // Impor file CSS

function ProductCatalog({ initialProducts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // '' berarti 'All'
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Ekstrak kategori unik dari initialProducts
  // Tambahkan 'All' sebagai opsi pertama dan pastikan tidak ada duplikat jika 'All' sudah ada di data
  const categories = initialProducts 
    ? ['All', ...new Set(initialProducts.map(p => p.category))] 
    : ['All'];

  useEffect(() => {
    // Pastikan initialProducts adalah array sebelum melakukan operasi filter/map
    const productsToFilter = Array.isArray(initialProducts) ? initialProducts : [];
    
    let products = productsToFilter;

    // Filter berdasarkan kategori yang dipilih
    if (selectedCategory && selectedCategory !== 'All') {
      products = products.filter(product => product.category === selectedCategory);
    }

    // Filter berdasarkan istilah pencarian (cek nama produk)
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

  // Menangani kasus jika initialProducts belum terdefinisi atau bukan array
  if (!Array.isArray(initialProducts)) {
    // Anda bisa menampilkan pesan loading atau pesan error, atau null
    // Untuk sekarang, kita tampilkan pesan bahwa data tidak tersedia jika initialProducts bukan array.
    // Atau, jika initialProducts mungkin undefined saat pertama kali load, Anda bisa juga:
    // if (initialProducts === undefined) return <p>Loading products...</p>;
    // if (!Array.isArray(initialProducts)) return <p className="no-products-message">Product data is not available.</p>;
    // Untuk lebih aman, kita filter di useEffect dan biarkan render apa adanya
  }


  return (
    <div className="catalog-container">
      <h1 className="catalog-header">🛍️ Product Catalog</h1>

      <div className="catalog-controls">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
          aria-label="Search products"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-select"
          aria-label="Filter by category"
        >
          {categories.map(category => (
            <option key={category} value={category === 'All' ? '' : category}>
              {/* Tampilkan 'All Categories' untuk nilai default atau 'All' */}
              {category === 'All' || category === '' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-list-container">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="no-products-message">
          {initialProducts && initialProducts.length > 0 ? '😔 No products found matching your criteria.' : 'Loading products or no products available.'}
        </p>
      )}
    </div>
  );
}

// Validasi Props
ProductCatalog.propTypes = {
  initialProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })), // Bisa jadi null atau undefined saat pertama load jika data async
};

// Default props jika initialProducts tidak disediakan (opsional, tapi bagus)
ProductCatalog.defaultProps = {
  initialProducts: [], // Default ke array kosong jika tidak ada prop yang diberikan
};

export default ProductCatalog; // <-- Pastikan ini ada dan tidak ada kesalahan ketik