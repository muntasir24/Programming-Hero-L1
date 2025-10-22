import React from 'react';
import useAppData from '../Hooks/useAppData';
import ShowCard from '../Components/Showcard/ShowCard';

const Apps = () => {
    const { appData } = useAppData();
    const apps = appData;
    

    
    return (
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Trending App</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="md:flex justify-between space-y-3 ">
          <h1 className="font-semibold">({apps.length} ) Apps Found</h1>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
          </label>
        </div>
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-5  ">
          {apps.map((appdata) => (
            <ShowCard key={appdata.id} fapps={appdata}></ShowCard>
          ))}
        </div>
      </div>
    );
};

export default Apps;