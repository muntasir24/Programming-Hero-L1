import React, { useContext, useState } from "react";
import adopt from "../assets/adopt_dont_shop.png";
import { AuthContext } from "../Contexts/AuthContext";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";

const AddListing = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const [pet, SetPet] = useState(false);
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const listing = {
      name: form.name.value,
      category: form.category.value,
      price: form.category.value === "Pets" ? 0 : Number(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,

      email: form.email.value,
      date: form.date.value,
    };

    try {
      const res = await axiosInstance.post("/lsitings", listing);
    //   console.log(res);
      if (res.data.insertedId) {
        toast.success(" New List Added");
        e.target.reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex gap-2 p-2">
      <div className="  md:w-1/2">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Add New Listing</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="font-medium text-gray-700">
                  Product/Pet Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  required
                  className="mt-1 w-full border rounded-xl p-3"
                />
              </div>

              {/* Category */}
              <div>
                <label className="font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  required
                  className="mt-1 w-full border rounded-xl p-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "Pets") {
                      SetPet(true);
                      setPrice(0); // clear old value & set 0
                    } else {
                      SetPet(false);
                      setPrice(""); // clear price for other categories
                    }
                  }}
                >
                  <option value="">Select a Category</option>
                  <option value="Pets">Pets</option>
                  <option value="Food">Food</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Care Products">Care Products</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="font-medium text-gray-700">Price</label>
                <input
                  required
                  name="price"
                  type="number"
                  value={price}
                  readOnly={pet}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder={pet ? "Free to Adopt" : "Enter Price"}
                  className="mt-1 w-full border rounded-xl p-3"
                />
              </div>

              {/* Location */}
              <div>
                <label className="font-medium text-gray-700">Location</label>
                <input
                  name="location"
                  type="text"
                  placeholder="Enter location"
                  required
                  className="mt-1 w-full border rounded-xl p-3"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="font-medium text-gray-700">Image URL</label>
                <input
                  name="image"
                  type="text"
                  placeholder="https://example.com/pic.jpg"
                  required
                  className="mt-1 w-full border rounded-xl p-3"
                />
              </div>

              {/* Date */}
              <div>
                <label className="font-medium text-gray-700">Pickup Date</label>
                <input
                  name="date"
                  type="date"
                  required
                  className="mt-1 w-full border rounded-xl p-3"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-medium text-gray-700">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  value={user?.email}
                  readOnly
                  className="mt-1 w-full border rounded-xl p-3 bg-gray-100"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                placeholder="Write details..."
                rows="4"
                required
                className="mt-1 w-full border rounded-xl p-3"
              ></textarea>
            </div>

            <button type="submit" className="w-full btn-primary btn rounded-xl">
              Add Listing
            </button>
          </form>
        </div>
      </div>

      <div className=" hidden md:flex   justify-center items-center  md:w-1/2">
        <img src={adopt} alt="" />
      </div>
    </div>
  );
};

export default AddListing;
