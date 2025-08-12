import React from "react";
import { Star } from "lucide-react";
import { useCart } from "../../hooks/useCart";

// Product Card Component
export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-200 hover:border-gray-300 group h-fit">
      {/* Image Container */}
      <div className="relative p-2">
        <div className="aspect-square overflow-hidden rounded bg-gray-50 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Prime-like badge */}
        <div className="absolute top-1 left-1">
          <span className="bg-orange-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded text-[10px]">
            Best
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-2">
        {/* Product Title */}
        <h3 className="text-xs font-normal text-gray-900 mb-1 line-clamp-2 hover:text-orange-600 cursor-pointer leading-tight h-8">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-2.5 h-2.5 ${
                  i < Math.floor(product.rating)
                    ? "text-orange-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-[10px] text-blue-600 ml-1 hover:text-orange-600 cursor-pointer">
              ({Math.floor(Math.random() * 1000) + 100})
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-2">
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-gray-600">$</span>
            <span className="text-lg font-normal text-gray-900">
              {Math.floor(product.price)}
            </span>
            <span className="text-[10px] text-gray-600 self-start">
              {(product.price % 1).toFixed(2).slice(1)}
            </span>
          </div>
          <div className="text-[10px] text-gray-600">
            <span className="line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
            <span className="text-red-600 ml-1">
              Save ${(product.price * 0.2).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="text-[10px] text-gray-600 mb-2">
          <div className="text-green-700 font-medium">
            FREE delivery Wed, Aug 14
          </div>
        </div>

        {/* Add to Cart Button - Compact */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs font-medium py-1.5 px-2 rounded-md border border-yellow-600 shadow-sm transition-colors duration-200 focus:ring-1 focus:ring-yellow-300 focus:outline-none mb-1"
        >
          Add to Cart
        </button>

        {/* Buy Now Button - Compact */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-1.5 px-2 rounded-md transition-colors duration-200 focus:ring-1 focus:ring-orange-300 focus:outline-none">
          Buy Now
        </button>
      </div>
    </div>
  );
};
