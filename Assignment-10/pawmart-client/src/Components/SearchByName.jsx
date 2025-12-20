import React, { useEffect, useState } from 'react';

const SearchByName = ({setName}) => {
      const [input, setInput] = useState("");


useEffect(() => {
  
  const timer = setTimeout(() => {
    setName(input);
    
  }, 500);

  return () => clearTimeout(timer);
}, [input, setName]);

    return (
        <div className='text-center py-5 '>
            <label className="input w-1/2 rounded-2xl outline-0 hover:outline-primary border-primary border-2 h-14">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
  <input  onChange={(e) => setInput(e.target.value)} type="search" required placeholder="Search" />
</label>
        </div>
    );
};

export default SearchByName;