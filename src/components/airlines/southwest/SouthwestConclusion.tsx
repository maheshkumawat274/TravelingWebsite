import React from "react";

const SouthwestConclusion: React.FC = () => {
  return (
    <div className="w-full mx-auto bg-white px-4 md:px-36 pb-4">
      {/* Conclusion Title */}
      <h2 className="text-lg font-semibold text-[#1A3E72]   mb-2">Conclusion</h2>
      
      {/* Conclusion Text */}
      <p className="text-gray-700 mb-6">
        Whether booking online or by phone, Southwest Airlines makes air travel 
        affordable and convenient with our Transfarency® policy and no change fees. 
        Apply these tips to maximize your savings on your next trip.
      </p>

      {/* Contact Box */}
      <div className="bg-yellow-400 text-black p-4 rounded-md">
        <p>
          <span className="font-bold">Email:</span>{" "}
          <a href="mailto:info@theairlineconsolidator.com" className="underline">
            info@theairlineconsolidator.com
          </a>
        </p>
        <p>
          <span className="font-bold">Phone:</span>{" "}
          <a href="tel:+11234567890" className="underline">
            +1 (123) 456 7890
          </a>
        </p>
      </div>
    </div>
  );
};

export default SouthwestConclusion;
