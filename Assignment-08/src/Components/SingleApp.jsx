import { Download, Star, ThumbsUp } from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";
import Button from './Button';
import styled from 'styled-components';
import { getInstalledApps, handleAdd } from '../Utils/LocalStorage';
import {  useState } from 'react';


const SingleApp = ({ myapp }) => {
  const { title, image, size, ratingAvg, reviews, downloads, companyName } = myapp || {};
  const [apps, setApps] = useState(() => getInstalledApps());

  const isInstalled = apps?.some(ap => ap.id === myapp.id) ||false;
 
 
  const notify = (title) => {
    const fakePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });

    toast.promise(
      fakePromise,
      {
        loading: `Installing ${title}`,
        success: <b>{ title} Installed successfully!</b>,
        error: <b>Installation failed!</b>,
      },
      {
        style: {
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
        },
      }
    );
  };


// console.log(apps);
    return (
      <div className=" md:flex gap-11 p-4 ">
        <div className=" flex justify-center items-center bg-amber-50 p-4 rounded-2xl">
          <img className=" w-60 rounded-2xl" src={image} alt="" />
        </div>
        <div className="flex-1 ">
          <h1 className="font-semibold text-2xl mb-2">{title}</h1>
          <p className="text-gray-500 font-semibold">
            Developed by{" "}
            <span className="bg-linear-to-r  from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>
          <div className="divider"></div>
          <div className="md:flex gap-8 text-center ">
            <div className="flex flex-col gap-2 justify-center items-center">
              <Download
                strokeWidth={3}
                color="#03A791"
                className="hover:scale-110 transition-transform duration-300"
              />

              <p className="text-sm text-gray-500">Downloads</p>
              <h1 className="text-3xl font-bold ">{downloads}</h1>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <Star fill="#FFC400" color="#FFC400"></Star>
              <p className="text-sm text-gray-500">Average Ratings</p>
              <h1 className="text-3xl font-bold ">{ratingAvg}</h1>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <ThumbsUp color="#59AC77" />
              <p className="text-sm text-gray-500">Total Reviews</p>
              <h1 className="text-3xl font-bold ">{reviews}</h1>
            </div>
          </div>

          <StyledWrapper className="flex md:block justify-center items-center ">
            <button
              onClick={() => {
                notify(title);
                setTimeout(() => {
                  handleAdd(myapp, setApps);
                }, 500);
                
                
              }
      
              }
              className={`${
                isInstalled
                  ? "btn btn-wide btn-primary mt-9 opacity-[130] pointer-events-none cursor-not-allowed"
                  : "btn-wide cursor-pointer mt-9 btn-primary hover:scale-120 transition-transform duration-300"
              }`}
            >
              <div className={`${isInstalled ? "" : "inner"}`}>
                <span className={`${isInstalled ? "" : "text"}`}>
                  {isInstalled ? "Installed": `Install Now (${size}MB)`}
                 
                </span>
              </div>
            </button>
          </StyledWrapper>
        </div>
      </div>
    );
};



const StyledWrapper = styled.div`
  .inner {
    position: relative;
    inset: 0px;
    padding: 1em;
    border-radius: 4px;
    background: #0abab5;
    overflow: hidden;
    transition: inherit;
  }

  .inner::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(-65deg, #0000 40%, #fff7 50%, #0000 70%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: thing 2s ease infinite;
  }

  @keyframes thing {
    0% {
      background-position: 130%;
      opacity: 1;
    }

    to {
      background-position: -166%;
      opacity: 0;
    }
  }

  .text {
    position: relative;
    z-index: 1;
    color: white;
    font-weight: 550;
    transition: inherit;
  }
`;

export default SingleApp;