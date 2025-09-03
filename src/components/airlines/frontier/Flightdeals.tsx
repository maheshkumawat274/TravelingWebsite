import React from "react";

const FlightDeals: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-36 bg-white py-10">
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#1A3E72] mb-2">
        Unlock the Best Flight Offers & Save More on Tickets
      </h1>

      {/* Updated on */}
      <p className="text-sm text-gray-700 mb-4">
        <span className="font-semibold">Updated on:</span> 1 May, 2025
      </p>

      {/* Description */}
      <p className="text-gray-800 leading-relaxed">
        Searching for low-cost flights? Our Airline Consolidator brings you affordable fares with frequent promotions and exclusive savings. Enjoy a smooth, fast, and stress-free booking experience—ensuring you grab the lowest rates and travel smart without stretching your budget.
      </p>
    </div>
  );
};

export default FlightDeals;
