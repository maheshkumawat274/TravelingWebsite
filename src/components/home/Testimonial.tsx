import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  rating: number; // 👈 make rating a number (4 or 5)
}

const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "I was blown away by how quickly they delivered such high-quality work. It's rare to find such dedication and skill in one postage!",
      author: "Fatima Khan",
      role: "Business Owner",
      rating: 5
    },
    {
      id: 2,
      content: "Their innovative approach and willingness to listen made all the difference. My project wouldn't have been the same without their expertise.",
      author: "Rohan Patel",
      role: "Freelance Illustrator",
      rating: 4
    },
    {
      id: 3,
      content: "Working with this team was an absolute pleasure! Their creativity and attention to detail transformed my vision into a masterpiece that exceeded expectations.",
      author: "Priya Sharma",
      role: "Graphic Designer",
      rating: 5
    },
    {
      id: 4,
      content: "Exceptional service from start to finish. They understood exactly what I needed and delivered beyond my expectations.",
      author: "Amit Verma",
      role: "Marketing Director",
      rating: 4
    },
    {
      id: 5,
      content: "The quality of work and attention to detail was outstanding. I would highly recommend them to anyone looking for professional service.",
      author: "Neha Singh",
      role: "Product Manager",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Get visible testimonials with infinite loop
  const getVisibleTestimonials = () => {
    const visible = [];
    const total = testimonials.length;
    
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total;
      visible.push({
        ...testimonials[index],
        position: i
      });
    }
    
    return visible;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Client Feedback</h1>
          <h2 className="text-2xl text-gray-600">What Our Clients Say About Us</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our clients' experiences speak volumes. Here's what they have to say about their unforgettable journeys with us.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-12"></div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center">
            {/* Previous Button */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 z-20 bg-white opacity-60 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all transform hover:scale-110"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Testimonial Cards */}
            <div className="flex justify-center items-center gap-8">
              {getVisibleTestimonials().map((testimonial) => {
                let cardStyle = "opacity-0 scale-75 translate-x-0"; 
                
                if (testimonial.position === 0) {
                  cardStyle = "opacity-100 scale-100 z-10 translate-x-0"; 
                } else if (testimonial.position === -1) {
                  cardStyle = "opacity-70 scale-95 blur-sm -translate-x-16"; 
                } else if (testimonial.position === 1) {
                  cardStyle = "opacity-70 scale-95 blur-sm translate-x-16"; 
                } else if (testimonial.position === -2) {
                  cardStyle = "opacity-40 scale-90 blur-md -translate-x-32"; 
                } else if (testimonial.position === 2) {
                  cardStyle = "opacity-40 scale-90 blur-md translate-x-32"; 
                }

                return (
                  <div
                    key={`${testimonial.id}-${testimonial.position}`}
                    className={`bg-indigo-50 p-6 rounded-xl shadow-xl transition-all duration-500 w-80 flex-shrink-0 ${cardStyle}`}
                  >
                    <div className="text-5xl font-bold text-blue-100 mb-4"><img src='/imgs/quote1.png' alt="quote"/></div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>

                      {/* ⭐ Rating Stars */}
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button 
              onClick={handleNext}
              className="absolute right-0 z-20 bg-white opacity-60 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all transform hover:scale-110"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
