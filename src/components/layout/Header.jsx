import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { ShoppingCartModal } from "../cart/ShoppingCartModal";

// Header Component
export const Header = () => {
  const { getCartItemCount } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">ShopEasy</h1>
            </div>

            <button
              onClick={() => setShowCart(true)}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <ShoppingCartModal isOpen={showCart} onClose={() => setShowCart(false)} />
    </>
  );
};
