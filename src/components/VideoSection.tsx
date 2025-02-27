import React, { useState, useRef, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

export default function VideoSection() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVideoVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      {
        rootMargin: '200px 0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section ref={sectionRef} className="relative h-screen">
      {isVideoVisible && (
        <>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            poster="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            src="https://videos.pexels.com/video-files/3998263/3998263-uhd_2732_1440_25fps.mp4"
            onLoadedData={handleVideoLoaded}
            onError={() => setIsVideoLoaded(true)}
          />
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-amber-200 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </>
      )}
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
