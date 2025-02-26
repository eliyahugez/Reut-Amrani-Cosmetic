import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif mb-6 text-amber-100">צרו קשר</h3>
            <div className="space-y-4">
              <a 
                href="tel:+972123456789" 
                className="flex items-center gap-3 hover:text-amber-200 transition-colors duration-300"
                aria-label="Call us"
              >
                <Phone size={20} />
                <span>123-456-789</span>
              </a>
              <a 
                href="mailto:info@beauty.com" 
                className="flex items-center gap-3 hover:text-amber-200 transition-colors duration-300"
                aria-label="Email us"
              >
                <Mail size={20} />
                <span>info@beauty.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>רחוב הראשי 123, תל אביב</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-serif mb-6 text-amber-100">שעות פעילות</h3>
            <div className="space-y-4">
              <p className="hover:text-amber-200 transition-colors duration-300">ראשון - חמישי: 9:00 - 20:00</p>
              <p className="hover:text-amber-200 transition-colors duration-300">שישי: 9:00 - 14:00</p>
              <p className="hover:text-amber-200 transition-colors duration-300">שבת: סגור</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-serif mb-6 text-amber-100">עקבו אחרינו</h3>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="hover:text-amber-200 transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={28} />
              </a>
              <a 
                href="#" 
                className="hover:text-amber-200 transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={28} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 hover:text-amber-200 transition-colors duration-300">
            © {new Date().getFullYear()} Beauty Studio. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}