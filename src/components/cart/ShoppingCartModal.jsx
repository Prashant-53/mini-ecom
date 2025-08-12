import React, { useState } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { CheckoutModal } from "../checkout/CheckoutModal";

// Shopping Cart Component
export const ShoppingCartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  if (showCheckout) {
    return (
      <CheckoutModal onClose={onClose} onBack={() => setShowCheckout(false)} />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-96">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 border rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                    <p className="text-green-600 font-semibold">
                      ${item.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded bg-gray-200 hover:bg-gray-300"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded bg-gray-200 hover:bg-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold">
                Total: ${getCartTotal().toFixed(2)}
              </span>
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Clear Cart
              </button>
            </div>
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => setShowCheckout(true)}
                className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
