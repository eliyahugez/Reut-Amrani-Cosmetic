import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <div id="home" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[2s]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <ScrollReveal className="max-w-3xl px-4 space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            רעות עמרני
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            חוויית טיפוח יוקרתית ומקצועית בסטנדרטים הגבוהים ביותר
          </p>
          <button className="bg-[#C0A080] text-white px-10 py-4 rounded-full hover:bg-[#A88860] transition-all duration-300 transform hover:scale-105">
            קבעי תור עכשיו
          </button>
        </ScrollReveal>
      </div>
    </div>
  );
}
