import React from "react";

const DeltaConclusion: React.FC = () => {
  return (
    <section className="w-full bg-white mx-auto px-4 md:px-36 py-4 space-y-4">
      {/* Title & Text */}
      <div>
        <h2 className="text-lg font-semibold text-[#1A3E72] ">Conclusion</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          No matter if you book online or over the phone,{" "}
          <span className="font-medium">Delta Air Lines</span> ensures a smooth
          and affordable travel experience with its extensive global reach and
          premium offerings. Take advantage of these tips to maximize savings
          and enjoy a hassle-free journey.
        </p>
      </div>

      {/* Contact Box */}
      <div className="bg-[#1A3E72] text-white rounded-md p-4 space-y-2">
        <p>
          <span className="font-semibold">Email: </span>
          <a
            href="mailto:info@theairlineconsolidator.com"
            className="hover:underline"
          >
            info@theairlineconsolidator.com
          </a>
        </p>
        <p>
          <span className="font-semibold">Phone: </span>
          <a href="tel:+11234567890" className="hover:underline">
            +1 (123) 456 7890
          </a>
        </p>
      </div>
      
    </section>
  );
};

export default DeltaConclusion;
