import React from "react";

const FrontierConclusion: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-36 pb-4">
      <div className="mx-auto">
        <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72]   mb-2">
          Conclusion
        </h2>
        <p className="text-gray-700 mb-4">
          Whether booking online or by phone, The Airline Consolidator makes air
          travel affordable and convenient. Apply these tips to maximize your
          savings on your next trip.
        </p>

        {/* Contact Info */}
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:info@theairlineconsolidator.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              info@theairlineconsolidator.com
            </a>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+11234567890"
              className="text-blue-600 underline hover:text-blue-800"
            >
              +1 (123) 456 7890
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrontierConclusion;
