import React, { useReducer } from "react";
import { CartContext } from "../../context/CartContext";
import { cartReducer } from "../../utils/cartReducer";

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => dispatch({ type: "ADD_TO_CART", product });
  const removeFromCart = (productId) =>
    dispatch({ type: "REMOVE_FROM_CART", productId });
  const updateQuantity = (productId, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const getCartTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const getCartItemCount = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
