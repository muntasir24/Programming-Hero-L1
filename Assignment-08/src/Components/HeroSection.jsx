import React from 'react';
import heroimg from "../assets/hero.png";
import appstore from "../assets/app-store.png";
import playstore from "../assets/playstore.png";
const HeroSection = () => {
    return (
      <>
        {/* Centered section */}
        <div className=" space-y-3">
          <p className="text-5xl font-bold text-center">
            We Build <br />{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {" "}
              Productive
            </span>{" "}
            Apps
          </p>
          <p className="text-center text-gray-400 leading-relaxed">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="text-center space-x-4">
          <button
            onClick={() => window.open("https://play.google.com/", "_blank")}
            className="btn btn-neutral btn-outline border-gray-300"
          >
            <img className="w-5" src={playstore} alt="" /> Google Play
          </button>
          <button
            onClick={() => window.open("https://apps.apple.com/", "_blank")}
            className="btn btn-neutral btn-outline border-gray-300"
          >
            <img className="w-5" src={appstore} alt="" />
            App Store
          </button>
        </div>
        {/* Full-width section */}
        <div
          className=""
          style={{
            width: "100vw",
            position: "relative",
            left: "50%",
            marginLeft: "-50vw",
          }}
        >
          <div className="flex justify-center items-center">
            <img src={heroimg} className="w-2xl" alt="" />
          </div>
          <div className="trusted-by py-10  text-center space-y-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <p className="text-3xl font-semibold max-w-7xl mx-auto">
              Trusted by Millions, Built for You
            </p>
            <div className="md:flex justify-around max-w-7xl mx-auto space-y-8 ">
              <div>
                <p className="textarea-sm  ">Total Downloads</p>
                <p className="text-4xl font-bold">29.6M</p>
                <p className="textarea-sm  ">21% more than last month</p>
              </div>
              <div>
                <p className="textarea-sm  ">Total Reviews</p>
                <p className="text-4xl font-bold">906K</p>
                <p className="textarea-sm  ">46% more than last month</p>
              </div>
              <div>
                <p className="textarea-sm  ">Active Apps</p>
                <p className="text-4xl font-bold">132+</p>
                <p className="textarea-sm ">31 more will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default HeroSection;