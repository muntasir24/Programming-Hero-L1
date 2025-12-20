import React, { useContext, useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import RecentListCard from "../Components/RecentListCard";
import SearchProduct from "../Components/SearchProduct";
import CategoryFilter from "../Components/CategoryFilter";
import Price from "../Components/Price";
import NoProductsFound from "../Errors/NoProductsFound";
import { AuthContext } from "../Contexts/AuthContext";
import Globalspinner from "../Spinner/Globalspinner";
import SearchByName from "../Components/SearchByName";
import SkeletonSearch from "../Spinner/SkeletonSearch";

const Pet_Supplies = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);
  const [totitems, setotitems] = useState([]);
  const [error, setError] = useState(null);
  const [name,setName]=useState("");
  const{category}=useContext(AuthContext);

  const [price,setPrice]=useState([0,0]);

  // console.log("price id", price); /listings/price-range
//  console.log( !!price[0], !!price[1]);
//  console.log(price[0],price[1]);
  useEffect(() => {
  const fetchListings = async () => {
    try {
      setLoading(true);
      let url = "/listings";
      if (category) {
        url += `?category=${category}`;
      }
      else if(!!price[0] || !!price[1]){
         url += `/price-range?min=${price[0]}&max=${price[1]}`;
      }
      else if(name){
        url+=`?name=${name}`
      }
      
      const res = await axiosInstance.get(url);
      setotitems(res.data);
      setError(""); // clear previous errors
    } catch (err) {
      console.error(err);
      setError("Failed to load listings");
    } finally {
      setLoading(false);
    }
  };

  fetchListings();
}, [category,axiosInstance,price,name]); // no need for axiosInstance if it is stable




  return (
    <div className="">
      <SearchProduct></SearchProduct>
        <SearchByName setName={setName}></SearchByName>
      <div className="flex py-5">
        <div className="right hidden md:flex flex-col  w-[40%] space-y-4 ">
          <p className="text-gray-500 text-xl opacity-80 font-semibold mb-3">
            Filter By
          </p>
          <CategoryFilter ></CategoryFilter>
          <Price setPrice={setPrice}></Price>
        </div>
      {
        loading  ? (<div className="w-[70%]">
          <SkeletonSearch></SkeletonSearch>
           </div>):(<div className={`grid ${totitems.length && "md:grid-cols-2 "}gap-3 md:w-[70%] `}>
          { totitems.length ? <>{totitems.map((data) => (
            <RecentListCard key={data._id} data={data}></RecentListCard>
          ))}</> : <NoProductsFound></NoProductsFound>}
        </div>) 
      }
      </div>
    </div>
  );
};

export default Pet_Supplies;
