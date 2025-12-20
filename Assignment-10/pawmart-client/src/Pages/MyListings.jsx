import React, { useContext, useEffect, useRef, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { AuthContext } from "../Contexts/AuthContext";
import MylListCard from "../Components/MylListCard";
import Empty from "../Components/Empty";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Globalspinner from "../Spinner/Globalspinner";

const MyListings = () => {
  const axiosInstance = useAxios();
  const axiosSecure=useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [mylists, setMylits] = useState([]);
  const modalref=useRef(null);
const { user } = useContext(AuthContext);
 const [pet, SetPet] = useState(false);
  const [price, setPrice] = useState("");
const [Item,setItem]=useState(null);
 const [showEmpty, setShowEmpty] = useState(false);


  useEffect(() => {
    const fetchlist = async () => {
      try {
        const mylisting = await axiosInstance.get(
          `/listings?email=${user?.email}`
        );
        console.log(mylisting.data);
        setMylits(mylisting.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchlist();
  }, [user, axiosInstance]);

  const handleEdit=(item)=>{
// console.log(item);
setItem(item);
setPrice(item?.price);
// console.log(modalref.current);
modalref.current.showModal();
  }

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
    const id=Item?.id;
   

try{
const res= await  axiosSecure.patch(`/listings/${id}`,listing);

if(res.data){
    modalref.current.close();
toast.success("List Updated Succesfully")
 setMylits((prev) =>
        prev.map((item) => (item._id === id ? { ...item, ...listing } : item))
      );

}
}
catch(err){
    console.log(err);
}

  };


  useEffect(() => {
    if (!mylists.length) {
      const timer = setTimeout(() => {
        setShowEmpty(true);
      }, 800); // show spinner for 500ms

      return () => clearTimeout(timer);
    } else {
      setShowEmpty(false); // reset if list is not empty
    }
  }, [mylists]);

  if ((!mylists.length && !showEmpty) || loading ) return <Globalspinner />;

  if (!mylists.length && showEmpty) return <Empty />;

  return (
    <div>
      <h1 className=" text-center p-5 text-4xl font-bold text-primary">
        Your Added Lists
      </h1>
     <div className="overflow-x-auto font-semibold text-2xl text-gray-600">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>

              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mylists.map((list) => (
              <MylListCard handleEdit={handleEdit} key={list._id} list={list} setMylits={setMylits}></MylListCard>
            ))}
          </tbody>
        </table>
      </div>

       <dialog ref={modalref} className="modal">
        <div className="modal-box">
<h1 className="text-center text-xl text-primary font-bold mb-3">Edit Listing</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="font-medium text-gray-700">
                  Product/Pet Name
                </label>
                <input
                defaultValue={Item?.name}
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
                  defaultValue={Item?.category}
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
                  defaultValue={price}
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
                  defaultValue={Item?.location}
                  placeholder="Enter location"
                  required
                  className="mt-1 w-full border rounded-xl p-3"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="font-medium text-gray-700">Image URL</label>
                <input
                defaultValue={Item?.image}
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
                  defaultValue={Item?.date}
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
                  defaultValue={user?.email}
                  readOnly
                  className="mt-1 w-full border rounded-xl p-3 bg-gray-100"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="font-medium text-gray-700">Description</label>
              <textarea
              defaultValue={Item?.description}
                name="description"
                placeholder="Write details..."
                rows="4"
                required
                className="mt-1 w-full border rounded-xl p-3"
              ></textarea>
            </div>

            <button type="submit" className="w-full btn-primary btn rounded-xl">
            Update Listing
            </button>
          </form>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyListings;
