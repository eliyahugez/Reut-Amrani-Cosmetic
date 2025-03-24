import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import feedback1 from "../../assets/feedBack/IMG_7711.png";
import feedback2 from "../../assets/feedBack/feedbackLaizer.jpg";
import feedback3 from "../../assets/feedBack/IMG_7713.png";
import feedback4 from "../../assets/feedBack/IMG_7714.png";
import feedback5 from "../../assets/feedBack/IMG_7715.png";
import feedback6 from "../../assets/feedBack/IMG_7716.png";
import feedback7 from "../../assets/feedBack/IMG_7717.png";
import feedback8 from "../../assets/feedBack/IMG_7718.png";
import feedback9 from "../../assets/feedBack/IMG_7719.png";
import feedback10 from "../../assets/feedBack/IMG_7720.png";

const testimonials = [
  {
    name: "מיכל לוי",
    text: "הטיפולים תמיד מדויקים ומותאמים אישית. ממליצה בחום!",
    rating: 5,
    image: feedback2,
    alt: "Review 2",
  },
  {
    name: "שירה אברהם",
    text: "המקום הכי מקצועי שהייתי בו. תוצאות מדהימות!",
    rating: 5,
    image: feedback3,
    alt: "Review 3",
  },
  {
    name: "שירן גז ",
    text: "המקום הכי מקצועי שהייתי בו. תוצאות מדהימות!",
    rating: 5,
    image: feedback6,
    alt: "Review 3",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-mono text-center font-[var(--heading-font)] text-amber-800 mb-16">
            חווית הלקוחות שלי
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} className={`delay-${index * 200}`}>
              <div className="bg-white p-3 rounded-3xl shadow-lg transform transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-[#C0A080] fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-md mb-6 text-center leading-relaxed">
                  {testimonial.text}
                </p>
                <p className="text-[#C0A080] font-medium text-center text-xl">
                  {testimonial.name}
                </p>
                <div className="bg-[#C0A080] bg-opacity-20 p-2 rounded-3xl transform transition-all duration-300 hover:translate-y-2 hover:shadow-lg">
                  <img
                    className="w-full h-auto mx-auto rounded-3xl shadow-xl  object-cover pt-4"
                    src={testimonial.image}
                    alt={testimonial.alt}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
