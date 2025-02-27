import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay before showing the element if specified
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true);
              }, delay);
            } else {
              setIsVisible(true);
            }
            // Once revealed, no need to keep observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Check if the element is already in view on initial render
    const checkInitialVisibility = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInViewport = 
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0;
          
        if (isInViewport) {
          setIsVisible(true);
          return true;
        }
      }
      return false;
    };

    // Only observe if not already visible
    const isInitiallyVisible = checkInitialVisibility();
    if (!isInitiallyVisible && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={elementRef} 
      className={`transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}