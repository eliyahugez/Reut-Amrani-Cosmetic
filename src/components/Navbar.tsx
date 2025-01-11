import React, { useState } from "react";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-serif text-2xl text-gray-800">
            רעות עמרני
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-[#C0A080] transition-colors"
            >
              בית {"  "}
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#C0A080] transition-colors"
            >
              שירותים
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-[#C0A080] transition-colors"
            >
              גלריה
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-[#C0A080] transition-colors"
            >
              המלצות
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#C0A080] transition-colors"
            >
              צור קשר
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-[#C0A080]"
            >
              בית
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-[#C0A080]"
            >
              שירותים
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 text-gray-700 hover:text-[#C0A080]"
            >
              גלריה
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-gray-700 hover:text-[#C0A080]"
            >
              המלצות
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-[#C0A080]"
            >
              צור קשר
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
