import React from "react";

const Skeletonlist = ({ rows = 5, columns = 5 }) => {
  return (
    <div className="w-full space-y-4">
      {/* Table Header Skeleton */}
      <div className="flex gap-4 bg-gray-100 p-4 rounded-xl animate-pulse">
        {Array.from({ length: columns }).map((_, i) => (
          <div key={i} className="h-6 bg-gray-300 rounded w-full"></div>
        ))}
      </div>

      {/* Table Rows Skeleton */}
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div
          key={rowIdx}
          className="flex gap-4 bg-gray-50 p-4 rounded-xl animate-pulse"
        >
          {Array.from({ length: columns }).map((_, colIdx) => (
            <div
              key={colIdx}
              className={`h-5 bg-gray-200 rounded w-full`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skeletonlist;
