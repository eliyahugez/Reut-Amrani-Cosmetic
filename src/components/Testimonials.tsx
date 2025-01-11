import React from 'react';
import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    name: "רונית כהן",
    text: "שירות מדהים ומקצועי! התוצאות עלו על כל הציפיות שלי.",
    rating: 5
  },
  {
    name: "מיכל לוי",
    text: "הטיפולים תמיד מדויקים ומותאמים אישית. ממליצה בחום!",
    rating: 5
  },
  {
    name: "שירה אברהם",
    text: "המקום הכי מקצועי שהייתי בו. תוצאות מדהימות!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16">
            מה הלקוחות אומרים
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} className={`delay-${index * 200}`}>
              <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#C0A080] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 text-center leading-relaxed">{testimonial.text}</p>
                <p className="text-[#C0A080] font-medium text-center text-xl">{testimonial.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}