import React from 'react';

const SingleAppSkeleton = () => {
    return (
      <div className="flex flex-col  md:flex-row gap-4">
        <div className="skeleton md:h-72 h-36    md:w-1/4"></div>

        <div className="flex flex-col justify-around md:w-3/4">
          <div>
            <div className="skeleton h-4 w-2/4 mb-4"></div>
            <div className="skeleton h-4 w-2/4"></div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex gap-3  w-2/4">
              <div className="flex flex-col w-1/4 gap-3">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full "></div>
              </div>
              <div className="flex flex-col w-1/4 gap-3">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full "></div>
              </div>
              <div className="flex flex-col w-1/4 gap-3">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full "></div>
              </div>
            </div>
            <div className="skeleton h-10 w-1/4 "></div>
          </div>
        </div>
      </div>
    );
};

export default SingleAppSkeleton;