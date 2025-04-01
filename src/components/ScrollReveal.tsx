import React, { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade"
  | "slide-up"
  | "slide-right"
  | "slide-left"
  | "zoom"
  | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationType;
  duration?: number;
  distance?: number;
  mobile?: boolean;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  animation = "slide-up",
  duration = 700,
  distance = 50,
  mobile = true,
  once = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Skip animation on mobile if mobile is false
    if (isMobile && !mobile) {
      setIsVisible(true);
      return;
    }

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
            // Once revealed, no need to keep observing if once is true
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // If not using 'once', hide the element when it's not in view
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Check if the element is already in view on initial render
    const checkInitialVisibility = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInViewport =
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) &&
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
  }, [delay, mobile, isMobile, once]);

  // Generate animation classes based on the animation type
  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade":
          return "opacity-0";
        case "slide-up":
          return `opacity-0 translate-y-[${distance}px]`;
        case "slide-right":
          return `opacity-0 -translate-x-[${distance}px]`;
        case "slide-left":
          return `opacity-0 translate-x-[${distance}px]`;
        case "zoom":
          return "opacity-0 scale-95";
        case "none":
          return "";
        default:
          return "opacity-0 translate-y-[50px]";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100";
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
