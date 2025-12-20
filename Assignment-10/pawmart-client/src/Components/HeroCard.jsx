import React from 'react';

const HeroCard = ({hero}) => {
    // console.log(hero);
    return (
        <div>
            <div className="bg-white w-64 shadow-sm rounded-2xl p-4 hover:shadow-xl transition-all duration-300 mx-3">
      <img
        src={hero.image}
        alt={hero.name}
        className="w-full h-40 object-cover rounded-xl"
      />

      <h3 className="mt-3 text-lg font-bold text-gray-900">
        {hero.name}
      </h3>
      <p className="text-sm text-primary font-semibold">{hero.role}</p>

      <p className="text-sm text-gray-600 mt-2">
        {hero.story}
      </p>
    </div>
        </div>
    );
};

export default HeroCard;