import React from "react";

const BookFlightsGuide: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-36 py-6">
      <div className="mx-auto text-gray-800">
        {/* Heading */}
        <h2 className="text-lg font-semibold text-[#1A3E72] mb-4">
          Step-by-Step Guide to Booking Alaska Airlines Flights Online
        </h2>

        {/* Ordered List */}
        <ol className="list-decimal list-inside space-y-2 text-base leading-relaxed">
          <li>
            Go to{" "}
            <a
              href="https://www.alaskaair.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A3E72] hover:underline"
            >
              AlaskaAir.com
            </a>{" "}
          </li>
          <li>
            Provide your travel details—such as trip type, passenger count,
            dates, and preferred destinations.
          </li>
          <li>
            Click the <span className="font-bold">Search Flights</span> button
            to view options.
          </li>
          <li>
            If eligible, redeem your{" "}
            <span className="italic">Mileage Plan®</span> miles while booking.
          </li>
          <li>
            Explore available flights and pick your cabin choice (Saver, Main,
            Premium, or First Class).
          </li>
          <li>
            Fill in traveler details and include your{" "}
            <span className="italic">Mileage Plan®</span> account information.
          </li>
          <li>
            Select your seats and any extras, such as Premium Class upgrades.
          </li>
          <li>Finalize your payment to confirm your reservation.</li>
        </ol>

        {/* Pro Tip */}
        <p className="mt-6 text-sm text-gray-700">
          <span className="font-semibold">Pro Tip:</span> Log in to your{" "}
          <span className="italic">Mileage Plan®</span> account before booking
          to collect miles and unlock member-exclusive fares.
        </p>
      </div>
    </section>
  );
};

export default BookFlightsGuide;
