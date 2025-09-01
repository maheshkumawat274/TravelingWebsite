import React from "react";

const HomeTopImgs: React.FC = () => {
  return (
    <div className="bg-white flex justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl px-4">
        
        {/* LEFT SIDE */}
        <div className="grid grid-cols-2 gap-4">
          {/* Large vertical image */}
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://i.ibb.co/2tTQGZQ/london.jpg"
              alt="London Big Ben"
              className="w-full h-100 object-cover"
            />
          </div>

          {/* Two stacked small images */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://i.ibb.co/nj13fXk/thailand.jpg"
                alt="Thailand Temple"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://i.ibb.co/6vDKrFw/rome.jpg"
                alt="Rome Colosseum"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-rows-2 gap-4">
          {/* Large horizontal image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://i.ibb.co/R6L1DdH/maldives.jpg"
              alt="Maldives Beach"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Two small images side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://i.ibb.co/fvyTGZ9/venice.jpg"
                alt="Venice Gondola"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://i.ibb.co/p0qHb6n/thailand-islands.jpg"
                alt="Thailand Islands"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeTopImgs;
