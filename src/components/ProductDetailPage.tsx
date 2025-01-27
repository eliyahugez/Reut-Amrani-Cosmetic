import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { ProductType, ProductDetail } from './productData.tsx';

type ProductDetailProps = {
  productType: ProductType;
  initialProduct?: ProductDetail | null;
  onClose: () => void;
};

export default function ProductDetailPage({ 
  productType, 
  initialProduct = null,
  onClose 
}: ProductDetailProps) {
  // Manage selected product state
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(
    initialProduct || productType.products[0]
  );

  // Effect to reset selected product when product type changes
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
                     bg-white rounded-full p-2 shadow-md"
        >
          <X size={24} />
        </button>

        {/* Product Type Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-purple-600">{productType.name}</h1>
          <p className="text-gray-700 mt-4">{productType.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product List */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">מוצרים</h2>
            {productType.products.map((product) => (
              <div 
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`p-4 mb-2 rounded-lg cursor-pointer transition-colors 
                            ${selectedProduct?.id === product.id 
                              ? 'bg-purple-100 text-purple-800' 
                              : 'hover:bg-gray-100'}`}
              >
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>

          {/* Selected Product Details */}
          {selectedProduct && (
            <div>
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full rounded-lg mb-6 shadow-md object-cover h-64"
              />
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
              <p className="text-pink-700 mb-4">{selectedProduct.description}</p>
              
              {/* Active Ingredients Section */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2">מרכיבים פעילים:</h3>
                <ul className="list-disc list-inside text-pink-700">
                  {selectedProduct.activeIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              {/* Benefits Section */}
              <div>
                <h3 className="font-semibold mb-2">הוראות שימוש:</h3>
                <ul className="list-disc list-inside text-pink-700">
                  {selectedProduct.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
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