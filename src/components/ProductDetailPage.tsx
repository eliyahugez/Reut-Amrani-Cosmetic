import React, { useState, useEffect, useRef } from "react";
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

  // Create refs for product items
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedProduct(initialProduct || productType.products[0]);
  }, [productType, initialProduct]);

  useEffect(() => {
    // Initialize refs array with the correct length
    productRefs.current = productRefs.current.slice(
      0,
      productType.products.length
    );

    // Scroll the selected product into view
    if (selectedProduct) {
      const index = productType.products.findIndex(
        (p) => p.id === selectedProduct.id
      );
      if (index !== -1 && productRefs.current[index]) {
        productRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [selectedProduct, productType.products]);

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
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
            {productType.name}
          </h1>
          <p className="text-gray-700 mt-2 text-sm md:text-base max-h-24 overflow-y-auto">
            {productType.description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Product List */}
          <div className="md:w-1/2 order-2 md:order-1 max-h-[70vh] overflow-y-auto rounded-lg shadow-md bg-white p-3">
            <h2 className="text-lg md:text-xl font-semibold mb-3 sticky top-0 bg-white py-2 z-10">מוצרים</h2>
            <div className="space-y-2">
              {productType.products.map((product, index) => (
                <div
                  key={product.id}
                  ref={(el) => (productRefs.current[index] = el)}
                  onClick={() => setSelectedProduct(product)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 
                              ${
                                selectedProduct?.id === product.id
                                  ? "bg-purple-100 text-purple-800 shadow-md"
                                  : "hover:bg-gray-100"
                              }`}
                  role="button"
                  aria-selected={selectedProduct?.id === product.id}
                  tabIndex={0}
                >
                  <h3 className="font-bold text-base md:text-lg">{product.name}</h3>
                  <p className="text-gray-600 mt-1 text-sm">{product.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Product Details - Scrollable container */}
          <div className="md:w-1/2 order-1 md:order-2 md:sticky md:top-8 md:self-start">
            {selectedProduct && (
              <div 
                ref={detailsRef}
                className="bg-white p-4 rounded-lg shadow-md max-h-[70vh] overflow-y-auto"
              >
                <div className="mb-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-auto max-h-48 md:max-h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-lg md:text-xl font-bold mb-3 sticky top-0 bg-white py-2 z-10">
                  {selectedProduct.name}
                </h2>
                <p
                  className={`text-${selectedProduct.textColor}-700 mb-4 text-sm md:text-base leading-relaxed`}
                >
                  {selectedProduct.description}
                </p>

                {/* Active Ingredients Section */}
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-base md:text-lg">
                    מרכיבים פעילים:
                  </h3>
                  <ul className="list-disc list-inside text-pink-700 space-y-1">
                    {selectedProduct.activeIngredients.map(
                      (ingredient, index) => (
                        <li key={index} className="text-sm">
                          {ingredient}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Instructions Section */}
                <div>
                  <h3 className="font-semibold mb-2 text-base md:text-lg">הוראות שימוש:</h3>
                  <ul className="list-disc list-inside text-pink-700 space-y-1">
                    {selectedProduct.instructions.map((instruction, index) => (
                      <li key={index} className="text-sm">
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
    </div>
  );
}
