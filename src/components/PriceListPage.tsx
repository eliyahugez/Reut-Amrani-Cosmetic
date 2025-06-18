import React from "react";
import price1 from "/assets/priceNew1.png.jpg";
import price2 from "/assets/priceNew2.jpg";

const PriceListPage: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center py-12 min-h-screen"
      style={{ background: "#ede9fe" }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 animate-fade-in">
        מחירונים
      </h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center px-2 md:px-0">
        <div className="transition-transform duration-500 hover:scale-105 group relative w-full flex justify-center">
          <img
            src={price1}
            alt="מחירון 1"
            className="rounded-lg shadow-lg w-4/5 md:w-full object-contain bg-gray group-hover:brightness-110 group-hover:contrast-125 group-hover:rotate-1 animate-fade-out group-hover:shadow-xl shadow-black"
          />
        </div>
        <div className="transition-transform duration-500 hover:scale-105 group relative w-full flex justify-center">
          <img
            src={price2}
            alt="מחירון 2"
            className="rounded-lg shadow-lg w-4/5 md:w-full object-contain bg-gray group-hover:brightness-110 group-hover:contrast-125 group-hover:-rotate-1 animate-fade-in group-hover:shadow-xl shadow-black"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceListPage;
