import React, { useEffect, useRef, useState } from "react";

interface StatProps {
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
  startCount: boolean;
}

const AnimatedStat: React.FC<StatProps> = ({
  label,
  value,
  suffix = "%",
  duration = 4000,
  startCount,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;
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
  }, [value, duration, startCount]);

  return (
    <div className="flex flex-col items-center p-4 bg-[#fff8e1] rounded-xl shadow-md min-w-[120px]">
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
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setStart(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center py-10 bg-[#fff8e1]"
    >
      <h2 className="text-2xl font-bold mb-8 text-purple-800">המספרים שלנו</h2>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <AnimatedStat label="לקוחות חוזרים" value={92} startCount={start} />
        <AnimatedStat label="לקוחות מרוצים" value={98} startCount={start} />
        <AnimatedStat
          label="התלוננו על כאב"
          value={1}
          suffix="%"
          startCount={start}
        />
      </div>
      <a
        href="https://wa.me/972527456181?text=היי,%20אני%20מעוניינת%20לקבוע%20ייעוץ חינם או %20לקבל%20מידע%20נוסף!"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 px-12 py-4 mt-6 bg-gradient-to-r from-yellow-300 to-yellow-400 text-purple-900 font-bold rounded-full shadow-lg button-pulse text-lg transition-transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        לקביעת ייעוץ חינם
      </a>
    </div>
  );
};

export default BusinessStats;
