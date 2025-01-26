import React from 'react';
import ScrollReveal from './ScrollReveal';
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16">
            הגלריה שלנו
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <ScrollReveal key={index} className={`delay-${index * 200}`}>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-80 object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}