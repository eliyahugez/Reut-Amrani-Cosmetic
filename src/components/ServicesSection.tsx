import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import price1 from "../../assets/b42.png";
import price2 from "../../assets/b43.png";

interface Service {
  title: string;
  items: ServiceItem[];
  image?: string; // הוספת תמיכה בתמונות אופציונליות
}

interface ServiceItem {
  description: string;
  price: string | number;
}

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: "טיפולי פנים",
      image: price1,
      items: [
        {
          description: "טיפול פנים בודד",
          price: "400₪",
        },
        {
          description: "סידרה של 6 טיפולים",
          price: "₪350 לטיפול",
        },
      ],
    },
    {
      title: "לייזר",
      image: price2,
      items: [
        {
          description: "איזור",
          price: "100-250₪",
        },
        {
          description: "כמה אזורים",
          price: "מחיר לפי צורך",
        },
        {
          description: "כל הגוף",
          price: "₪599",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 md:p-8 bg-amber-200 rounded-lg shadow-md my-12 md:my-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
        variants={itemVariants}
      >
        שירותים
      </motion.h2>

      <AnimatePresence>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className={`mb-10 ${
              index !== services.length - 1
                ? "border-b border-gray-200 pb-8"
                : ""
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {service.image && (
                <motion.div className="relative w-full md:w-48 h-48 flex-shrink-0 group">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg shadow-md border-2 border-amber-300 active:scale-105 active:shadow-2xl transition-transform duration-200"
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0 0 0 4px #fbbf24, 0 8px 32px #fbbf24aa",
                    }}
                    whileTap={{
                      scale: 1.12,
                      boxShadow: "0 0 0 8px #fbbf24, 0 8px 32px #fbbf24cc",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    loading="lazy"
                    style={{ cursor: "pointer" }}
                  />
                  {/* אייקון חץ עגול עם pulse בפינה */}
                  <div className="absolute top-2 right-2 bg-white rounded-full shadow-lg p-2 z-20 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fbbf24"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <circle cx="12" cy="12" r="12" fill="#fffde7" />
                      <path
                        d="M10 8l4 4-4 4"
                        stroke="#fbbf24"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                </motion.div>
              )}

              <div className="flex-1">
                <motion.h3
                  className="text-2xl font-semibold mb-4 text-primary-600 cursor-pointer hover:text-primary-700 flex items-center justify-between gap-2"
                  onClick={() =>
                    setSelectedService(selectedService === index ? null : index)
                  }
                  whileHover={{ scale: 1.02 }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={selectedService === index}
                >
                  <span>{service.title}</span>
                  <span
                    className="ml-2 text-lg md:text-xl text-amber-500 animate-wiggle select-none"
                    style={{ fontFamily: "monospace" }}
                  >
                    🖱️
                  </span>
                </motion.h3>

                <motion.div
                  className="space-y-4"
                  initial={false}
                  animate={{
                    height: selectedService === index ? "auto" : 0,
                    opacity: selectedService === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.items.map((item) => (
                    <motion.div
                      key={item.description}
                      className="flex justify-between items-center bg-amber-100 p-4 rounded-lg hover:bg-amber-50 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-lg text-gray-700">
                        {item.description}
                      </span>
                      <span className="text-lg font-medium text-primary-500">
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServicesSection;
