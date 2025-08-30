import React from "react";

const ServicesTop: React.FC = () => {
  return (
    <section
      className="relative h-[300px] sm:h-[400px] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/imgs/services.png')" }} // apni image ka path yahan daalo
    >
      {/* Overlay (optional for dark effect) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Services</h1>
        <div className="flex items-center justify-center gap-2">
          <span className="font-semibold">Home</span>
          <span className="w-4 h-4 bg-[#142c6a] rounded-full inline-block"></span>
          <span className="text-white">Services</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesTop;
