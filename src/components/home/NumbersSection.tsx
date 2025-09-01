import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 2000000, suffix: "+", label: "Happy Customers" },
  { value: 600, suffix: "+", label: "Airlines" },
  { value: 1000, suffix: "+", label: "Destinations" },
  { value: 5, suffix: "+", label: "Experience" },
];

const NumbersSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 👈 animation sirf ek bar chale
    threshold: 0.3,    // 30% section visible hone par trigger hoga
  });

  return (
    <section ref={ref} className="bg-[#1A3E72] py-6 sm:py-16 px-4 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Numbers
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl md:text-4xl font-extrabold">
              {inView ? (
                <CountUp end={stat.value} duration={3} separator="," />
              ) : (
                "0"
              )}
              {stat.suffix}
            </h3>
            <p className="mt-2 text-lg text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumbersSection;
