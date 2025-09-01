import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dom: string;
}

const BookingProcess: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    dom: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    const nameRegex = /^[A-Za-z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(formData.fullName)) {
      alert("Name should only contain letters and spaces.");
      return false;
    }

    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number should be exactly 10 digits.");
      return false;
    }

    if (!formData.email || !formData.dom) {
      alert("Please fill in all fields.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("https://your-api-url.com/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      console.log("Success:", data);
      setShowPopup(true);
      setFormData({ fullName: "", email: "", phone: "", dom: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative flex justify-center w-full mx-auto py-16 px-4 bg-indigo-100">
      {/* Top-left image */}
      <img
        src="/imgs/element-10.png"
        alt="Top Left"
        className="absolute top-0 left-0 w-80 h-80 object-cover"
      />

      {/* Bottom-right image */}
      <img
        src="/imgs/element-9.png"
        alt="Bottom Right"
        className="absolute bottom-0 right-0 w-64 h-full "
      />

      {/* Form Section */}
      <div className="max-w-4xl rounded-md bg-amber-400 flex flex-col md:flex-row items-stretch relative z-10">
        {/* Left: Form */}
        <div className="flex-1 bg-white shadow-lg p-3 sm:p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Booking Process</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Passenger Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 text-gray-900 rounded-lg p-2 focus:ring focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 text-gray-900 rounded-lg p-2 focus:ring focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 text-gray-900 rounded-lg p-2 focus:ring focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Date of Journey (DOM)</label>
              <input
                type="date"
                name="dom"
                value={formData.dom}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 text-gray-900 rounded-lg p-2 focus:ring focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#1A3E72] text-white py-2 rounded-lg hover:bg-[#1a3f72ec] transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="flex-1 overflow-hidden">
          <img
            src="/imgs/home.png"
            alt="Booking"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm text-center animate-bounce">
            <h3 className="text-xl font-bold mb-4 text-green-600">Success!</h3>
            <p className="mb-6">Your booking has been submitted successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingProcess;
