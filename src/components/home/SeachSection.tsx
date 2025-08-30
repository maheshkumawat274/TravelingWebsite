import React, { useState } from "react";

type TripType = "round" | "oneway" | "class";

const HomeSearchSection: React.FC = () => {
  const [tripType, setTripType] = useState<TripType>("round");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration point
    // Send form data via API call
    console.log("Form submitted");
  };

  return (
    <div className="relative w-full bg-cover bg-center h-[80vh] px-4 flex items-center justify-center"
         style={{ backgroundImage: "url('/imgs/home.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl">
        <h1 className="text-xl sm:text-4xl font-bold mb-2">Find & Book Your Perfect Trip</h1>
        <p className="text-sm sm:text-lg mb-6">
          Discover amazing deals on flights, hotels, and vacation packages around the world
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-3 mb-6">
          <button
            onClick={() => setTripType("round")}
            className={`px-4 py-2 rounded-t-md text-sm sm:text-lg cursor-pointer font-medium ${
              tripType === "round" ? "bg-white text-gray-800" : "bg-gray-700"
            }`}
          >
            Round Trip
          </button>
          <button
            onClick={() => setTripType("oneway")}
            className={`px-4 py-2 rounded-t-md text-sm sm:text-lg cursor-pointer font-medium ${
              tripType === "oneway" ? "bg-white text-gray-800" : "bg-gray-700"
            }`}
          >
            One Way
          </button>
          <button
            onClick={() => setTripType("class")}
            className={`px-4 py-2 rounded-t-md text-sm sm:text-lg cursor-pointer font-medium ${
              tripType === "class" ? "bg-white text-gray-800" : "bg-gray-700"
            }`}
          >
            Booking Class
          </button>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white opacity-70 rounded-xl shadow-md p-2 sm:p-6 flex flex-wrap gap-4 items-center justify-center text-gray-800"
        >
          {/* Common fields */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">From</label>
            <input
              type="text"
              placeholder="From City or Airport"
              className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-30 sm:w-40"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">To</label>
            <input
              type="text"
              placeholder="To City or Airport"
              className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-30 sm:w-40"
              required
            />
          </div>

          {/* Conditional fields */}
          {(tripType === "round" || tripType === "oneway") && (
            <div className="flex flex-col">
              <label className="text-sm mb-1">Departure</label>
              <input type="date" className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-30 sm:w-40" required />
            </div>
          )}

          {tripType === "round" && (
            <div className="flex flex-col">
              <label className="text-sm mb-1">Return</label>
              <input type="date" className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-30 sm:w-40" required />
            </div>
          )}

          <div className="flex flex-col">
            <label className="text-sm mb-1">Passengers</label>
            <select className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-30 sm:w-40">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>1 Child</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Class</label>
            <select className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-30 sm:w-40">
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>

          {/* Booking Class Tab extra fields */}
          {tripType === "class" && (
            <div className="flex flex-col">
              <label className="text-sm mb-1">Preferred Airline</label>
              <input
                type="text"
                placeholder="Enter Airline"
                className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-30 sm:w-40"
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#1A3E72] hover:bg-blue-900 text-white px-6 py-2 text-[12px] sm:text-md rounded-md font-medi w-30usm:m mt-4 cursor-pointer"
          >
            Search Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeSearchSection;
