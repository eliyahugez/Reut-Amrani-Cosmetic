import React from "react";
import price1 from "../../assets/price1.png";
import price2 from "../../assets/price2.png";
import ScrollReveal from "./ScrollReveal";

type PricingItem = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
};

export default function PricingComponent() {
  const pricingItems: PricingItem[] = [
    {
      id: 1,
      title: "חבילת בסיס",
      description: "פתרון טיפוח יסודי",
      price: "₪199",
      image: price1,
      features: ["קרם לחות בסיסי", "ניקוי פנים", "מסכה שבועית"],
    },
    {
      id: 2,
      title: "חבילת פרימיום",
      description: "טיפוח מתקדם ומלא",
      price: "₪399",
      image: price2,
      features: [
        "קרם לחות מתקדם",
        "סרום אנטי-אייג׳ינג",
        "מסכות מתקדמות",
        "טיפול עיניים",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Images Section */}
          <div className="grid grid-cols-1 gap-6">
            {pricingItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg mx-auto"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-content h-96 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="grid grid-cols-1 gap-6">
            {pricingItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-amber-600">
                      {item.title}
                    </h3>
                    <span className="text-2xl font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  <ul className="space-y-2 mb-4">
                    {item.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-amber-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    window.location.href = `https://wa.me/972527456181?text=היי , ראיתי באתר את ה${item.title} אשמח לשמוע עוד פרטים בבקשה  `;
                  }}
                  className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition-colors mt-auto"
                >
                  בחר חבילה
                </button>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
