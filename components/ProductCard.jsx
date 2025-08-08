"use client";

import { useState } from "react";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const isOutOfStock = product.variants[selectedVariant].stock <= 0;

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-gray-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          onError={(e) => (e.target.src = "/images/placeholder.jpg")}
        />
        {isOutOfStock && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
            Out of Stock
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-gray-900 mb-3">
          ${product.price.toFixed(2)}
        </p>

        <div className="mb-4">
          <label
            htmlFor={`variant-select-${product.id}`}
            className="block text-sm text-gray-600 mb-1"
          >
            Size:
          </label>
          <select
            id={`variant-select-${product.id}`}
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {product.variants.map((variant, index) => (
              <option
                key={variant.id}
                value={index}
                disabled={variant.stock <= 0}
                className={variant.stock <= 0 ? "text-gray-400" : ""}
              >
                {variant.name} {variant.stock <= 0 ? "(Out of Stock)" : ""}
              </option>
            ))}
          </select>
        </div>

        <button
          disabled={isOutOfStock}
          className={`w-full py-2 px-4 rounded font-medium text-white transition-colors duration-300 ${
            isOutOfStock
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
          }`}
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
