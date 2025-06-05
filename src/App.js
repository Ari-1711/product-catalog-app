// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductCatalog from './ProductCatalog';
import ProductDetailPage from './ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar'; 
import './App.css';

// ... (Impor gambar dan PRODUCTS_DATA Anda tetap sama seperti sebelumnya) ...
import macbookImage from './assets/images/MacBook_Pro_M3.jpg';
import iphoneImage from './assets/images/iphone_15_pro.jpg';
import ipadImage from './assets/images/iPad_Air_5.jpg';
import airpodsImage from './assets/images/AirPods_Pro_2.jpg';
import dellXpsImage from './assets/images/DELL_XPS_15.jpg';
import samsungS24Image from './assets/images/Samsung_Galaxy_S24.jpg';
import sonyWhImage from './assets/images/Sony_WH_1000xm5.jpg'; // Perhatikan 'x' kecil jika nama file Anda seperti itu
import logitechMxImage from './assets/images/logitech_mx_master_3s.jpg';
import kindleImage from './assets/images/kindle_paperwhite.jpg';

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "MacBook Pro M3",
    price: 25000000,
    category: "Laptop",
    image: macbookImage,
    specs: "Chip Apple M3, Layar Liquid Retina XDR 14 inci, RAM 8GB, SSD 512GB, macOS Sonoma. Performa luar biasa untuk para profesional."
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 15000000,
    category: "Phone",
    image: iphoneImage,
    specs: "Chip A17 Bionic, Layar Super Retina XDR 6.1 inci ProMotion, Kamera Pro 48MP, iOS 17. Titanium design, Action button."
  },
  {
    id: 3,
    name: "iPad Air 5",
    price: 8000000,
    category: "Tablet",
    image: ipadImage,
    specs: "Chip Apple M1, Layar Liquid Retina 10.9 inci, Kamera Wide 12MP, iPadOS. Mendukung Apple Pencil (Gen 2) dan Magic Keyboard."
  },
  {
    id: 4,
    name: "AirPods Pro 2",
    price: 3500000,
    category: "Audio",
    image: airpodsImage,
    specs: "Chip H2 Apple, Active Noise Cancellation yang lebih baik, Personalized Spatial Audio, Adaptive Transparency. Daya tahan baterai hingga 6 jam."
  },
  {
    id: 5,
    name: "Dell XPS 15",
    price: 22000000,
    category: "Laptop",
    image: dellXpsImage,
    specs: "Prosesor Intel Core i7 Generasi ke-13, Layar InfinityEdge 15.6 inci, NVIDIA GeForce RTX, RAM 16GB, SSD 1TB, Windows 11. Desain premium dan performa tinggi."
  },
  {
    id: 6,
    name: "Samsung Galaxy S24",
    price: 13000000,
    category: "Phone",
    image: samsungS24Image,
    specs: "Prosesor Snapdragon 8 Gen 3 for Galaxy, Layar Dynamic AMOLED 2X, Kamera 50MP, Android 14 dengan One UI. Fitur Galaxy AI."
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: 4500000,
    category: "Audio",
    image: sonyWhImage,
    specs: "Industry-leading Noise Cancelling dengan Integrated Processor V1, Kualitas suara superior, Desain ringan dan nyaman. Multi-point connection."
  },
  {
    id: 8,
    name: "Logitech MX Master 3S",
    price: 1500000,
    category: "Accessories",
    image: logitechMxImage,
    specs: "Sensor optik 8K DPI, Quiet Clicks, Scroll wheel MagSpeed Electromagnetic. Desain ergonomis untuk kenyamanan maksimal."
  },
  {
    id: 9,
    name: "Kindle Paperwhite",
    price: 2200000,
    category: "Tablet", // Bisa juga 'E-reader'
    image: kindleImage,
    specs: "Layar Paperwhite 6.8 inci glare-free 300 ppi, Adjustable warm light, Tahan air (IPX8). Penyimpanan 8GB atau 16GB."
  }
];


function App() {
  return (
    <CartProvider> {/* <-- Bungkus dengan CartProvider di sini */}
      <div className="App">
      <Navbar />
        {/* Anda bisa menambahkan Navbar di sini nanti yang menampilkan jumlah item keranjang */}
        <Routes>
        <Route
          path="/" // Ini akan menjadi /product-catalog-app/ di browser
          element={<ProductCatalog initialProducts={PRODUCTS_DATA} />}
        />
        <Route
          path="/product/:productId" // Ini akan menjadi /product-catalog-app/product/:productId
          element={<ProductDetailPage products={PRODUCTS_DATA} />}
        />

          <Route path="/cart" element={<ShoppingCartPage />} /> 
          </Routes>
      </div>
    </CartProvider>
  );
}

export default App;