import React from 'react';

const ShowCard = ({ fapps }) => {
    console.log(fapps);
    const { title, ratingAvg, downloads, image } = fapps;
    return (
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
                <h2 className="card-title">{ title}</h2>

          <div className="flex justify-between items-center">
            <div className="bg-gray-200 p-1 rounded-xl">jdj</div>
            <div className="bg-gray-200 p-1 rounded-xl">kd</div>
          </div>
        </div>
      </div>
    );
};

export default ShowCard;