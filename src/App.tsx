import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import productTypes from "./components/productData";
import { HelmetProvider } from "react-helmet-async";
import SEOMetadata from "./components/SEOMetadata";

// Suggestion 3: Use React.lazy for components below the fold
const VideoSection = lazy(() => import("./components/VideoSection"));
const Gallery = lazy(() => import("./components/Gallery"));
const BeforeAfter = lazy(() => import("./components/BeforeAfter"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Footer = lazy(() => import("./components/Footer"));
const ProductTypesGrid = lazy(() => import("./components/ProductTypesGrid"));
const PricingComponent = lazy(() => import("./components/PricingComponent"));
// Suggestion 1: Import the new consolidated Services component
const Services = lazy(() => import("./components/ServiceModal"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));
const VideoGallery = lazy(() => import("./components/VideoGallery"));
const PriceListPage = lazy(() => import("./components/PriceListPage"));
const BusinessStats = lazy(() => import("./components/BusinessStats"));

// Suggestion 2: Use a configuration object to manage component visibility
const componentConfig = {
  showProductTypesGrid: false,
  showPricingComponent: false,
};

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        <SEOMetadata
          title="רעות עמרני - קוסמטיקאית מקצועית | טיפולי פנים ואסתטיקה"
          description="טיפולי פנים מקצועיים, טיפולי אנטי אייג'ינג, טיפולי אקנה וטיפולי עור מתקדמים. ניסיון של שנים בתחום הקוסמטיקה והאסתטיקה."
          keywords="קוסמטיקאית, טיפולי פנים, אנטי אייג'ינג, טיפולי אקנה, טיפולי עור, קוסמטיקה מקצועית"
        />
        <Navbar />
        <main className="pt-16">
          {" "}
          {/* Add padding-top to account for fixed navbar */}
          <Hero />
          <Suspense fallback={<div>Loading...</div>}>
            <VideoSection />
            <VideoGallery />
            <BusinessStats />
            <Gallery />
            {componentConfig.showProductTypesGrid && (
              <ProductTypesGrid productTypes={productTypes} />
            )}
            <Testimonials />
            <PriceListPage />
            <BeforeAfter />
            {/* Suggestion 1: Render the consolidated Services component */}
            <Services />
            {componentConfig.showPricingComponent && <PricingComponent />}
          </Suspense>
        </main>
        <Suspense fallback={<div>Loading...</div>}>
          <WhatsAppButton />
          <Footer />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;
