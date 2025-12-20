import React, {  useState } from 'react';
import { ArrowRight, Download, Star } from "lucide-react";
import { getInstalledApps } from '../Utils/LocalStorage';
import toast from 'react-hot-toast';
import NoAppsFound from '../Errors/NoAppsFound';



const Installation = () => {
    const [storedApps, setStoredApps] = useState(() => getInstalledApps());
    const [sortType, setSortType] = useState('');

  const loading = (!storedApps || storedApps.length == 0);
  if (loading) return <NoAppsFound></NoAppsFound>;
  
    const handleRemove = (id) => {
        const filterArr = storedApps.filter(s => s.id != id);
        setStoredApps(filterArr);
        localStorage.setItem('installed', JSON.stringify(filterArr));
    }
   
  const searchedApps = (() => {
    if (sortType === 'asc') {
      return [...storedApps].sort((a, b) => a.downloads - b.downloads);
    }
    else if (sortType === 'des') {
      return [...storedApps].sort((a, b) => b.downloads - a.downloads);
    }
    else return storedApps;
  })()

  const notify = (title) => {
    toast.success(`Uninstalled ${title}`, {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  }

// console.log(storedApps);
    return (
      <div className="space-y-4 text-center   ">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="md:flex justify-between items-center space-y-3 ">
          <h1 className="font-semibold">
            {searchedApps.length || 0} Apps Found
          </h1>
          <label className="w-full max-w-lg">
            {loading ? "": (
              <select
                className="select"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option> Sort By Download</option>
                <option value="asc">Low → High</option>
                <option value="des">High → Low</option>
              </select>
            )}
          </label>
        </div>
        <div className="space-y-3">
          {searchedApps.map((ap) => (
            <div className="card  card-side bg-base-100 shadow-sm " key={ap.id}>
              <figure className=" p-3 bg-gray-50">
                <img
                  className="w-25 h-25 rounded-2xl"
                  src={ap.image}
                  alt="Movie"
                />
              </figure>
              <div className="card-body flex flex-col justify-between">
                <h2 className="card-title ">{ap.title}</h2>
                <div className=" flex flex-col md:flex-row justify-between space-y-5">
                  <div className="flex  gap-5 items-center">
                    <div className="flex items-center gap-1">
                      <Download size={18} className="text-green-600"></Download>
                      <p className="text-green-600">{ap.downloads}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star
                        size={18}
                        className="text-orange-500 fill-orange-500"
                      ></Star>
                      <p className="text-orange-500">{ap.ratingAvg}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">{ap.size} MB</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      handleRemove(ap.id);
                      notify(ap.title);
                    }}
                    className="btn btn-primary "
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Installation;