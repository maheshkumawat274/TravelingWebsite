import React from "react";

const DeltaSkyMilesProgram: React.FC = () => {
  return (
    <section className="w-full bg-white mx-auto px-4 md:px-36 pt-4 space-y-6">
      {/* Title & Description */}
      <div>
        <h2 className="text-lg font-semibold text-[#1A3E72]">
          SkyMiles® Rewards Program
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          Become part of the <span className="font-medium">SkyMiles®</span>{" "}
          program, one of the most rewarding loyalty schemes in the airline
          industry. Members enjoy exclusive perks such as:
        </p>
      </div>

      {/* Benefits List */}
      <ul className="space-y-2 list-disc pl-6 text-gray-700">
        <li>Collecting miles to redeem for award travel.</li>
        <li>Medallion® Status tiers with premium privileges.</li>
        <li>Free upgrades for Medallion members.</li>
        <li>Fast-track priority for check-in, security, and boarding.</li>
        <li>Exclusive access to Delta Sky Club® lounges.</li>
        <li>A vast global partner network to earn and redeem miles.</li>
      </ul>

      {/* Medallion Status Tags */}
      <div className="flex gap-3 flex-wrap">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md font-medium">
          Silver
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md font-medium">
          Gold
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md font-medium">
          Platinum
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md font-medium">
          Diamond
        </span>
      </div>
    </section>
  );
};

export default DeltaSkyMilesProgram;
