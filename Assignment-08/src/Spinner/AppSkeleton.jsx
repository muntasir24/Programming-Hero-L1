import React from 'react';

const AppSkeleton = ({val=8}) => {
    return (
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length:val}).map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="skeleton md:h-72 h-80  w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
    );
};

export default AppSkeleton;