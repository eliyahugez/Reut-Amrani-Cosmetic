import React, { useState } from "react";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navCloseClass ="block px-3 py-2 text-gray-700 hover:text-[#C0A080] hover:animate-pulse hover:text-lg hover:duration-300 ";
  const navClass ="text-gray-700 hover:text-[#C0A080] transition-colors hover:animate-bounce hover:duration-300";
  return (
    <nav className="fixed w-full bg-amber-100/90 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="font-serif text-2xl text-gray-800">
            <img
            className="max-h-16 w-24 overflow-hidden "
            src="https://i.ibb.co/jkzngBK/9c759548-1da6-4002-89d9-5652bfd4d765.jpg" alt="logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center  space-x-reverse  space-x-4 ">
            <a
              href="#home"
              className={navClass}
            >
              בית
            </a>
            <a
              href="#services"
              className={navClass}
            >
              שירותים
            </a>
            <a
              href="#gallery"
              className={navClass}
            >
              גלריה
            </a>
            <a
              href="#testimonials"
              className={navClass}
            >
              המלצות
            </a>
            <a
              href="#contact"
              className={navClass}
            >
              צור קשר
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#C0A080] transition-colors animate-bounce"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 font-sans pt-2 pb-3 rounded-md space-y-1 sm:px-3 bg-amber-100/90">
            <a
              href="#home"
              className={navCloseClass}
            >
              בית
            </a>
            <a
              href="#services"
              className={navCloseClass}
            >
              שירותים
            </a>
            <a
              href="#gallery"
              className={navCloseClass}
            >
              גלריה
            </a>
            <a
              href="#testimonials"
              className={navCloseClass}
            >
              המלצות
            </a>
            <a
              href="#contact"
              className={navCloseClass}
            >
              צור קשר
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
