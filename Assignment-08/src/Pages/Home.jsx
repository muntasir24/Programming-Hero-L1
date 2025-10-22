import React from "react";
import HeroSection from "../Components/HeroSection";
import useAppData from "../Hooks/useAppData";
import ShowCard from "../Components/ShowCard";

const Home = () => {
  const { loading, appData } = useAppData();
  const featureData = appData.slice(0, 8);
  // console.log(featureData);

  return (
    <div className="space-y-3">
      <HeroSection></HeroSection>
      <div className="text-center space-y-5">
        <h1 className="text-4xl font-bold">Trending App</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-3">
          {featureData.map((appdata) => (
            <ShowCard key={appdata.id} fapps={appdata}></ShowCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
