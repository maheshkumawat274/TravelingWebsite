// import React, { useState, useRef, useEffect } from "react";
// import airports from "../../data/airports";
// import { Link } from "react-router-dom";

// type TripType = "round" | "oneway" | "class";

// interface Airport {
//   code: string;
//   name: string;
//   city: string;
//   country: string
// }

// const HomeSearchSection: React.FC = () => {
//   const [tripType, setTripType] = useState<TripType>("round");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [fromSuggestions, setFromSuggestions] = useState<Airport[]>([]);
//   const [toSuggestions, setToSuggestions] = useState<Airport[]>([]);
//   const [showFromSuggestions, setShowFromSuggestions] = useState(false);
//   const [showToSuggestions, setShowToSuggestions] = useState(false);
//   const [selectedFrom, setSelectedFrom] = useState<Airport | null>(null);
//   const [selectedTo, setSelectedTo] = useState<Airport | null>(null);

//   const fromRef = useRef<HTMLDivElement>(null);
//   const toRef = useRef<HTMLDivElement>(null);

//   // Close suggestions when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
//         setShowFromSuggestions(false);
//       }
//       if (toRef.current && !toRef.current.contains(event.target as Node)) {
//         setShowToSuggestions(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFrom(value);
    
//     if (value.length > 1) {
//       const filtered = airports.filter(
//         (airport) =>
//           airport.city.toLowerCase().includes(value.toLowerCase()) ||
//           airport.name.toLowerCase().includes(value.toLowerCase()) ||
//           airport.code.toLowerCase().includes(value.toLowerCase()) ||
//           airport.country.toLowerCase().includes(value.toLowerCase())
//       );
//       setFromSuggestions(filtered.slice(0, 5));
//       setShowFromSuggestions(true);
//     } else {
//       setFromSuggestions([]);
//       setShowFromSuggestions(false);
//     }
//   };

//   const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setTo(value);
    
//     if (value.length > 1) {
//       const filtered = airports.filter(
//         (airport) =>
//           airport.city.toLowerCase().includes(value.toLowerCase()) ||
//           airport.name.toLowerCase().includes(value.toLowerCase()) ||
//           airport.code.toLowerCase().includes(value.toLowerCase()) ||
//           airport.name.toLowerCase().includes(value.toLowerCase()) 
//       );
//       setToSuggestions(filtered.slice(0, 5));
//       setShowToSuggestions(true);
//     } else {
//       setToSuggestions([]);
//       setShowToSuggestions(false);
//     }
//   };

//   const selectFrom = (airport: Airport) => {
//     setFrom(`${airport.city} - ${airport.name} (${airport.code})`);
//     setSelectedFrom(airport);
//     setShowFromSuggestions(false);
//   };

//   const selectTo = (airport: Airport) => {
//     setTo(`${airport.city} - ${airport.name} (${airport.code})`);
//     setSelectedTo(airport);
//     setShowToSuggestions(false);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Use the selected airport objects if available, otherwise fall back to input values
//     const fromValue = selectedFrom ? selectedFrom.code : from;
//     const toValue = selectedTo ? selectedTo.code : to;
    
//     console.log("Form submitted", { from: fromValue, to: toValue, tripType });
//   };

//   return (
//     <div
//       className="relative w-full bg-cover bg-center h-[80vh] px-4 flex items-center justify-center"
//       style={{ backgroundImage: "url('/imgs/home.png')" }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-40" />

//       {/* Content */}
//       <div className="relative z-10 text-center text-white max-w-3xl">
//         <h1 className="text-xl sm:text-4xl font-bold mb-2">
//           Find & Book Your Perfect Trip
//         </h1>
//         <p className="text-sm sm:text-lg mb-6">
//           Discover amazing deals on flights, hotels, and vacation packages around the world
//         </p>

//         {/* Tabs */}
//         <div className="flex justify-center space-x-3 mb-6">
//           {["round", "oneway", "class"].map((type) => (
//             <button
//               key={type}
//               onClick={() => setTripType(type as TripType)}
//               className={`px-4 py-2 rounded-t-md text-sm sm:text-lg cursor-pointer font-medium ${
//                 tripType === type ? "bg-white text-gray-800" : "bg-gray-700"
//               }`}
//             >
//               {type === "round" && "Round Trip"}
//               {type === "oneway" && "One Way"}
//               {type === "class" && "Booking Class"}
//             </button>
//           ))}
//         </div>

