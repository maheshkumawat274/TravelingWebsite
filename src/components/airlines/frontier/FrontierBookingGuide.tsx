import React from "react";

const FrontierBookingGuide: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-36 py-6">
      <div className="mx-auto space-y-6">
        
        {/* How to Book Flights Online */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72]  mb-2">
            How to Book Flights Online
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>
              Visit{" "}
              <a
                href="https://theairlineconsolidator.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-[#1A3E72] "
              >
                aaaa.com
              </a>{" "}
              or download our mobile app.
            </li>
            <li>
              Enter your trip details—type, number of travelers, dates, and
              destinations.
            </li>
            <li>
              Click on <span className="font-semibold">Search Flights.</span>
            </li>
            <li>Use loyalty points (if applicable) for extra savings.</li>
            <li>
              Review available flights and choose your preferred option.
            </li>
            <li>Provide passenger details.</li>
            <li>Complete payment to confirm your booking.</li>
          </ol>
          <p className="mt-2 text-gray-600 italic">
            Tip: Always check our latest promotions for additional discounts.
          </p>
        </div>

        {/* Booking Offline */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72]  mb-2">
            Booking Offline
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Have your reservation or booking number ready.</li>
            <li>
              Call our customer support at{" "}
              <a
                href="tel:+11234567890"
                className="text-blue-600 underline hover:text-[#1A3E72] "
              >
                +1 (123) 456 7890
              </a>
              .
            </li>
            <li>Share your travel details with our agent.</li>
            <li>
              Review flight options and select the one that fits your budget.
            </li>
            <li>Choose your payment method and confirm your booking.</li>
          </ol>
        </div>

        {/* Manage Booking */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72]  mb-2">
            Manage Your Booking
          </h2>
          <p className="text-gray-700 mb-2">
            Need to make changes? Our{" "}
            <span className="font-semibold">Manage Trips</span> option lets you
            update your itinerary, choose seats, or add extras.
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>
              Visit{" "}
              <a
                href="https://theairlineconsolidator.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-[#1A3E72] "
              >
                theairlineconsolidator.com
              </a>{" "}
              and select <span className="font-semibold">Manage Trips.</span>
            </li>
            <li>Enter your last name and booking confirmation number.</li>
            <li>View your itinerary and select the update option.</li>
            <li>Follow the instructions to make your changes.</li>
          </ol>
          <p className="mt-2 text-gray-600 italic">
            For vacation package changes, simply call our support team—
            available 24/7.
          </p>
        </div>

        {/* Tips for Booking */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72]  mb-2">
            Tips for Booking Affordable Flights
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Book early to lock in lower fares.</li>
            <li>Choose red-eye or off-peak flights for cheaper rates.</li>
            <li>Travel mid-week when prices are typically lower.</li>
            <li>Watch for seasonal sales and promotions.</li>
            <li>Subscribe to our fare alerts for instant deal notifications.</li>
            <li>Book directly via our website to avoid extra fees.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FrontierBookingGuide;
