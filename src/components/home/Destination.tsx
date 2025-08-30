import React from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

type Location = {
  country: string;
  place: string;
  image: string;
};

const locations: Location[] = [
  {
    country: "Australia",
    place: "Glebe New South Wales",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    country: "Thailand",
    place: "Phra nang Cave Beach",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
  },
  {
    country: "Japan",
    place: "Okinawa, Santa Cruz de la Sierra",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    country: "Italy",
    place: "Costa Smeralda, Sardinia",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    country: "Indonesia",
    place: "North Sumatra, Bali",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    country: "Indonesia",
    place: "North Sumatra, Bali",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    country: "Indonesia",
    place: "North Sumatra, Bali",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    country: "Indonesia",
    place: "North Sumatra, Bali",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];

const Locations: React.FC = () => {
  return (
    <section className="bg-white py-6 sm:py-16 px-4 md:px-10 text-center">
      {/* Heading */}
      <p className="text-[#1A3E72] font-semibold text-lg">Top Destinations</p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
        Find your Perfect Destinations
      </h2>
      <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
        Explore your dream domestic and international destinations at the lowest airfare today.
      </p>

      {/* Card Container */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {locations.map((loc, i) => (
          <div
            key={i}
            className="relative w-full md:w-60 h-[380px] flex-shrink-0 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 ease-in-out hover:w-80"
          >
            {/* Image */}
            <img
              src={loc.image}
              alt={loc.country}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute bottom-5 left-5 text-left text-white">
              <p className="flex items-center gap-1 text-sm">
                <MapPin className="w-4 h-4 text-[#1A3E72]" />
                {loc.country}
              </p>
              <h3 className="font-bold text-lg">{loc.place}</h3>
            </div>

            {/* Arrow Button */}
            <button className="absolute bottom-5 right-5 bg-[#1A3E72] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
