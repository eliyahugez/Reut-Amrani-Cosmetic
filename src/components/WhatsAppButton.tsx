import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // ייבוא אייקון WhatsApp מ-React Icons

const WhatsAppButton = () => {
  const phoneNumber = "972527456181"; // מספר הטלפון שלך
  const message =
    "היי, הגעתי דרך האתר (: אני מתעניינת בטיפולים אצלך בקליניקה אשמח לשמוע פרטים! ";
  // יצירת קישור ל-WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors animate-bounce"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
