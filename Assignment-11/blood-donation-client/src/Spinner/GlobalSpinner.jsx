import React from 'react';
import { Droplet } from 'lucide-react';

const GlobalSpinner = () => {
  return (
    <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-white/60 backdrop-blur-md">
      <div className="relative">
        
        {/* The Outer Rotating Ring */}
        <div className="w-24 h-24 border-4 border-red-100 border-t-red-600 rounded-full animate-spin"></div>
        
        {/* The Pulsing Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Droplet 
            size={32} 
            className="text-red-600 fill-red-600 animate-pulse shadow-inner" 
          />
        </div>

        {/* Floating Blood Drops Orbiting */}
        <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
            <Droplet 
              size={12} 
              className="text-red-400 fill-red-400 absolute -top-1 left-1/2 -translate-x-1/2" 
            />
        </div>
      </div>

      {/* Animated Text */}
      <div className="mt-6 flex flex-col items-center">
        <h2 className="text-xl font-bold text-red-800 animate-bounce">
         loading...
        </h2>
        <p className="text-sm text-gray-500 font-medium tracking-widest uppercase opacity-70">
          Saving Lives
        </p>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default GlobalSpinner;