import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const VideoGallery = () => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [isVideo1Loading, setIsVideo1Loading] = useState(true);
  const [isVideo2Loading, setIsVideo2Loading] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target as HTMLVideoElement;
          video.play();
        } else {
          const video = entry.target as HTMLVideoElement;
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (video1Ref.current) observer.observe(video1Ref.current);
    if (video2Ref.current) observer.observe(video2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full min-h-[80%] py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[80%]">
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
                preload="metadata"
                onLoadedData={() => setIsVideo1Loading(false)}
                onError={() => setIsVideo1Loading(false)}
              >
                <source
                  src="https://res.cloudinary.com/djcbwaqfj/video/upload/v1740570024/Reut%20Cosmetics/jwzxdwewyrjxl9q79a4d.mp4"
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
                preload="metadata"
                onLoadedData={() => setIsVideo2Loading(false)}
                onError={() => setIsVideo2Loading(false)}
              >
                <source
                  src="https://res.cloudinary.com/djcbwaqfj/video/upload/v1740666405/Reut%20Cosmetics/hgjfpbwvsafbgxryw0cw.mp4"
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
