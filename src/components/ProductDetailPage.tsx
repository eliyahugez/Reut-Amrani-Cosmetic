import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { ProductType, ProductDetail } from "./productData.tsx";

type ProductDetailProps = {
  productType: ProductType;
  initialProduct?: ProductDetail | null;
  onClose: () => void;
};

export default function ProductDetailPage({
  productType,
  initialProduct = null,
  onClose,
}: ProductDetailProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(
    initialProduct || productType.products[0]
  );

  useEffect(() => {
    setSelectedProduct(initialProduct || productType.products[0]);
  }, [productType, initialProduct]);

  return (
    <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm overflow-y-auto">
      <div className="container mx-auto px-4 py-8 relative max-w-4xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 
                     bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:scale-105"
          aria-label="Close product details"
        >
          <X size={24} />
        </button>

        {/* Product Type Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
            {productType.name}
          </h1>
          <p className="text-gray-700 mt-2 md:mt-4 text-sm md:text-base">
            {productType.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Product List */}
          <div className="order-2 md:order-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">מוצרים</h2>
            <div className="space-y-2">
              {productType.products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 
                              ${
                                selectedProduct?.id === product.id
                                  ? "bg-purple-100 text-purple-800 shadow-md"
                                  : "hover:bg-gray-100"
                              }`}
                  role="button"
                  aria-selected={selectedProduct?.id === product.id}
                  tabIndex={0}
                >
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-600 mt-1">{product.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Product Details */}
          {selectedProduct && (
            <div className="order-1 md:order-2">
              <div className="aspect-w-4 aspect-h-3 mb-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  loading="lazy"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {selectedProduct.name}
              </h2>
              <p
                className={`text-${selectedProduct.textColor}-700 mb-4 text-sm md:text-base leading-relaxed`}
              >
                {selectedProduct.description}
              </p>

              {/* Active Ingredients Section */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-lg">מרכיבים פעילים:</h3>
                <ul className="list-disc list-inside text-pink-700 space-y-1">
                  {selectedProduct.activeIngredients.map(
                    (ingredient, index) => (
                      <li key={index} className="text-sm md:text-base">
                        {ingredient}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Benefits Section */}
              <div>
                <h3 className="font-semibold mb-2 text-lg">הוראות שימוש:</h3>
                <ul className="list-disc list-inside text-pink-700 space-y-1">
                  {selectedProduct.instructions.map((instruction, index) => (
                    <li key={index} className="text-sm md:text-base">
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
