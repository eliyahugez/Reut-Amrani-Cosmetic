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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "200px", // Increased margin for earlier loading
      threshold: 0.1, // Trigger when 10% of the video is visible
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
            // Only play if already loaded
            if (!isVideo1Loading) video.play().catch(() => {});
          } else if (video === video2Ref.current) {
            setIsVideo2Visible(true);
            if (!isVideo2Loading) video.play().catch(() => {});
          }
        } else {
          // Pause when not visible
          if (video === video1Ref.current) {
            setIsVideo1Visible(false);
            video.pause();
          } else if (video === video2Ref.current) {
            setIsVideo2Visible(false);
            video.pause();
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
  }, [isVideo1Loading, isVideo2Loading]);

  // Handle successful video loading
  const handleVideo1Loaded = () => {
    setIsVideo1Loading(false);
    // Start playing if already visible
    if (isVideo1Visible && video1Ref.current) {
      video1Ref.current.play().catch(() => {});
    }
  };

  const handleVideo2Loaded = () => {
    setIsVideo2Loading(false);
    // Start playing if already visible
    if (isVideo2Visible && video2Ref.current) {
      video2Ref.current.play().catch(() => {});
    }
  };

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
                preload="none"
                onLoadedData={handleVideo1Loaded}
                onError={() => setIsVideo1Loading(false)}
              >
                {/* Lower quality version for mobile */}
                <source
                  src="https://res.cloudinary.com/djcbwaqfj/video/upload/q_auto:low,f_auto,c_limit,w_480/v1740570024/Reut%20Cosmetics/jwzxdwewyrjxl9q79a4d.mp4"
                  type="video/mp4"
                  media="(max-width: 768px)"
                />
                {/* Medium quality for most devices */}
                <source
                  src="https://res.cloudinary.com/djcbwaqfj/video/upload/q_auto:good,f_auto,c_limit,w_720/v1740570024/Reut%20Cosmetics/jwzxdwewyrjxl9q79a4d.mp4"
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
                preload="none"
                onLoadedData={handleVideo2Loaded}
                onError={() => setIsVideo2Loading(false)}
              >
                {/* Lower quality version for mobile */}
                <source
                  src="https://res.cloudinary.com/djcbwaqfj/video/upload/q_auto:low,f_auto,c_limit,w_480/v1740666405/Reut%20Cosmetics/hgjfpbwvsafbgxryw0cw.mp4"
                  type="video/mp4"
                  media="(max-width: 768px)"
                />
                {/* Medium quality for most devices */}
                <source
                  src="https://res.cloudinary.com/djcbwaqfj/video/upload/q_auto:good,f_auto,c_limit,w_720/v1740666405/Reut%20Cosmetics/hgjfpbwvsafbgxryw0cw.mp4"
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
