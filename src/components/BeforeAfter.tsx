import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import image1 from "../../assets/b41.png";
import image2 from "../../assets/b42.png";
import image3 from "../../assets/b43.png";
import image4 from "../../assets/b44.png";
import image5 from "../../assets/b45.png";
import image6 from "../../assets/b46.png";

const transformations = [
  {
    image: image1,
    title: "ניקוי פנים עמוק",
    description: "טיפול פנים מקיף הכולל ניקוי עמוק וטיפול  שחורים",
  },
  {
    image: image2,
    title: "פיגמנטציה",
    description:
      "טיפול מתקדם להבהרת כתמי עור, שיקום והאחדת גוון העור. התוצאות נראות כבר אחרי הטיפול הראשון",
  },
  {
    image: image3,
    title: "טיפול באקנה",
    description:
      "טיפול ייעודי לאקנה הכולל ניקוי עמוק, איזון רמת השומן בעור והפחתת דלקתיות. התוצאות נראות כבר אחרי הטיפול הראשון",
  },
  {
    image: image4,
    title: "טיפול באקנה",
    description:
      "טיפול ייעודי לאקנה הכולל ניקוי עמוק, איזון רמת השומן בעור והפחתת דלקתיות. התוצאות נראות כבר אחרי הטיפול הראשון",
  },
  {
    image: image5,
    title: "טיפול בצלקות פוסט אקנה",
    description:
      "טיפול מתקדם לשיקום והחלקת צלקות אקנה. שילוב טכנולוגיות מתקדמות להמרצת ייצור קולגן וחידוש העור. תוצאות נראות לעין כבר לאחר מספר טיפולים",
  },

  {
    image: image6,
    title: "טיפול באקנה דלקתי",
    description:
      "טיפול ייעודי לאקנה הכולל ניקוי עמוק, איזון רמת השומן בעור והפחתת דלקתיות. התוצאות נראות כבר אחרי הטיפול הראשון",
  },
];

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % transformations.length);
    }, 3000); // Changed to 3 seconds for better user experience

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-serif text-center text-amber-900 mb-8 md:mb-16">
            גלריית תוצאות
          </h2>
        </ScrollReveal>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-amber-100 p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Image Container */}
            <div className="relative h-64 md:h-96 overflow-hidden rounded-xl hover:scale-105 hover:rounded-2xl hover:shadow-2xl transition-all duration-300">
              {transformations.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={`Transformation ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                />
              ))}
            </div>

            {/* Description Container */}
            <div className="text-center md:text-right p-4 md:p-0">
              <h3 className="text-3xl md:text-3xl text-amber-800 text-center  mb-4">
                {transformations[currentIndex].title}
              </h3>
              <p className="text-lg text-center  md:text-2xl text-amber-800 leading-relaxed">
                {transformations[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 space-x-reverse">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  index === currentIndex
                    ? "bg-amber-600"
                    : "bg-amber-300 hover:bg-amber-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
