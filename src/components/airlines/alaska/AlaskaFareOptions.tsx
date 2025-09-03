import React from "react";

const AlaskaFareOptions: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-36 pb-10">
      <div className="mx-auto bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6">
        {/* Title */}
        <h2 className="text-base font-semibold text-[#1A3E72] mb-2">
          Alaska Airlines Fare Options
        </h2>
        <hr className="border-t-2 border-blue-200 mb-4" />

        {/* List */}
        <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm md:text-base leading-relaxed">
          <li>
            <span className="font-bold">Saver Fare:</span> The most budget-friendly
            option, designed for travelers willing to accept limited flexibility.
          </li>
          <li>
            <span className="font-bold">Main Cabin:</span> A flexible standard fare
            that includes complimentary snacks and advance seat choice.
          </li>
          <li>
            <span className="font-bold">Premium Class:</span> Enjoy extra legroom,
            priority service, and free beverages for a more comfortable trip.
          </li>
          <li>
            <span className="font-bold">First Class:</span> A luxury experience with
            priority boarding, enhanced amenities, and premium in-flight service.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AlaskaFareOptions;
