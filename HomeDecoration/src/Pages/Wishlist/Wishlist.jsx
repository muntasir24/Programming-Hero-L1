import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("none");
  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem("wishlist"));
    setProducts(savedItems);
  }, []);

  const sortedItem = (() => {
    if (sortType === "sortASC") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortType === "sortDSC") {
      return [...products].sort((a, b) => b.price - a.price);
    } else return products;
  })();

  const handleRemove = (id) => {
    let savedItems = JSON.parse(localStorage.getItem("wishlist"));
    const updatedList = savedItems.filter((s) => s.id != id);
    //instant ui update
    setProducts(updatedList);
    console.log(Boolean(products));
    if (!updatedList.length) {
      localStorage.clear();
      console.log(Boolean(products));
      return;
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  if (!products || products.length === 0) {
    return <p>You Haven't added anything!!</p>;
  }

  const cat = {};

  products.forEach((p) =>(cat[p.category] = cat[p.category] ? (cat[p.category] += p.price): p.price));

  const chartData = Object.keys(cat).map((c) => (
    {
    category: c,
    total: cat[c],
    }
  ));

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center py-5 ">
        <h1 className="text-2xl font-semibold">
          Fetured Product{" "}
          <span className="text-sm text-gray-400">
            {" "}
            {sortedItem.length || 0} Products Found
          </span>{" "}
        </h1>
        <label className=" w-full max-w-xs">
          <select
            className="select  "
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="none">Sort By Price</option>
            <option value="sortASC">Low&gt;High</option>
            <option value="sortDSC">High&gt;Low</option>
          </select>
        </label>
      </div>
      {sortedItem.map((pr) => (
        <div key={pr.id} className="card card-side bg-base-100 shadow-sm">
          <figure className="">
            <img
              src={pr.image}
              alt="Movie"
              className="object-cover w-48 h-27"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{pr.name}</h2>
            <p className="text-base-content/70">{pr.category}</p>
          </div>
          <div className="flex justify-between items-center gap-3 mr-4">
            <p>Price: {pr.price}$</p>
            <button
              onClick={() => handleRemove(pr.id)}
              className="btn btn-primary"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {/* charttt */}

      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Wishlist Summery</h3>
        <div className="bg-base-100 border rounded-xl p-4 ">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
