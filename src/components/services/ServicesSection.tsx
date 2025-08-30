import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // 👈 Custom icons

type Service = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Premium Comfort",
    subtitle: "Luxury seats at discounted prices",
    description: "Experience premium comfort.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Student Travel Deals",
    subtitle: "Special discounts for students",
    description: "Explore the world while studying.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Top Airlines",
    subtitle: "Best Airlines Worldwide",
    description: "Fly with the world’s most trusted airlines.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "First Class Deals",
    subtitle: "Luxury flights starting from $400",
    description: "Perfect for budget travelers.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Student Travel Deals",
    subtitle: "Budget-friendly travel options",
    description: "Affordable flights for students.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  },
];

const PremiumServices: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-16 px-4 md:px-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a1a44] mb-8">
        Premium Services
      </h2>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 left-0.5 sm:left-4 z-10">
        <button
          className="bg-[#0a1a44] cursor-pointer text-white p-3 rounded-full shadow-md hover:bg-[#142c6a] transition"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaArrowLeft size={12} />
        </button>
      </div>

      <div className="absolute top-1/2 right-0.5 sm:right-4 z-10">
        <button
          className="bg-[#0a1a44] cursor-pointer text-white p-3 rounded-full shadow-md hover:bg-[#142c6a] transition"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaArrowRight size={12} />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          500: { slidesPerView: 1 },
          620: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1350: { slidesPerView: 4 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-indigo-50 rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl group "
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
            >
              {/* Image wrapper for zoom effect */}
              <div className="overflow-hidden p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0a1a44]">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-medium">{service.subtitle}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {service.description}
                </p>
                <button className="mt-4 w-full bg-[#0a1a44] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#142c6a] transition">
                  Discover
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PremiumServices;
