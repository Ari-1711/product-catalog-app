// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Sesuaikan path jika perlu
import './Navbar.css'; // Kita akan buat file CSS ini

function Navbar() {
  const { itemCount } = useCart(); // Dapatkan jumlah item dari CartContext

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🛍️ Toko Produk Keren
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-links">
              Katalog
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart" className="navbar-links cart-link">
              🛒 Keranjang ({itemCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;