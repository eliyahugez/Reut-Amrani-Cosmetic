import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 20);

      // Hide/show navbar based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navCloseClass =
    "block w-full px-4 py-3 text-gray-700 hover:text-[#C0A080] hover:bg-amber-50 rounded-md transition-all duration-300 relative overflow-hidden";
  const navClass =
    "text-gray-700 hover:text-[#C0A080] transition-all duration-300 px-4 py-2 rounded-md hover:bg-amber-50 relative overflow-hidden";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 transform ${
        scrolled
          ? "bg-amber-100/95 shadow-lg backdrop-blur-sm"
          : "bg-amber-100/80"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img
              className="h-14 w-auto transition-transform duration-300 hover:scale-105 animate-float"
              src="https://i.ibb.co/jkzngBK/9c759548-1da6-4002-89d9-5652bfd4d765.jpg"
              alt="רעות עמרני - קוסמטיקה"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className={`${navClass} hover:animate-pulse`}>
              בית
            </a>
            <a href="#services" className={`${navClass} hover:animate-pulse`}>
              שירותים
            </a>
            <a href="#gallery" className={`${navClass} hover:animate-pulse`}>
              גלריה
            </a>
            <a
              href="#testimonials"
              className={`${navClass} hover:animate-pulse`}
            >
              המלצות
            </a>
            <a href="#contact" className={`${navClass} hover:animate-pulse`}>
              צור קשר
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#C0A080] hover:bg-amber-50 transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="animate-fade-in" />
              ) : (
                <Menu size={24} className="animate-fade-in" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-3 space-y-2 bg-amber-100/95 shadow-lg backdrop-blur-sm">
          <a
            href="#home"
            className={`${navCloseClass} ${
              isOpen ? "animate-slide-in-right" : ""
            }`}
            style={{ transitionDelay: "100ms" }}
            onClick={() => setIsOpen(false)}
          >
            בית
          </a>
          <a
            href="#services"
            className={`${navCloseClass} ${
              isOpen ? "animate-slide-in-right" : ""
            }`}
            style={{ transitionDelay: "150ms" }}
            onClick={() => setIsOpen(false)}
          >
            שירותים
          </a>
          <a
            href="#gallery"
            className={`${navCloseClass} ${
              isOpen ? "animate-slide-in-right" : ""
            }`}
            style={{ transitionDelay: "200ms" }}
            onClick={() => setIsOpen(false)}
          >
            גלריה
          </a>
          <a
            href="#testimonials"
            className={`${navCloseClass} ${
              isOpen ? "animate-slide-in-right" : ""
            }`}
            style={{ transitionDelay: "250ms" }}
            onClick={() => setIsOpen(false)}
          >
            המלצות
          </a>
          <a
            href="#contact"
            className={`${navCloseClass} ${
              isOpen ? "animate-slide-in-right" : ""
            }`}
            style={{ transitionDelay: "300ms" }}
            onClick={() => setIsOpen(false)}
          >
            צור קשר
          </a>
        </div>
      </div>
    </nav>
  );
}
