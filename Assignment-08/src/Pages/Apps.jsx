import React, { useState } from 'react';
import useAppData from '../Hooks/useAppData';
import ShowCard from '../Components/Showcard/ShowCard';


import GlobalSpinner from '../Spinner/GlobalSpinner';
import AppSkeleton from '../Spinner/AppSkeleton';
import NoAppsFound from '../Errors/NoAppsFound';

const Apps = () => {
    const { appData,loading } = useAppData();
    const apps = appData;
  const [search, setSearch] = useState("");
  const [Loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);

  }
 

const refinedSearch = search.trim().toLowerCase();
  const searchedApps = refinedSearch ? apps.filter(ap => ap.title.trim().toLowerCase().includes(refinedSearch)) :apps;


    return (
      <div className="space-y-4 text-center min-h-screen  ">
        
        <h1 className="text-4xl font-bold">Trending App</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="md:flex justify-between items-center space-y-3 ">
          <h1 className="font-semibold">({searchedApps.length} ) Apps Found</h1>
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
            <input
              onChange={(e) =>handleSearch(e)}
              value={search}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>
        {
          Loading ? <GlobalSpinner></GlobalSpinner> : (loading ? <AppSkeleton></AppSkeleton> :  searchedApps.length ? (
          <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-5 ">
              {
                searchedApps.map((appdata) => (<ShowCard key={appdata.id} fapps={appdata}></ShowCard> ))
              }
          </div>
        ) : <NoAppsFound></NoAppsFound> )
        
}
        
      </div>
    );
};

export default Apps;