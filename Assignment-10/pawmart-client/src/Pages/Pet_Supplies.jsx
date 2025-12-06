import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import RecentListCard from "../Components/RecentListCard";
import Search from "../Components/Search";

const Pet_Supplies = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);
  const [totitems, setotitems] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await axiosInstance.get("/listings");
        setotitems(res.data);
      } catch (err) {
        setError("Failed to Load Listings");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchList();
  }, [axiosInstance]);
  return (
    <div>
  <Search></Search>


      <div className="flex">
           <div className="right border-2  w-1/2">

           </div>
        <div className="grid md:grid-cols-2 gap-3 ">
        {totitems.map((data) => (
          <RecentListCard key={data._id} data={data}></RecentListCard>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Pet_Supplies;
