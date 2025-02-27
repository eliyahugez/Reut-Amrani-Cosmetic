import ScrollReveal from "./ScrollReveal";
import OptimizedImage from "./OptimizedImage";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";

// Define images with proper alt text for accessibility
const galleryImages = [
  { src: image1, alt: "קוסמטיקה טיפולית 1" },
  { src: image2, alt: "קוסמטיקה טיפולית 2" },
  { src: image3, alt: "קוסמטיקה טיפולית 3" },
  { src: image4, alt: "קוסמטיקה טיפולית 4" },
  { src: image5, alt: "קוסמטיקה טיפולית 5" },
  { src: image6, alt: "קוסמטיקה טיפולית 6" },
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
          {galleryImages.map((image, index) => (
            <ScrollReveal key={index} className={`delay-${index * 100}`}>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
