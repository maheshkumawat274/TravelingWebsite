import React from "react";

const AlaskaFlightDeals: React.FC = () => {
  return (
    <div className="w-full mx-auto py-4 px-4 md:px-36 bg-white">
      {/* Title with Badge */}
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-2xl font-bold text-[#1A3E72]">
          Discover Flights with Alaska Airlines
        </h1>
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
          Mileage Plan®
        </span>
      </div>

      {/* Updated Date */}
      <p className="text-sm text-gray-700 mb-4">
        <span className="font-semibold">Updated on:</span> 1 May, 2025
      </p>

      {/* Description */}
      <p className="text-gray-800 leading-relaxed">
        Planning trips along the West Coast or beyond? Alaska Airlines brings you affordable fares backed by a wide-reaching network. With an easy, fast, and stress-free booking system, you’ll always find the right deal and travel with confidence.
      </p>
    </div>
  );
};

export default AlaskaFlightDeals;
