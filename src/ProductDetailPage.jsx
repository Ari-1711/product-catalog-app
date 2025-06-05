import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Impor PropTypes
import './ProductDetailPage.css'; // Kita akan buat file CSS ini

function ProductDetailPage({ products }) {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="product-detail-container error-page">
        <h2>Produk Tidak Ditemukan!</h2>
        <Link to="/" className="back-to-catalog-link button-like">
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  // Fungsi untuk merender spesifikasi
  const renderSpecs = (specs) => {
    if (!specs) {
      return <p>Spesifikasi detail belum tersedia.</p>;
    }
    if (typeof specs === 'string') {
      // Jika specs adalah string, kita bisa membaginya menjadi beberapa baris jika ada newline
      return specs.split('\n').map((line, index) => (
        <p key={index} className="spec-line">{line}</p>
      ));
    }
    if (typeof specs === 'object' && specs !== null) {
      return (
        <ul className="specs-list">
          {Object.entries(specs).map(([key, value]) => (
            <li key={key} className="spec-item">
              <strong className="spec-key">{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:</strong> {/* Mengganti _ dengan spasi dan membuat huruf awal kapital */}
              <span className="spec-value">{value}</span>
            </li>
          ))}
        </ul>
      );
    }
    return <p>Format spesifikasi tidak didukung.</p>;
  };

  const handleAddToCart = () => {
    // Logika untuk menambahkan ke keranjang akan ditambahkan di sini nanti
    console.log(`Produk ditambahkan ke keranjang: ${product.name} (ID: ${product.id})`);
    alert(`${product.name} ditambahkan ke keranjang! (Fungsi belum sepenuhnya diimplementasikan)`);
  };

  return (
    <div className="product-detail-container">
      <Link to="/" className="back-to-catalog-link button-like">
        ← Kembali ke Katalog
      </Link>
      <div className="product-detail-content">
        <div className="product-detail-image-container">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-category">Kategori: {product.category}</p>
          <p className="product-detail-price">Rp{product.price.toLocaleString('id-ID')}</p>
          
          <div className="specs-section">
            <h3>Spesifikasi Detail:</h3>
            {renderSpecs(product.specs)}
          </div>
          
          <button onClick={handleAddToCart} className="add-to-cart-button">
            🛒 Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

ProductDetailPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired, // Bisa string (public) atau objek (import)
    specs: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), // Specs bisa string atau objek
  })).isRequired,
};

export default ProductDetailPage;