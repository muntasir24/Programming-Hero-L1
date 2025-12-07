import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import RecentListCard from "./RecentListCard";
import { Link } from "react-router";
import Globalspinner from "../Spinner/Globalspinner";

const RecentListing = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);
  const [recentitems, setrecentitems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await axiosInstance.get("/latest-listings");
        setrecentitems(res.data);
      } catch (err) {
        setError("Failed to Load Listings");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [axiosInstance]);

  // console.log(loading, recentitems);
if(loading)return <Globalspinner></Globalspinner>
  return (
    <div className="mt-20">
      <h1 className="divider text-center font-bold text-2xl text-primary ">
        Recent List
      </h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentitems.map((list) => (
          <RecentListCard key={list._id} data={list}></RecentListCard>
        ))}
      </div>
     <div className="text-center"> <Link className="btn btn-primary mt-4 " to={'/petsSupplies'}>SHOW MORE</Link></div>
    </div>
  );
};

export default RecentListing;