//         {/* Form Section */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white opacity-90 rounded-xl shadow-md p-2 sm:p-6 flex flex-wrap gap-4 items-center justify-center text-gray-800"
//         >
//           {/* From */}
//           <div className="flex flex-col relative" ref={fromRef}>
//             <label className="text-sm mb-1">From</label>
//             <input
//               type="text"
//               value={from}
//               onChange={handleFromChange}
//               placeholder="Enter city or airport"
//               className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48"
//               required
//             />
//             {showFromSuggestions && fromSuggestions.length > 0 && (
//               <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-20 mt-1 max-h-60 overflow-y-auto">
//                 {fromSuggestions.map((airport) => (
//                   <div
//                     key={airport.code}
//                     className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-left text-sm"
//                     onClick={() => selectFrom(airport)}
//                   >
//                     <div className="font-medium">{airport.city} - {airport.name}</div>
//                     <div className="text-xs text-gray-500">{airport.code}</div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* To */}
//           <div className="flex flex-col relative" ref={toRef}>
//             <label className="text-sm mb-1">To</label>
//             <input
//               type="text"
//               value={to}
//               onChange={handleToChange}
//               placeholder="Enter city or airport"
//               className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48"
//               required
//             />
//             {showToSuggestions && toSuggestions.length > 0 && (
//               <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-20 mt-1 max-h-60 overflow-y-auto">
//                 {toSuggestions.map((airport) => (
//                   <div
//                     key={airport.code}
//                     className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-left text-sm"
//                     onClick={() => selectTo(airport)}
//                   >
//                     <div className="font-medium">{airport.city} - {airport.name}</div>
//                     <div className="text-xs text-gray-500">{airport.code}</div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Conditional fields */}
//           {(tripType === "round" || tripType === "oneway") && (
//             <div className="flex flex-col">
//               <label className="text-sm mb-1">Departure</label>
//               <input
//                 type="date"
//                 className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48"
//                 required
//               />
//             </div>
//           )}

//           {tripType === "round" && (
//             <div className="flex flex-col">
//               <label className="text-sm mb-1">Return</label>
//               <input
//                 type="date"
//                 className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48"
//                 required
//               />
//             </div>
//           )}

//           {/* Passengers */}
//           <div className="flex flex-col">
//             <label className="text-sm mb-1">Passengers</label>
//             <select className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48">
//               <option>1 Adult</option>
//               <option>2 Adults</option>
//               <option>3 Adults</option>
//               <option>1 Child</option>
//             </select>
//           </div>

//           {/* Class */}
//           <div className="flex flex-col">
//             <label className="text-sm mb-1">Class</label>
//             <select className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48">
//               <option>Economy</option>
//               <option>Business</option>
//               <option>First Class</option>
//             </select>
//           </div>

//           {/* Booking Class Tab extra fields */}
//           {tripType === "class" && (
//             <div className="flex flex-col">
//               <label className="text-sm mb-1">Preferred Airline</label>
//               <input
//                 type="text"
//                 placeholder="Enter Airline"
//                 className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48"
//               />
//             </div>
//           )}

//           {/* Submit */}
//           <Link to='/search-flight'><button
//             type="submit"
//             className="bg-[#1A3E72] hover:bg-blue-900 text-white px-6 py-2 text-[12px] sm:text-md rounded-md font-medium mt-4 cursor-pointer"
//           >
//             Search Flights
//           </button></Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HomeSearchSection;

import React, { useState, useRef, useEffect } from "react";
import airports from "../../data/airports";
import { useNavigate } from "react-router-dom";

type TripType = "round" | "oneway" | "class";

interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

