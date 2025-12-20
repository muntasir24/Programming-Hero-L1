import React from 'react';
import { HeartPulse, Droplets } from 'lucide-react';

const AuthSpinner = () => {
  return (
    <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        
        {/* Outer Rotating Blood Drops Ring */}
        <div className="absolute animate-spin-slow">
          <Droplets className="text-red-500 fill-red-500 opacity-20 h-20 w-20 rotate-0" />
        </div>
        <div className="absolute animate-spin">
          <Droplets className="text-red-600 fill-red-600 h-16 w-16" />
        </div>

        {/* Center Beating Heart */}
        <div className="relative z-10 bg-white p-4 rounded-full shadow-lg border border-red-100 animate-pulse-heart">
          <HeartPulse size={40} className="text-red-600" />
        </div>
      </div>

      {/* Thematic Loading Text */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold text-gray-800 tracking-wide">
          Creating Account...
        </h3>
        <p className="text-sm text-gray-500 mt-1 font-medium italic">
          "Your liquid gift can save a life"
        </p>
      </div>

      {/* Custom Styles for Heartbeat Animation */}
      <style jsx>{`
        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.15); }
          30% { transform: scale(1); }
          45% { transform: scale(1.25); }
          60% { transform: scale(1); }
        }
        .animate-pulse-heart {
          animation: pulse-heart 1.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AuthSpinner;