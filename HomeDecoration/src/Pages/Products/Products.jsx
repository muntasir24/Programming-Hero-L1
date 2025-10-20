import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../../Components/productcard/ProductCard';

const Products = () => {
  const { Loading,  products: data } = useProducts();
  const [search, setSearch] = useState('');

  const refined = search.trim('').toLowerCase();
  const searched = refined ? data.filter((d) =>
    d.name.trim().toLowerCase().includes(refined)
  ) : data;

    return (
      <div>
        <div className="flex justify-between items-center py-5">
          <h1 className="text-2xl font-semibold">Fetured Product <span className='text-sm text-gray-400'> {searched.length } Products Found</span> </h1>
          

          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input value={search} type="search" required placeholder="Search" onChange={e=>setSearch(e.target.value)} />
          </label>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {searched.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    );
};

export default Products;