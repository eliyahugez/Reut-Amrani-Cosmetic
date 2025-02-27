import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  className?: string;
  alt?: string;
}

export default function OptimizedImage({
  src,
  className = "",
  alt = "Image",
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Only observe elements that aren't loaded yet
    if (isLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          // Once we start loading, no need to keep observing
          if (imgRef.current) {
            observer.unobserve(imgRef.current);
          }
        }
      },
      {
        rootMargin: "200px 0px", // Start loading when image is 200px from viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [isLoaded]);

  // Reset error state when src changes and force immediate loading
  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
    setIsInView(true); // Force immediate loading when src changes
  }, [src]);

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setHasError(true);
    setIsLoaded(true); // Consider the loading process complete even though it failed
    
    // Try to reload the image with a cache-busting parameter
    if (imgRef.current && !src.includes('?')) {
      const cacheBustSrc = `${src}?t=${new Date().getTime()}`;
      imgRef.current.src = cacheBustSrc;
    }
  };

  // Force image to be visible immediately if we're in development mode
  useEffect(() => {
    // Set a small timeout to ensure the component is mounted
    const timer = setTimeout(() => {
      if (!isInView && !isLoaded) {
        setIsInView(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [isInView, isLoaded]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {(isInView || isLoaded) && (
        <img
          ref={imgRef}
          src={hasError ? src : src} // Always try the original source first
          loading="lazy"
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`
            transition-opacity duration-500 
            ${isLoaded ? "opacity-100" : "opacity-0"}
            ${className}
          `}
        />
      )}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ animationDuration: "1.5s" }}
        />
      )}
    </div>
  );
}
