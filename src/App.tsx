import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Gallery from "./components/Gallery";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <Hero />
      <VideoSection />
      <Gallery />
      <BeforeAfter />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
