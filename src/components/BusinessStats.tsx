import React, { useEffect, useState } from "react";

interface StatProps {
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedStat: React.FC<StatProps> = ({ label, value, suffix = "%", duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md min-w-[120px]">
      <span className="text-4xl font-bold text-purple-700 drop-shadow-lg">
        {count}
        {suffix}
      </span>
      <span className="text-lg text-gray-700 mt-2 text-center font-semibold">
        {label}
      </span>
    </div>
  );
};

const BusinessStats: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 bg-purple-100">
      <h2 className="text-2xl font-bold mb-8 text-purple-800">המספרים שלנו</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        <AnimatedStat label="לקוחות חוזרים" value={92} />
        <AnimatedStat label="לקוחות מרוצים" value={98} />
        <AnimatedStat label="התלוננו על כאב" value={1} suffix="%" />
      </div>
    </div>
  );
};

export default BusinessStats;