const HomeSearchSection: React.FC = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState<TripType>("round");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1 Adult");
  const [travelClass, setTravelClass] = useState("Economy");
  const [formValid, setFormValid] = useState(false);
  
  const [fromSuggestions, setFromSuggestions] = useState<Airport[]>([]);
  const [toSuggestions, setToSuggestions] = useState<Airport[]>([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState<Airport | null>(null);
  const [selectedTo, setSelectedTo] = useState<Airport | null>(null);

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  // Validate form whenever inputs change
  useEffect(() => {
    validateForm();
  }, [from, to, departureDate, returnDate, tripType]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
        setShowFromSuggestions(false);
      }
      if (toRef.current && !toRef.current.contains(event.target as Node)) {
        setShowToSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const validateForm = () => {
    // Basic validation - from and to must be filled
    let isValid = from.trim() !== "" && to.trim() !== "";
    
    // For round and oneway trips, departure date is required
    if (tripType === "round" || tripType === "oneway") {
      isValid = isValid && departureDate !== "";
    }
    
    // For round trips, return date is also required
    if (tripType === "round") {
      isValid = isValid && returnDate !== "";
    }
    
    // For booking class, departure date is required
    if (tripType === "class") {
      isValid = isValid && departureDate !== "";
    }
    
    setFormValid(isValid);
  };

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFrom(value);
    
    if (value.length > 1) {
      const filtered = airports.filter(
        (airport) =>
          airport.city.toLowerCase().includes(value.toLowerCase()) ||
          airport.name.toLowerCase().includes(value.toLowerCase()) ||
          airport.code.toLowerCase().includes(value.toLowerCase()) ||
          airport.country.toLowerCase().includes(value.toLowerCase())
      );
      setFromSuggestions(filtered.slice(0, 5));
      setShowFromSuggestions(true);
    } else {
      setFromSuggestions([]);
      setShowFromSuggestions(false);
    }
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTo(value);
    
    if (value.length > 1) {
      const filtered = airports.filter(
        (airport) =>
          airport.city.toLowerCase().includes(value.toLowerCase()) ||
          airport.name.toLowerCase().includes(value.toLowerCase()) ||
          airport.code.toLowerCase().includes(value.toLowerCase()) ||
          airport.country.toLowerCase().includes(value.toLowerCase())
      );
      setToSuggestions(filtered.slice(0, 5));
      setShowToSuggestions(true);
    } else {
      setToSuggestions([]);
      setShowToSuggestions(false);
    }
  };

  const selectFrom = (airport: Airport) => {
    setFrom(`${airport.city} - ${airport.name} (${airport.code})`);
    setSelectedFrom(airport);
    setShowFromSuggestions(false);
  };

  const selectTo = (airport: Airport) => {
    setTo(`${airport.city} - ${airport.name} (${airport.code})`);
    setSelectedTo(airport);
    setShowToSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formValid) {
      alert("Please fill in all required fields");
      return;
    }
    
    // Prepare search parameters for navigation
    const searchParams = new URLSearchParams();
    searchParams.append("from", selectedFrom ? selectedFrom.code : from);
    searchParams.append("to", selectedTo ? selectedTo.code : to);
    searchParams.append("tripType", tripType);
    
    if (departureDate) {
      searchParams.append("departureDate", departureDate);
    }
    
    if (returnDate && tripType === "round") {
      searchParams.append("returnDate", returnDate);
    }
    
    searchParams.append("passengers", passengers);
    searchParams.append("class", travelClass);
    
    // Navigate to search results page with query parameters
    navigate(`/search-flight?${searchParams.toString()}`);
  };

  // Set minimum date for date inputs to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <div
      className="relative w-full bg-cover bg-center h-[80vh] px-4 flex items-center justify-center"
      style={{ backgroundImage: "url('/imgs/home.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl">
        <h1 className="text-xl sm:text-4xl font-bold mb-2">
          Find & Book Your Perfect Trip
        </h1>
        <p className="text-sm sm:text-lg mb-6">
          Explore incredible offers on flights, hotels, and all-inclusive vacation packages worldwide.
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-3 mb-6">
          {["round", "oneway", "class"].map((type) => (
            <button
              key={type}
              onClick={() => setTripType(type as TripType)}
              className={`px-4 py-2 rounded-t-md text-sm sm:text-lg cursor-pointer font-medium ${
                tripType === type ? "bg-white text-gray-800" : "bg-gray-700"
              }`}
            >
              {type === "round" && "Round Trip"}
              {type === "oneway" && "One Way"}
              {type === "class" && "Booking Class"}
            </button>
          ))}
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white opacity-90 rounded-xl shadow-md p-2 sm:p-6 flex flex-wrap gap-4 items-center justify-center text-gray-800"
        >
          {/* From */}
          <div className="flex flex-col relative" ref={fromRef}>
            <label className="text-sm mb-1">From</label>
            <input
              type="text"
              value={from}
              onChange={handleFromChange}
              placeholder="Enter city or airport"
              className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48"
              required
            />
            {showFromSuggestions && fromSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-20 mt-1 max-h-60 overflow-y-auto">
                {fromSuggestions.map((airport) => (
                  <div
                    key={airport.code}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-left text-sm"
                    onClick={() => selectFrom(airport)}
                  >
                    <div className="font-medium">{airport.city} - {airport.name}</div>
                    <div className="text-xs text-gray-500">{airport.code}, {airport.country}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* To */}
          <div className="flex flex-col relative" ref={toRef}>
            <label className="text-sm mb-1">To</label>
            <input
              type="text"
              value={to}
              onChange={handleToChange}
              placeholder="Enter city or airport"
              className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48"
              required
            />
            {showToSuggestions && toSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-20 mt-1 max-h-60 overflow-y-auto">
                {toSuggestions.map((airport) => (
                  <div
                    key={airport.code}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-left text-sm"
                    onClick={() => selectTo(airport)}
                  >
                    <div className="font-medium">{airport.city} - {airport.name}</div>
                    <div className="text-xs text-gray-500">{airport.code}, {airport.country}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Departure Date - shown for all trip types */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Departure</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              min={today}
              className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48"
              required={tripType !== "class"} // Required for all except booking class
            />
          </div>

          {/* Return Date - shown only for round trips */}
          {tripType === "round" && (
            <div className="flex flex-col">
              <label className="text-sm mb-1">Return</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={departureDate || today}
                className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48"
                required
              />
            </div>
          )}

          {/* Passengers */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Passengers</label>
            <select 
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48"
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
              <option>1 Adult, 1 Child</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
            </select>
          </div>

          {/* Class */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Class</label>
            <select 
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
              className="border text-[12px] sm:text-md rounded-md px-3 py-2 w-32 sm:w-48"
            >
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>

          {/* Submit Button - Only navigate when form is valid */}
          <button
            type="submit"
            disabled={!formValid}
            className={`px-6 py-2 text-[12px] sm:text-md rounded-md font-medium mt-4 cursor-pointer ${
              formValid 
                ? "bg-[#1A3E72] hover:bg-blue-900 text-white" 
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            Search Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeSearchSection;