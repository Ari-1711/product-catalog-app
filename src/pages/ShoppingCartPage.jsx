// src/ShoppingCartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Sesuaikan path jika perlu
import './ShoppingCartPage.css'; // Kita akan buat file CSS ini

function ShoppingCartPage() {
  const { cartItems, removeFromCart, updateQuantity, itemCount } = useCart();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (itemCount === 0) {
    return (
      <div className="cart-container cart-empty">
        <h2>Keranjang Belanja Anda Kosong</h2>
        <p>Sepertinya Anda belum menambahkan produk apapun ke keranjang.</p>
        <Link to="/" className="button-primary">
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Keranjang Belanja Anda</h2>
      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Harga: Rp{item.price.toLocaleString('id-ID')}</p>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <p>Subtotal: Rp{(item.price * item.quantity).toLocaleString('id-ID')}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="cart-item-remove">
              Hapus
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Belanja: Rp{calculateTotalPrice().toLocaleString('id-ID')}</h3>
        <button className="button-checkout" onClick={() => alert('Proses checkout belum diimplementasikan!')}>
          Lanjutkan ke Checkout
        </button>
        <Link to="/" className="continue-shopping-link">
          Lanjut Belanja
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartPage;