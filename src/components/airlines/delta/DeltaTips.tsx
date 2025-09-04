import React from "react";

const DeltaTips: React.FC = () => {
  return (
    <section className="bg-white w-full mx-auto px-4 md:px-36 space-y-6 pt-4">
      {/* Global Network */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-md shadow-sm">
        <h2 className="text-lg font-semibold text-[#1A3E72]">
          Delta’s Worldwide Network
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          As a founding member of the SkyTeam alliance, Delta connects travelers
          across the globe with strong partnerships including airlines like{" "}
          <span className="font-medium">Air France, KLM, Korean Air</span>, and
          many others. Earn and redeem{" "}
          <span className="font-medium">SkyMiles®</span> on flights throughout
          this extensive partner network.
        </p>
      </div>

      {/* Tips Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Smart Ways to Save on Delta Flights
        </h3>
        <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-700">
          <li>
            Reserve tickets in advance to lock in the lowest fares, especially
            for overseas travel.
          </li>
          <li>Stay open to different travel dates for more affordable pricing.</li>
          <li>Subscribe to Delta Air Lines fare notifications for timely deals.</li>
          <li>Make the most of your SkyMiles® to maximize savings.</li>
          <li>
            Look into connecting flights, which can often reduce overall costs.
          </li>
          <li>Hunt for promotional offers and discount vouchers.</li>
          <li>
            Always book directly through Delta.com to avoid extra third-party
            charges.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DeltaTips;
