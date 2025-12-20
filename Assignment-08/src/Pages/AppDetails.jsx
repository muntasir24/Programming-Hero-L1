import React from 'react';
import { useLocation } from 'react-router';
import useAppData from '../Hooks/useAppData';
import SingleApp from '../Components/SingleApp';
import GraphData from '../Components/GraphData';
import AppNotFound from '../Errors/AppNotFound';
import SingleAppSkeleton from '../Spinner/SingleAppSkeleton';

const AppDetails = () => {
  const location = useLocation();
  const appID = location?.state?.id;
  const { loading, appData } = useAppData();

  if (loading) return <SingleAppSkeleton></SingleAppSkeleton>
  const myapp = appData.find((a) => a.id === Number(appID));

  if (!myapp) return <AppNotFound></AppNotFound>

  return (
    <div>
      <SingleApp myapp={myapp}></SingleApp>
      <div className="divider"></div>
      <div className="space-y-3">
        <p className="font-semibold text-lg mb-4">Ratings</p>
        <div className="h-72">
          <GraphData myapp={myapp}></GraphData>
        </div>
      </div>
      

      <div className="divider"></div>
      <div className="space-y-3">
        <p className="font-semibold text-lg mb-4">Description</p>
              <p className=' text-gray-500'>{ myapp.description}</p>
          </div>
          

      </div>
  );
};

export default AppDetails;