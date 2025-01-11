import React from "react";
import ScrollReveal from "./ScrollReveal";

const transformations = [
  {
    before:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    after:
      "https://media.istockphoto.com/id/503028049/photo/theres-no-better-way-to-relax.jpg?s=2048x2048&w=is&k=20&c=ldfVf0XAC3_sjxgc7aulpBjSo_ni9FArmXbzIdrff-Q=",
    description: "טיפול פנים מקצועי עם תוצאות מדהימות",
  },
  {
    before:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    after:
      "https://media.istockphoto.com/id/503028049/photo/theres-no-better-way-to-relax.jpg?s=2048x2048&w=is&k=20&c=ldfVf0XAC3_sjxgc7aulpBjSo_ni9FArmXbzIdrff-Q=",
    description: "טיפול אנטי-אייג׳ינג מתקדם",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-32 bg-white">
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
