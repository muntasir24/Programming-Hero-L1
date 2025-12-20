import React from "react";
import CategoryCard from "./CategoryCard";
import { Typewriter } from "react-simple-typewriter";

const Category = () => {
  return (
    <div className="mt-15 ">
      <h1 className="text-4xl font-bold text-center mb-5">
        PET STORE
        <span className="text-primary">
          <Typewriter
            words={[" IN BANGLADESH  "]}
            loop={true}
             typeSpeed={80}
  deleteSpeed={50}
  delaySpeed={1000}
  cursor={true}
  cursorStyle="|"
            //  typeSpeed={20}
          />
        </span>
      </h1>
      <h3 className="text-center text-gray-600 font-bold mb-5">
        Nourishing Joy with Quality Pet food, Cat food & Dog Food, Cat Litter,
        and Pet accessories
      </h3>

      <CategoryCard></CategoryCard>
    </div>
  );
};

export default Category;
