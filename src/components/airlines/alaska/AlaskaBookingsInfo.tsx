import React from "react";

const AlaskaBookingInfo: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-36 pb-6">
      <div className="mx-auto space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">
        
        {/* Booking Offline */}
        <div>
          <h2 className="text-lg font-semibold text-[#1A3E72] mb-3">Booking Offline</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Keep your trip details and Mileage Plan® number handy (if available).</li>
            <li>
              Reach out to our Reservations Desk at{" "}
              <a href="tel:+11234567890" className="text-blue-600 hover:underline">
                +1 (123) 456 7890
              </a>.
            </li>
            <li>Provide your travel requirements to our booking agent.</li>
            <li>Review suggested flight options and select the fare that best suits your needs.</li>
            <li>Confirm your booking by selecting a payment method of your choice.</li>
          </ol>
        </div>

        {/* Manage Your Booking */}
        <div>
          <h2 className="text-lg font-semibold text-[#1A3E72] mb-2">Manage Your Booking</h2>
          <p className="mb-3">
            Need to adjust your plans? With our <span className="font-semibold">Manage Reservations</span>{" "}
            feature, you can update itineraries, change seats, or add extra services with ease.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Go to{" "}
              <a
                href="https://www.alaskaair.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                AlaskaAir.com
              </a>{" "}
              and select <span className="font-semibold">My Trips</span>.
            </li>
            <li>Enter your booking confirmation number along with passenger first and last name.</li>
            <li>Access your itinerary and choose the modification option you need.</li>
            <li>Follow the guided steps to finalize your changes.</li>
          </ol>
          <p className="mt-4 text-gray-700 italic">
            For complex modifications or vacation packages, please contact our dedicated support team for assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AlaskaBookingInfo;
