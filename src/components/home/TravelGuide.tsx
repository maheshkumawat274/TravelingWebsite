import React from "react";

type Guide = {
  city: string;
  title: string;
  description: string;
  image: string;
};

const guides: Guide[] = [
  {
    city: "Paris",
    title: "Paris Guide",
    description: "Discover the best of Paris with our travel guide.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
  },
  {
    city: "Moscow",
    title: "Moscow Guide",
    description: "Discover the best of Moscow with our travel guide.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
  },
  {
    city: "London",
    title: "London Guide",
    description: "Explore the best of London with our travel guide.",
    image:
      "https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=900&q=80",
  },
];

const TravelGuide: React.FC = () => {
  return (
    <section className="bg-white py-6 sm:py-16 px-4 md:px-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a1a44]">
        Travel Guides
      </h2>
      <p className="text-gray-600 text-center mt-2 mb-10 max-w-2xl mx-auto">
        Explore our travel guides and discover new destinations.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide, index) => (
          <div
            key={index}
            className="bg-indigo-50 rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl group"
          >
            {/* Image wrapper */}
            <div className="overflow-hidden">
              <img
                src={guide.image}
                alt={guide.city}
                className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-[#0a1a44]">
                {guide.title}
              </h3>
              <p className="text-gray-600 mt-2">{guide.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelGuide;
