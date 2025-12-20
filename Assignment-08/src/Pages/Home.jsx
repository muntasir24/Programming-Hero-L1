import React, { useState } from "react";
import HeroSection from "../Components/HeroSection";
import useAppData from "../Hooks/useAppData";
import ShowCard from "../Components/Showcard/ShowCard";
import { Link } from "react-router";
import GlobalSpinner from "../Spinner/GlobalSpinner";


const Home = () => {
  const { appData ,loading} = useAppData();
  const featureData = appData.slice(0, 8);

  if (loading) return <GlobalSpinner></GlobalSpinner>




  return (
    <div className="space-y-3">
      <HeroSection  ></HeroSection>
      <div className="text-center space-y-5">
        <h1 className="text-4xl font-bold">Trending App</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-5  ">
          {featureData.map((appdata) => (
            <ShowCard key={appdata.id} fapps={appdata}></ShowCard>
          ))}
        </div>
        <Link to={"/apps"}>
          {" "}
          <button className="btn btn-md btn-wide bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
