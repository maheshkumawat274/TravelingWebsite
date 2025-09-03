import React from "react";

const AlaskaPartnership: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 md:px-36">
      <div className="mx-auto bg-blue-50 border-l-4 border-[#1A3E72] rounded-md p-4">
        <h2 className="text-base font-semibold text-[#1A3E72] mb-2">
          Alaska Airlines Global Partnership Network
        </h2>
        <p className="text-gray-800 text-sm md:text-base leading-relaxed">
          As a proud member of the <span className="italic">oneworld® alliance</span>, Alaska Airlines
          provides travelers with worldwide connectivity through a strong partner network. 
          Collaborating with airlines such as American Airlines, British Airways, Qantas, 
          and many others, we make international travel seamless. 
          Earn and redeem <span className="font-semibold">Mileage Plan®</span> miles across our 
          global partners while enjoying greater flexibility and benefits wherever you fly.
        </p>
      </div>
    </section>
  );
};

export default AlaskaPartnership;
