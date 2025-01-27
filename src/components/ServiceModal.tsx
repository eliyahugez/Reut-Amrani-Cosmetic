import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
// import VimeoVideoLazy from './VimeoVideoLazy';
import services, { Service } from './serviceData'; // ייבוא הנתונים והטיפוסים

const ServiceModal = ({ service, onClose }: { service: Service; onClose: () => void }) => {
  const renderVideo = () => {
    switch (service.video.type) {
      case 'vimeo':
        return (
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              src={`https://player.vimeo.com/video/${service.video.url.split('/').pop()}`}
              title={service.title}
              allow="autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="rounded-lg shadow-md"
              allowFullScreen
            />
          </div>
        );

      case 'youtube':
        return (
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              src={`https://www.youtube.com/embed/${service.video.url.split('v=')[1]}`}
              title={service.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="rounded-lg shadow-md"
              allowFullScreen
            />
          </div>
        );

      case 'local':
        return (
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <video
              controls
              className="w-full h-full rounded-lg shadow-md"
              poster={service.video.thumbnail}
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
      className="fixed  inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-pink-100 bg-opacity-75 rounded-lg shadow-xl max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <button
          onClick={onClose}
          className="absolute animate-spin top-4 right-4 p-2 rounded-full hover:bg-red-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center p-8">
          <h2 className="text-3xl font-bold mb-6 text-primary-600">{service.title}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {renderVideo()}

              
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">מחירון</h3>
                <div className="space-y-3">
                  {service.pricing.map((item) => (
                    <div
                      key={item.description}
                      className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
                    >
                      <span>{item.description}</span>
                      <span className="font-medium text-primary-500">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">המלצה</h3>
                <blockquote className="italic text-gray-600 mb-2">
                  "{service.testimonial.text}"
                </blockquote>
                <img
                className='w-full h-auto mx-auto rounded-3xl shadow-xl  object-cover pt-4'
                src={service.testimonial.image} alt={service.testimonial.author} />
                <p className="text-right font-medium">- {service.testimonial.author}</p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">טכנולוגיות בשימוש</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="bg-gray-100 text-center px-3 py-1 rounded-full text-sm"
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
    <div 
    id='services'
    className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">שירותים שלי</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedService(service)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover"
                />
              </div>
              <div className="p-6  bg-amber-100">
                <h2 className="text-2xl px-4 py-2 font-semibold mb-2 text-amber-800">
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
}

export default ServicesPage;