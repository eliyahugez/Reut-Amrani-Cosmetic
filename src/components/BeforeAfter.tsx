import React from "react";
import ScrollReveal from "./ScrollReveal";
import image1 from "../../assets/b41.png";
import image2 from "../../assets/b42.png";
import image3 from "../../assets/b43.png";
import image4 from "../../assets/b44.png";
import image5 from "../../assets/b45.png";
import image6 from "../../assets/b46.png";

const transformations = [
  {
    before:image1,
    after:image2
,    description: "טיפול פנים מקצועי עם תוצאות מדהימות",
  },
  {
    before:image3,
    after:image4
,    description: "טיפול פנים מקצועי עם תוצאות מדהימות",
  },
  {
    before:image5,
    after:image6
,    description: "טיפול פנים -אקנה-   ",
  },
  
];

export default function BeforeAfter() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16">
            לפני ואחרי
          </h2>
        </ScrollReveal>
        <div className="grid gap-20">
          {transformations.map((item, index) => (
            <ScrollReveal key={index}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="text-center text-gray-600 text-lg mb-2">
                        לפני
                      </p>
                      <div className="overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={item.before}
                          alt="Before"
                          className="image-zoom"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-center text-gray-600 text-lg mb-2">
                        אחרי
                      </p>
                      <div className="overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={item.after}
                          alt="After"
                          className="image-zoom"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
