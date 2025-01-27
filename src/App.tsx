import React, { useState } from "react";
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


function App() {
  // const [showDetailPage, setShowDetailPage] = useState(false);

  return (
    <div className="min-h-screen bg-white font-[var(--comic-font)]"  dir="rtl">
      <Navbar />
      <Hero />
      <VideoSection />
      <Gallery />
      <ServicesPage />
      <BeforeAfter />
      {/* <ProductDynamic /> */}
      <ProductTypesGrid productTypes={productTypes} />
      <Testimonials />
      {/* <ServicesSection  /> */}
      <PricingComponent />
      <Footer />
    </div>
  );
}

export default App;
