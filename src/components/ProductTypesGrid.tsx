import { useState, useCallback } from "react";
import { ProductType, ProductDetail } from "./productData.tsx";
import ProductDetailPage from "./ProductDetailPage";
import ScrollReveal from "./ScrollReveal.tsx";
import OptimizedImage from "./OptimizedImage";
import CatalogDownload from "./CatalogDownload";

type ProductTypesGridProps = {
  productTypes: ProductType[];
};

export default function ProductTypesGrid({
  productTypes,
}: ProductTypesGridProps) {
  const [selectedProductType, setSelectedProductType] =
    useState<ProductType | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(
    null
  );

  const handleTypeClick = useCallback((type: ProductType) => {
    setSelectedProductType(type);
    setSelectedProduct(type.products[0] || null);
  }, []);

  const handleCloseDetailPage = useCallback(() => {
    setSelectedProductType(null);
    setSelectedProduct(null);
  }, []);

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="text-4xl md:text-5xl font-serif text-center text-pink-800 mb-6 md:mb-8 bg-amber-100 bg-opacity-40 py-4 rounded-lg hover:scale-105 duration-300">
          המוצרים שלנו
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="flex justify-center mb-8 md:mb-12">
          <CatalogDownload
            catalogPath="/catalog/קטלוג מוצרים למכירה 04.2023.pdf"
            buttonText="הורד את קטלוג המוצרים המלא"
            className="shadow-md hover:shadow-lg"
          />
        </div>
      </ScrollReveal>
      <div
        id="services"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
      >
        {productTypes.map((type) => (
          <ScrollReveal key={type.id} delay={type.id * 100}>
            <div
              onClick={() => handleTypeClick(type)}
              className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-xl 
                        transition-all duration-300 cursor-pointer 
                        transform hover:-translate-y-2 
                        flex flex-col items-center
                        hover:bg-purple-50"
              role="button"
              tabIndex={0}
              aria-label={`View ${type.name} products`}
            >
              <div className="w-24 h-24 mb-4 overflow-hidden">
                <OptimizedImage
                  src={type.icon}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {type.name}
              </h3>
              <p className="text-gray-600 text-center">{type.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

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
