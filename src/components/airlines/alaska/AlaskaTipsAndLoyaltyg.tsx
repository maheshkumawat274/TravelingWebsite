import React from "react";

const AlaskaTipsAndLoyalty: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-36 py-6">
      <div className="mx-auto space-y-6">
        {/* Tips for Booking */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72] mb-4">
            Smart Tips for Saving on Alaska Airlines Flights
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Reserve tickets early to lock in the lowest fares, especially on popular West Coast routes.</li>
            <li>Keep your travel dates flexible to uncover better deals and promotions.</li>
            <li>Subscribe to Alaska Airlines’ fare alerts to stay updated on discounts.</li>
            <li>Maximize value by redeeming your <span className="font-semibold">Mileage Plan®</span> miles.</li>
            <li>Consider multi-stop flights for additional savings opportunities.</li>
            <li>Look out for seasonal offers, discount codes, and promotions.</li>
            <li>Book directly on <a href="https://www.alaskaair.com" className="text-[#1A3E72] underline">AlaskaAir.com</a> to avoid third-party booking fees.</li>
          </ul>
        </div>

        {/* Loyalty Program */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72] mb-4">
            Mileage Plan® Rewards Program
          </h2>
          <p className="text-gray-700 mb-4">
            Become part of the Mileage Plan® loyalty program—ranked among the top airline rewards systems.
            Members enjoy exclusive perks such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Nationally recognized, award-winning mileage program.</li>
            <li>MVP® elite membership tiers with premium benefits.</li>
            <li>No blackout dates when redeeming miles for travel.</li>
            <li>Complimentary upgrades and priority perks for elite members.</li>
            <li>Access to an extensive global partner network for earning and redeeming miles.</li>
            <li>Family mileage pooling for shared rewards and faster redemptions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AlaskaTipsAndLoyalty;
