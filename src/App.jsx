import React from "react";
import { CartProvider } from "./components/cart/CartProvider";
import { Header } from "./components/layout/Header";
import { ProductListing } from "./components/product/ProductListing";
import "./styles/index.css";

// Main App Component
const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProductListing />
        </main>
      </div>
    </CartProvider>
  );
};

export default App;
