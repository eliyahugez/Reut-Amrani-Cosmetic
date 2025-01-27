import React, { useState } from 'react';
import { ProductType, ProductDetail } from './productData.tsx';
import ProductDetailPage from './ProductDetailPage';
import ScrollReveal from './ScrollReveal.tsx';

type ProductTypesGridProps = {
  productTypes: ProductType[];
};

export default function ProductTypesGrid({ productTypes }: ProductTypesGridProps) {
  // State to manage selected product type and detail
  const [selectedProductType, setSelectedProductType] = useState<ProductType | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  // Handler for selecting a product type
  const handleTypeClick = (type: ProductType) => {
    setSelectedProductType(type);
    // Automatically select first product if exists
    setSelectedProduct(type.products[0] || null);
  };

  // Handler to close the detail view
  const handleCloseDetailPage = () => {
    setSelectedProductType(null);
    setSelectedProduct(null);
  };

  return (
    <div>
      {/* Grid of Product Types */}
      <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productTypes.map((type) => (
          <div 
            key={type.id} 
            onClick={() => handleTypeClick(type)}
            className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-xl 
                        transition-all duration-300 cursor-pointer 
                        transform hover:-translate-y-2 
                        flex flex-col items-center"
          >
            <img className="text-purple-600 mb-4" src={type.icon} alt={type.name} />
            <h3 className="text-xl font-bold text-gray-800">{type.name}</h3>
            <p className="text-gray-600 text-center mt-2">{type.description}</p>
          </div>
        ))}

      </div>
      {/* Conditional Rendering of Detail Page */}
      {selectedProductType && (
        <ProductDetailPage 
          productType={selectedProductType}
          initialProduct={selectedProduct}
          onClose={handleCloseDetailPage} 
        />
      )}

    </div>
  );
}