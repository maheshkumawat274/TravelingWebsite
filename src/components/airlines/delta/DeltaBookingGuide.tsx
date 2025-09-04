import React from "react";

const DeltaBookingGuide: React.FC = () => {
  return (
    <div className="bg-white mx-auto pt-4 px-4 md:px-36 space-y-6 text-gray-800">
      
      {/* Online Booking */}
      <section>
        <h2 className="text-xl font-bold text-[#1A3E72] mb-3">
          How to Book Delta Flights Online
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Visit Delta.com or download the Fly Delta mobile app.</li>
          <li>
            Enter your trip details—type, number of travelers, dates, and
            destinations.
          </li>
          <li>Click on <span className="font-semibold">Search Flights</span>.</li>
          <li>Use your SkyMiles® miles for redemption (if applicable).</li>
          <li>
            Review available flights and choose your preferred option (Basic
            Economy, Main Cabin, Comfort+, First Class, or Delta One®).
          </li>
          <li>Provide passenger details and SkyMiles® information.</li>
          <li>Select seats and any additional options like Comfort+ or Premium Select.</li>
          <li>Complete payment to confirm your booking.</li>
        </ol>
        <p className="mt-3 text-sm text-gray-600">
          <span className="font-semibold">Pro Tip:</span> Sign in to your SkyMiles®
          account before booking to earn miles and access member-only fares.
        </p>
      </section>

      {/* Fare Options */}
      <section className="border border-gray-300 rounded-md p-4 bg-gray-50">
        <h3 className="text-lg font-bold text-[#1A3E72] mb-3">Delta Fare Options</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-semibold">Basic Economy:</span> Our most affordable fare with some restrictions
          </li>
          <li>
            <span className="font-semibold">Main Cabin:</span> Standard fare with flexibility and advance seat selection
          </li>
          <li>
            <span className="font-semibold">Comfort+®:</span> Extra legroom, premium service, and dedicated overhead space
          </li>
          <li>
            <span className="font-semibold">Premium Select:</span> Premium international travel with enhanced dining
          </li>
          <li>
            <span className="font-semibold">First Class:</span> Premium domestic service with priority services
          </li>
          <li>
            <span className="font-semibold">Delta One®:</span> Business class luxury on long-haul international flights
          </li>
        </ul>
      </section>

      {/* Booking Offline */}
      <section>
        <h3 className="text-lg font-bold text-[#1A3E72] mb-3">Booking Offline</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Have your travel details and SkyMiles® number ready (if applicable).</li>
          <li>
            Call our Reservations team at{" "}
            <a href="tel:+11234567890" className="text-blue-600 underline">
              +1 (123) 456 7890
            </a>.
          </li>
          <li>Share your travel details with our agent.</li>
          <li>Review flight options and select the fare that fits your needs.</li>
          <li>Choose your payment method and confirm your booking.</li>
        </ol>
      </section>

      {/* Manage Booking */}
      <section>
        <h3 className="text-lg font-bold text-[#1A3E72] mb-3">Manage Your Booking</h3>
        <p className="mb-2">
          Need to make changes? Our <span className="font-semibold">My Trips</span> option lets you update your itinerary, choose seats, or add extras.
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Visit{" "}
            <a href="https://www.delta.com" className="text-blue-600 underline">
              Delta.com
            </a>{" "}
            and select <span className="font-semibold">My Trips</span>.
          </li>
          <li>Enter your confirmation number and passenger first/last name.</li>
          <li>View your itinerary and select the change option.</li>
          <li>Follow the instructions to make your changes.</li>
        </ol>
        <p className="mt-3 text-sm text-gray-600">
          For complex changes or vacation packages, contact our support team for assistance.
        </p>
      </section>

    </div>
  );
};

export default DeltaBookingGuide;
