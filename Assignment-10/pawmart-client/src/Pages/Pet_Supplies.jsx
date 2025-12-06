import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';

const Pet_Supplies = () => {
     const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);
  const [totitems, setotitems] = useState([]);
  const [error, setError] = useState(null);
      useEffect(()=>{
        
      })
    return (
        <div  >
            
        </div>
    );
};

export default Pet_Supplies;