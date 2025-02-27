import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Gallery from "./components/Gallery";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import productTypes from "./components/productData";
import ProductTypesGrid from "./components/ProductTypesGrid";
import PricingComponent from "./components/PricingComponent";
import ServicesSection from "./components/ServicesSection";
import ServicesPage from "./components/ServiceModal";
import WhatsAppButton from "./components/WhatsAppButton";
import { HelmetProvider } from "react-helmet-async";
import SEOMetadata from "./components/SEOMetadata";
import StyledText from "./components/StyledText";
import VideoGallery from "./components/VideoGallery";

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
          <VideoSection />
          <VideoGallery />
          <Gallery />
          <ProductTypesGrid productTypes={productTypes} />
          <Testimonials />
          <BeforeAfter />
          {/* <ServicesSection /> */}
          <ServicesPage />
          <PricingComponent />
        </main>
        <WhatsAppButton />
        <Footer />
        <StyledText>
          <p>Reut Amrani אליהו גז</p>
        </StyledText>
      </div>
    </HelmetProvider>
  );
}

export default App;
