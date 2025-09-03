import React from "react";

const AlaskaConclusion: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-36 pb-6">
      <div className="mx-auto">
        {/* Conclusion Text */}
        <h2 className="text-lg md:text-xl font-semibold text-[#1A3E72] mb-2">
          Conclusion
        </h2>
        <p className="text-gray-700 mb-6">
          Whether booking online or by phone, Alaska Airlines makes air travel
          convenient with our West Coast focus and premium services. Use these
          tips to maximize your savings and enjoy your journey with us.
        </p>

        {/* Contact Box */}
        <div className="bg-[#1A3E72] text-white p-6 rounded-md space-y-2">
          <p>
            <span className="font-semibold">Email: </span>
            <a
              href="mailto:info@theairlineconsolidator.com"
              className="underline hover:text-gray-200"
            >
              info@abc.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone: </span>
            <a
              href="tel:+11234567890"
              className="underline hover:text-gray-200"
            >
              +1 111-1111-111
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AlaskaConclusion;
