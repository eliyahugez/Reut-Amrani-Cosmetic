import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
// import VimeoVideoLazy from './VimeoVideoLazy';
import services, { Service } from "./serviceData"; // ייבוא הנתונים והטיפוסים

const ServiceModal = ({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) => {
  const renderVideo = () => {
    switch (service.video.type) {
      case "vimeo":
        return (
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              src={`https://player.vimeo.com/video/${service.video.url
                .split("/")
                .pop()}`}
              title={service.title}
              allow="autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="rounded-lg shadow-md"
              loading="lazy"
              allowFullScreen
            />
          </div>
        );

      case "youtube":
        return (
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              src={`https://www.youtube.com/embed/${
                service.video.url.split("v=")[1]
              }`}
              title={service.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="rounded-lg shadow-md"
              loading="lazy"
              allowFullScreen
            />
          </div>
        );

      case "local":
        return (
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <video
              controls
              className="w-full h-full rounded-lg shadow-md"
              poster={service.video.thumbnail}
              preload="none"
              autoPlay
              loop
            >
              <source src={service.video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-pink-100 bg-opacity-75 rounded-lg shadow-xl w-full max-w-4xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-600 text-center">
            {service.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">{renderVideo()}</div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">מחירון</h3>
                <div className="space-y-3">
                  {service.pricing.map((item) => (
                    <div
                      key={item.description}
                      className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <span className="text-sm md:text-base">
                        {item.description}
                      </span>
                      <span className="font-medium text-primary-500 text-sm md:text-base">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">המלצה</h3>
                <blockquote className="italic text-gray-600 mb-4">
                  "{service.testimonial.text}"
                </blockquote>
                <img
                  className="w-full h-auto rounded-3xl shadow-xl object-cover"
                  src={service.testimonial.image}
                  alt={service.testimonial.author}
                  loading="lazy"
                />
                <p className="text-right font-medium mt-4">
                  - {service.testimonial.author}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  טכנולוגיות בשימוש
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div id="services" className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          שירותים שלי
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedService(service)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-amber-100">
                <h2 className="text-xl md:text-2xl font-semibold text-amber-800">
                  {service.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
