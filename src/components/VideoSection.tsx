import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function VideoSection() {
  return (
    <section className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        // poster="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        src="https://videos.pexels.com/video-files/3998263/3998263-uhd_2732_1440_25fps.mp4"
        // type="video/mp4"
      >
        {/* <source
        />
        Your browser does not support the video tag. */}
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative h-full flex items-center justify-center text-center">
        <ScrollReveal className="max-w-3xl px-4">
          <h2 className="text-3xl md:text-5xl font-serif text-amber-200 mb-8">
            הטיפולים המתקדמים ביותר
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            אנו משתמשים בטכנולוגיות החדישות ביותר ובמוצרים האיכותיים ביותר כדי
            להעניק לך את התוצאות הטובות ביותר
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
