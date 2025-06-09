import React, { createContext, useState, useContext } from 'react';

// Membuat Context
const CartContext = createContext();

// Membuat Hook kustom untuk menggunakan CartContext 
export const useCart = () => {
  return useContext(CartContext);
};

// Membuat Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // State untuk menyimpan item di keranjang

  // Fungsi untuk menambahkan produk ke keranjang
  const addToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      // Mengecek produk sudah ada di keranjang
      const existingItem = prevItems.find(item => item.id === productToAdd.id);
      if (existingItem) {
        // Jika sudah ada, tambahkan quantity-nya
        return prevItems.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Jika belum ada, tambahkan produk baru dengan quantity 1
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
    console.log('Keranjang setelah ditambah:', cartItems); // Untuk debug
    alert(`${productToAdd.name} berhasil ditambahkan ke keranjang!`);
  };

  // Fungsi untuk menghapus produk dari keranjang
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => item.id !== productId)
    );
  };

  // Fungsi untuk mengupdate kuantitas
  const updateQuantity = (productId, amount) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, item.quantity + amount) } 
          : item
      ).filter(item => item.quantity > 0) // Hapus item jika kuantitasnya 0
    );
  };

  // Nilai yang akan disediakan oleh Context Provider
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0) // Jumlah total item
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext; // Ekspor context-nya juga jika diperlukan di tempat lain