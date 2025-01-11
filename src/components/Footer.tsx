import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">צרו קשר</h3>
            <div className="space-y-2">
              <a href="tel:+972123456789" className="flex items-center gap-2 hover:text-[#C0A080]">
                <Phone size={18} />
                <span>123-456-789</span>
              </a>
              <a href="mailto:info@beauty.com" className="flex items-center gap-2 hover:text-[#C0A080]">
                <Mail size={18} />
                <span>info@beauty.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>רחוב הראשי 123, תל אביב</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">שעות פעילות</h3>
            <div className="space-y-2">
              <p>ראשון - חמישי: 9:00 - 20:00</p>
              <p>שישי: 9:00 - 14:00</p>
              <p>שבת: סגור</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">עקבו אחרינו</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#C0A080]">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#C0A080]">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Beauty Studio. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}