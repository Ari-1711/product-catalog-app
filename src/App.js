import React from 'react';
import ProductCatalog from './ProductCatalog'; // Adjust path if necessary
import './App.css'; // Optional: For global styles or to import component-specific CSS

// --- Impor semua gambar produk Anda dari src/assets/images/ ---
// Pastikan path dan nama file ini cocok dengan apa yang Anda miliki di C:\product-catalog-app\src\assets\images\
import macbookImage from './assets/images/MacBook_Pro_M3.jpg';
import iphoneImage from './assets/images/iphone_15_pro.jpg';
import ipadImage from './assets/images/iPad_Air_5.jpg';
import airpodsImage from './assets/images/AirPods_Pro_2.jpg';
import dellXpsImage from './assets/images/DELL_XPS_15.jpg';
import samsungS24Image from './assets/images/Samsung_Galaxy_S24.jpg';
import sonyWhImage from './assets/images/Sony_WH_1000xm5.jpg'; // Perhatikan 'x' kecil jika nama file Anda seperti itu
import logitechMxImage from './assets/images/logitech_mx_master_3s.jpg';
import kindleImage from './assets/images/kindle_paperwhite.jpg';
// --- Akhir dari impor gambar ---

// Definisikan PRODUCTS_DATA SATU KALI, menggunakan variabel gambar yang sudah diimpor
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "MacBook Pro M3",
    price: 25000000,
    category: "Laptop",
    image: macbookImage // <-- Gunakan variabel hasil impor
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 15000000,
    category: "Phone",
    image: iphoneImage // <-- Gunakan variabel hasil impor
  },
  {
    id: 3,
    name: "iPad Air 5",
    price: 8000000,
    category: "Tablet",
    image: ipadImage // <-- Gunakan variabel hasil impor
  },
  {
    id: 4,
    name: "AirPods Pro 2",
    price: 3500000,
    category: "Audio",
    image: airpodsImage // <-- Gunakan variabel hasil impor
  },
  {
    id: 5,
    name: "Dell XPS 15",
    price: 22000000,
    category: "Laptop",
    image: dellXpsImage // <-- Gunakan variabel hasil impor
  },
  {
    id: 6,
    name: "Samsung Galaxy S24",
    price: 13000000,
    category: "Phone",
    image: samsungS24Image // <-- Gunakan variabel hasil impor
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: 4500000,
    category: "Audio",
    image: sonyWhImage // <-- Gunakan variabel hasil impor
  },
  {
    id: 8,
    name: "Logitech MX Master 3S",
    price: 1500000,
    category: "Accessories",
    image: logitechMxImage // <-- Gunakan variabel hasil impor
  },
  {
    id: 9,
    name: "Kindle Paperwhite",
    price: 2200000,
    category: "Tablet",
    image: kindleImage // <-- Gunakan variabel hasil impor
  }
];

function App() {
  return (
    <div className="App">
      <ProductCatalog initialProducts={PRODUCTS_DATA} />
    </div>
  );
}

export default App;