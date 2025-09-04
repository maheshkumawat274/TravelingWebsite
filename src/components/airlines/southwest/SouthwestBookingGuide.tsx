import React from "react";

const SouthwestFlightsGuide: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-36 py-4">
      <div className="mx-auto space-y-6">
        {/* Book Online */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72]  mb-3">
            How to Reserve Southwest Airlines Flights Online
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>
              Visit{" "}
              <a
                href="https://www.southwest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-[#1A3E72] "
              >
                Southwest.com
              </a>{" "}
              or install the Southwest mobile application.
            </li>
            <li>
              Provide your trip details—number of travelers, travel type, dates,
              and destinations.
            </li>
            <li>
              Click on <span className="font-semibold">Search Flights</span>.
            </li>
            <li>
              Use{" "}
              <span className="font-semibold">Rapid Rewards® points</span> (if
              eligible) to unlock additional savings.
            </li>
            <li>
              Review flight options and pick the fare that suits you best.
            </li>
            <li>
              Enter passenger information along with any Rapid Rewards® details.
            </li>
            <li>
              Finalize payment to confirm your reservation—enjoy{" "}
              <span className="font-semibold">no change fees!</span>
            </li>
          </ol>
          <p className="text-sm text-gray-600 mt-3">
            💡 Pro Tip: Explore the{" "}
            <span className="font-semibold">Low Fare Calendar</span> for the
            cheapest available fares on your selected dates.
          </p>
        </div>

        {/* Booking Offline */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72]  mb-3">
            Booking by Phone
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>
              Keep your booking reference and Rapid Rewards® ID (if available)
              handy.
            </li>
            <li>
              Contact our support team at{" "}
              <a
                href="tel:+11234567890"
                className="text-blue-600 underline hover:text-[#1A3E72] "
              >
                +1 (123) 456 7890
              </a>
              .
            </li>
            <li>Provide your travel details to our friendly representative.</li>
            <li>
              Review suggested flight options and choose the fare that works for
              you.
            </li>
            <li>
              Complete your booking by selecting a payment method—still{" "}
              <span className="font-semibold">no change fees!</span>
            </li>
          </ol>
        </div>

        {/* Manage Booking */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72]  mb-3">
            Manage or Modify Your Booking
          </h2>
          <p className="text-gray-700 mb-2">
            Need to update your trip? With our flexible change policy, you can
            easily adjust your itinerary, switch seats, or cancel for future
            travel credit—all without fees.
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>
              Visit{" "}
              <a
                href="https://www.southwest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-[#1A3E72] "
              >
                Southwest.com
              </a>{" "}
              and choose <span className="font-semibold">Manage Trips</span>.
            </li>
            <li>Enter your booking confirmation number and passenger name.</li>
            <li>Select your trip and click the change option.</li>
            <li>
              Follow the steps to update your booking—no hidden fees applied.
            </li>
          </ol>
          <p className="text-sm text-gray-600 mt-3">
            For complex changes or vacation packages, please call our support
            team—we’re available 24/7.
          </p>
        </div>

        {/* Tips for Savings */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72]  mb-3">
            Money-Saving Tips for Southwest Flights
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Book early to secure lower fares, especially Wanna Get Away®.</li>
            <li>
              Keep your travel dates flexible to grab the best deals.
            </li>
            <li>Subscribe to Southwest Low Fare alerts.</li>
            <li>
              Redeem your Rapid Rewards® points to maximize value on trips.
            </li>
            <li>Check weekly sales released every Tuesday.</li>
            <li>
              Explore the Companion Pass option for incredible savings when
              traveling with a partner.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SouthwestFlightsGuide;
