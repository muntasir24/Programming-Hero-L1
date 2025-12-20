import React from "react";

import err from "../assets/four-o-four.webp";
import { useNavigate } from "react-router";

const Error404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // navigate to home
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-5">
      {/* Image */}
      <img src={err} alt="404 Not Found" className="w-96 mb-8" />

      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Page Not Found</h1>

      {/* Subtitle */}
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Oops! The page you are looking for does not exist. It might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <button
        onClick={handleGoHome}
        className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-primary/90 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Error404;
