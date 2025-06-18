import { useEffect, useRef, useState, lazy, Suspense } from "react";
import ScrollReveal from "./ScrollReveal";

const VideoGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [isVideo1Loading, setIsVideo1Loading] = useState(true);
  const [isVideo2Loading, setIsVideo2Loading] = useState(true);
  const [isVideo1Visible, setIsVideo1Visible] = useState(false);
  const [isVideo2Visible, setIsVideo2Visible] = useState(false);

  // Separate useEffect for intersection observer to avoid dependency issues
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "200px", // Increased margin for earlier loading
      threshold: 0.01, // Trigger when just 1% of the video is visible for earlier loading
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;

        if (entry.isIntersecting) {
          // Only set state if video is defined
          if (video === video1Ref.current) {
            setIsVideo1Visible(true);
            // Attempt to load the video
            if (video.preload === "none") {
              video.preload = "auto";
            }
          } else if (video === video2Ref.current) {
            setIsVideo2Visible(true);
            // Attempt to load the video
            if (video.preload === "none") {
              video.preload = "auto";
            }
          }
        } else {
          // Pause when not visible
          if (video === video1Ref.current) {
            setIsVideo1Visible(false);
            if (video.readyState >= 2) {
              // Only pause if it's loaded enough
              video.pause();
            }
          } else if (video === video2Ref.current) {
            setIsVideo2Visible(false);
            if (video.readyState >= 2) {
              // Only pause if it's loaded enough
              video.pause();
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (video1Ref.current) observer.observe(video1Ref.current);
    if (video2Ref.current) observer.observe(video2Ref.current);

    // Also observe the container for early loading
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Handle successful video loading
  const handleVideo1Loaded = () => {
    console.log("Video 1 loaded");
    setIsVideo1Loading(false);
    // Start playing if already visible
    if (isVideo1Visible && video1Ref.current) {
      video1Ref.current.play().catch((e) => {
        console.error("Error playing video 1:", e);
      });
    }
  };

  const handleVideo2Loaded = () => {
    console.log("Video 2 loaded");
    setIsVideo2Loading(false);
    // Start playing if already visible
    if (isVideo2Visible && video2Ref.current) {
      video2Ref.current.play().catch((e) => {
        console.error("Error playing video 2:", e);
      });
    }
  };

  // Effect to handle playing videos when visibility or loading state changes
  useEffect(() => {
    if (isVideo1Visible && !isVideo1Loading && video1Ref.current) {
      video1Ref.current.play().catch((e) => {
        console.error("Error playing video 1 after state change:", e);
      });
    }
  }, [isVideo1Visible, isVideo1Loading]);

  useEffect(() => {
    if (isVideo2Visible && !isVideo2Loading && video2Ref.current) {
      video2Ref.current.play().catch((e) => {
        console.error("Error playing video 2 after state change:", e);
      });
    }
  }, [isVideo2Visible, isVideo2Loading]);

  return (
    <section className="w-full min-h-[80%] py-16 bg-gray-50">
      <div ref={containerRef} className="container mx-auto px-4 max-w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          <ScrollReveal>
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl max-w-xs mx-auto transition-all duration-300 hover:rounded-none hover:scale-105">
              {isVideo1Loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <video
                ref={video1Ref}
                className="w-full h-full object-cover"
                playsInline
                muted
                loop
                preload="auto"
                autoPlay
                onLoadedData={handleVideo1Loaded}
                onCanPlay={handleVideo1Loaded}
                onError={(e) => {
                  console.error("Video 1 error:", e);
                  setIsVideo1Loading(false);
                }}
              >
                {/* Lower quality version for mobile */}
                <source
                  src="https://res.cloudinary.com/djcbwaqfj/video/upload/v1750272862/Reut%20Cosmetics/zhhp1mnsoywaxnfhbxwx.mp4"
                  type="video/mp4"
                  media="(max-width: 768px)"
                />
                {/* Medium quality for most devices */}
                <source
                  src="https://res.cloudinary.com/djcbwaqfj/video/upload/v1750272862/Reut%20Cosmetics/zhhp1mnsoywaxnfhbxwx.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl max-w-xs mx-auto transition-all duration-300 hover:rounded-none hover:scale-105">
              {isVideo2Loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <video
                ref={video2Ref}
                className="w-full h-full object-cover"
                playsInline
                muted
                loop
                preload="auto"
                autoPlay
                onLoadedData={handleVideo2Loaded}
                onCanPlay={handleVideo2Loaded}
                onError={(e) => {
                  console.error("Video 2 error:", e);
                  setIsVideo2Loading(false);
                }}
              >
                {/* Lower quality version for mobile */}
                <source
                  src="https://res.cloudinary.com/djcbwaqfj/video/upload/v1750272998/Reut%20Cosmetics/zp0cpxq1dz2rayslbgpy.mp4"
                  type="video/mp4"
                  media="(max-width: 768px)"
                />
                {/* Medium quality for most devices */}
                <source
                  src="https://res.cloudinary.com/djcbwaqfj/video/upload/v1750272998/Reut%20Cosmetics/zp0cpxq1dz2rayslbgpy.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
