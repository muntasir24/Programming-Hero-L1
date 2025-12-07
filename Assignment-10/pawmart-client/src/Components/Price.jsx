import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const Price = ({setPrice}) => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState([0, 2000]);

  



  return (
    <div className="w-full max-w-sm bg-gray-300 shadow rounded-xl ">
      
      {/* Collapse Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-lg cursor-pointer "
      >
        <span>Price Range</span>

        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Collapsible content */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-5 py-4 bg-white space-y-3">

          {/* Slider */}
          <Box sx={{ width: "100%" }}>
            <Slider
  value={value}
  onChange={(e, newValue) => setValue(newValue)}       // updates UI immediately
  onChangeCommitted={(e, newValue) => setPrice(newValue)} // updates parent / fetch
  min={0}
  max={2000}
  sx={{
    color: "#4e2d69",
    height: 9,
    "& .MuiSlider-thumb": {
      height: 25,
      width: 25,
      border: "6px solid white",
      backgroundColor: "#4e2d69",
    },
    "& .MuiSlider-track": { border: "none" },
    "& .MuiSlider-rail": { opacity: 0.3 },
  }}
/>
          </Box>

          {/* Price Values */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-gray-200 text-center font-semibold">
              ৳ {value[0]}
            </div>
            <div className="p-3 rounded-lg bg-gray-200 text-center font-semibold">
              ৳ {value[1]}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Price;
