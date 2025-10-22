import React from 'react';
import { useLocation } from 'react-router';
import useAppData from '../Hooks/useAppData';
import SingleApp from '../Components/SingleApp';

const AppDetails = () => {
  const location = useLocation();
  const appID = location?.state?.id;
  const { loading, appData } = useAppData();

  if (loading) return <p>laoding appppp</p>;
  const myapp = appData.find((a) => a.id === Number(appID));

  

  return (
    <div>
          <SingleApp myapp={myapp}></SingleApp>
          <div className='divider'></div>

    </div>
  );
};

export default AppDetails;