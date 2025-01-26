import React from "react";

type Product = {
  name: string;
  price: string;
  description: string;
  src: string;
};

export default function Products() {
  const products: Product[] = [
    {
      src: "https://cdn.pixabay.com/photo/2018/01/15/14/05/cosmetics-3084006_1280.jpg",
      name: "קרם פנים",
      price: "₪199",
      description: "קרם לחות עשיר",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/01/15/14/05/cosmetics-3084006_1280.jpg",
      name: "סרום",
      price: "₪299",
      description: "סרום אנטי אייג'ינג",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/01/15/14/05/cosmetics-3084006_1280.jpg",
      name: "מסכת פנים",
      price: "₪149",
      description: "מסכה מזינה",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/01/15/14/05/cosmetics-3084006_1280.jpg",
      name: "מסכת פנים",
      price: "₪149",
      description: "מסכה מזינה",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/01/15/14/05/cosmetics-3084006_1280.jpg",
      name: "מסכת פנים",
      price: "₪149",
      description: "מסכה מזינה",
    },
  ];

  return (
    <div  className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.map((product, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
          <img
            alt={product.name}
            src={product.src}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-xl font-bold text-purple-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
}
