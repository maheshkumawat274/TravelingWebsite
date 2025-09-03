import React from "react";

const SouthwestDeals: React.FC = () => {
  return (
    <div className="w-full py-10 px-4 md:px-36 mx-auto bg-white">
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#1A3E72] mb-2">
        Grab Exclusive Flight Discounts & Travel for Less <span className="text-red-500">❤️</span>
      </h1>

      {/* Updated Date */}
      <p className="text-sm text-gray-700 mb-4">
        <span className="font-semibold">Updated on:</span> 1 May, 2025
      </p>

      {/* Description */}
      <p className="text-gray-800 leading-relaxed">
        Hunting for affordable flights? Our Airline Partner provides unbeatable fares with transparent pricing—absolutely no extra charges. Enjoy a fast, smooth, and worry-free booking process with zero hidden costs, so you can lock in the best price and travel stress-free.
      </p>
    </div>
  );
};

export default SouthwestDeals;
