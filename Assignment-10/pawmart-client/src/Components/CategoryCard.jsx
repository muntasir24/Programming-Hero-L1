import React from "react";
import pets from "../assets/pets.jpg";
import petfood from "../assets/petFood.jpg";
import petsAccs from "../assets/petacces.jpg";
import petcare from "../assets/petcare.webp";
import { PawPrint } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router";

const categories = [
  {
    id: 1,
    title: "Pets",
    img: pets,
    description: "Adopt dogs, cats, birds, rabbits and more lovable pets.",
  },
  {
    id: 2,
    title: "Pet Foods",
    img: petfood,
    description:
      "Premium nutrition for your pets — dry food, wet food, treats.",
  },
  {
    id: 3,
    title: "Accessories",
    img: petsAccs,
    description: "Collars, cages, toys, leashes, feeders & grooming tools.",
  },
  {
    id: 4,
    title: "Pet Care Products",
    img: petcare,
    description:
      "Shampoos, medicines, hygiene items & overall pet health care.",
  },
];
// console.log();
const CategoryCard = () => {
  const {setCategory}=useContext(AuthContext);
  const navigate=useNavigate();
  return (
    <div className="grid lg:grid-cols-2 gap-3 ">
      <div className="flex ">
        <div className=" ">
          <div className="card h-full bg-base-100 image-full shadow-sm overflow-hidden group">
            <figure className="overflow-hidden">
              <img
                className="w-full  object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                src={pets}
                alt="category"
              />
            </figure>

            <div className="card-body relative z-9">
              <p className="text-5xl font-bold text-secondary">
                {categories[0].title}
              </p>
              <p className="text-2xl font-bold">{categories[0].description}</p>
              <div className="card-actions justify-end">
                <Link  onClick={() => setCategory("Pets")} to={"/petsSupplies"} className="btn btn-primary">
                  {categories[0].title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:grid-cols-2 grid gap-3 ">
        <div className="card-1 ">
          <div>
            <div className="card bg-base-100 image-full shadow-sm overflow-hidden group">
              <figure className="overflow-hidden">
                <img
                  className="w-full h-60 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  src={petfood}
                  alt="category"
                />
              </figure>

              <div className="card-body relative z-9">
                <p className="text-2xl font-bold text-secondary">
                  {categories[1].title}
                </p>
                <p className="text-xl font-bold">{categories[1].description}</p>
                <div className="card-actions justify-end">
                  <Link onClick={() => setCategory("Pet Food")} to={"/petsSupplies"}  className="btn btn-primary">
                    {categories[1].title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-2 ">
          <div>
            <div className="card bg-base-100 image-full shadow-sm overflow-hidden group">
              <figure className="overflow-hidden">
                <img
                  className="w-full h-60 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  src={petsAccs}
                  alt="category"
                />
              </figure>

              <div className="card-body relative z-9">
                <p className="text-2xl font-bold text-secondary">
                  {categories[2].title}
                </p>
                <p className="text-xl font-bold">{categories[2].description}</p>
                <div className="card-actions justify-end">
                  <Link onClick={() => setCategory(categories[2].title)} to={"/petsSupplies"} className="btn btn-primary">
                    {categories[2].title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-3 ">
         <div>
            <div className="card bg-base-100 image-full shadow-sm overflow-hidden group">
              <figure className="overflow-hidden">
                <img
                  className="w-full h-60 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  src={petcare}
                  alt="category"
                />
              </figure>

              <div className="card-body relative z-9">
                <p className="text-2xl font-bold text-secondary">
                  {categories[3].title}
                </p>
                <p className="text-xl font-bold">{categories[3].description}</p>
                <div className="card-actions justify-end">
                  <Link onClick={() => setCategory(categories[3].title)} to={"/petsSupplies"} className="btn btn-primary">
                    {categories[3].title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden card-4 opacity-50 md:flex justify-center items-center text-secondary">
            <PawPrint size={180} ></PawPrint>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
