import React from "react";

const DeltaFlights: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-36 py-10 bg-white">
      {/* Title with Badge */}
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-2xl font-bold text-[#1A3E72]">
          Fly with Delta Air Lines for Unmatched Comfort
        </h1>
        <span className="bg-red-800 text-white text-xs px-2 py-1 rounded">
          SkyMiles®
        </span>
      </div>

      {/* Updated Date */}
      <p className="text-sm text-gray-700 mb-4">
        <span className="font-semibold">Updated on:</span> 1 May, 2025
      </p>

      {/* Description */}
      <p className="text-gray-800 leading-relaxed">
        Searching for premium flight choices across the globe? Delta Air Lines delivers affordable fares combined with a vast worldwide network. With a seamless, fast, and stress-free booking process, you can secure the right deal and travel with complete confidence.
      </p>
    </div>
  );
};

export default DeltaFlights;
