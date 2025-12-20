import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const CategoryFilter = () => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null); // track currently selected
const {setCategory}=useContext(AuthContext);
  const handleCategoryFilter = (e, id) => {
    if (e.target.checked) {
      // select this category
      setSelectedId(id);

      // set query based on id
      let query = "";
      switch (id) {
        case 1:
          query = "Pets";
          break;
        case 2:
          query = "Pet Food";
          break;
        case 3:
          query = "Accessories";
          break;
        case 4:
          query = "Pet Care Products";
          break;
        default:
          query = "";
      }
      setCategory(query);
    } else {
      // uncheck: clear selection
      setSelectedId(null);
      setCategory("");
    }
  };

  const categories = [
    { id: 1, label: "🐶 Pets (Adoption)" },
    { id: 2, label: "🍖 Pet Food" },
    { id: 3, label: "🧸 Accessories" },
    { id: 4, label: "💊 Pet Care Products" },
  ];

  return (
    <div className="w-full max-w-sm bg-gray-300 shadow rounded-xl">
      {/* Collapse Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-lg cursor-pointer"
      >
        <span>Category</span>
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

      {/* Collapsible Content */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-5 py-2 bg-gray-200 pb-4 space-y-3">
          {categories.map((cat) => (
            <label key={cat.id} className="flex gap-3 items-center cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={selectedId === cat.id} // only this one is checked
                onChange={(e) => handleCategoryFilter(e, cat.id)}
              />
              <span className="font-medium">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
