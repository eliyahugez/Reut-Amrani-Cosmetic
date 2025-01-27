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
    title:"טיפול פנים",
    description: "טיפול פנים הוצאת שחורים עם תוצאות מדהימות",
  },
  {
    image: image2,
    title:"טיפול פנים",
    description: "טיפול פנים מקצועי עם תוצאות מדהימות",
  },
  {
    image: image3,
    title:"טיפול פנים",
    description: "טיפול פנים - אקנה - תוצאות מרשימות",
  },
  {
    image: image4,
    title:"טיפול פנים",
    description: "טיפול פנים - שיקום העור",
  },
  {
    image: image5,
    title:"טיפול פנים",
    description: "טיפול פנים - הבהרת כתמים",
  },
  {
    image: image6,
    title:"טיפול פנים",
    description: "טיפול פנים - אנטי אייג'ינג",
  },
];

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % transformations.length);
    }, 2500); // החלפת תמונה כל 5 שניות

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif text-center text-amber-900 mb-16">
            גלריית תוצאות
          </h2>
        </ScrollReveal>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-amber-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* תמונה */}
            <div className="relative h-96 overflow-hidden rounded-xl hover:scale-105 hover:rounded-2xl hover:shadow-2xl transition-all duration-300">
              {transformations.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={`Transformation ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* תיאור */}
            <div className="text-center md:text-right">
              <p className="text-2xl text-amber-800 font-serif text-center inset-0 leading-relaxed">
                {transformations[currentIndex].title}
              </p>
              <p className="text-2xl text-amber-800 leading-relaxed">
                {transformations[currentIndex].description}
              </p>
            </div>
          </div>

          {/* ניווט בין תמונות */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3 space-x-reverse">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-amber-600" : "bg-amber-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}