import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../Hooks/useAxios";
import { AuthContext } from "../Contexts/AuthContext";

const ListingDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  const orderModalRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axiosInstance.get(`/listings/${id}`);
        setItem(res.data);
        console.log(res.data);
        setTotal(res?.data?.price);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [axiosInstance, id]);

  if (loading) return <p>loading....</p>;


  // increase quantity
const handlePrice=(id)=>{
console.log(id);
if(id===2){
const price=total+item?.price;
setTotal(price)
setQuantity(quantity+1)
}
else{
    if(quantity-1>=0){
       const price=total-item?.price;
setTotal(price)
setQuantity(quantity-1) 
    }

 
}


}

  const handleOrderModalOpen = () => {
    // console.log(orderModalRef.current);
    orderModalRef.current.showModal();
  };
  const handleCloseModal=()=>{
    orderModalRef.current.close();
    // console.log(orderModalRef.current);
  }

const hadnleOrderSubmit=async(e)=>{
  e.preventDefault();
  const productName = e.target.productName?.value ||item?.name; 
  const buyerName=e.target.name.value;
  const email = e.target.email.value;
  const tot_quantity=quantity;
  const price=total;
  const address = e.target.address.value;
  const phone = e.target.phone.value;
  const date = e.target.date.value;
  const additionalNotes = e.target.additionalnotes.value;

  const newOrder={
   productName,
buyerName,
email,
quantity:tot_quantity,
price,
address,
phone,
date,
additionalNotes, 
  }
  console.log(newOrder);

 try{
  const res=await axiosInstance.post("/orders",newOrder);
  console.log(res.data);
  if(res.data.insertedId){
    handleCloseModal();
  }

 }
 catch(err){
  console.log(err);
 }

}





  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden  mt-10 p-6 ">
      <div className="flex flex-col md:flex-row gap-8">
        {/* IMAGE SECTION */}
        <div className="md:w-1/2 w-full">
          <img
            src={item?.image}
            alt={item?.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="md:w-1/2 w-full space-y-5 flex flex-col ">
          <div className="space-y-5  flex-1">
            <h1 className="text-4xl font-bold text-gray-800">{item?.name}</h1>

            {/* Category */}
            <p className="text-sm font-semibold text-primary">
              Category: <span className="text-gray-700">{item?.category}</span>
            </p>

            {/* Owner Email */}
            <p className="text-sm">
              <span className="font-semibold text-gray-700">Owner Email:</span>{" "}
              {item?.email}
            </p>

            {/* Divider */}
            <div className="-t my-3"></div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-lg">
              {item?.description}
            </p>

            {/* PRICE HANDLING */}
            {item?.price === 0 ? (
              <p className="text-2xl font-extrabold text-green-600">
                🐾 Free to Adopt
              </p>
            ) : (
              <p className="text-3xl font-bold text-primary">৳ {item?.price}</p>
            )}

            {/* Location */}
            <p className="text-sm mt-2">
              <span className="font-semibold text-gray-700">Location:</span>{" "}
              {item?.location}
            </p>
          </div>

          {/* ACTION BUTTON */}
          <div className="mt-6 flex flex-col justify-end  ">
            {item?.price === 0 ? (
              <button
                onClick={handleOrderModalOpen}
                className="btn btn-success w-full text-white text-xl rounded-lg py-3"
              >
                Adopt ❤️
              </button>
            ) : (
              <button
                onClick={handleOrderModalOpen}
                className="btn btn-primary w-full text-xl rounded-lg py-3"
              >
                Order Now 🛒
              </button>
            )}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog
              ref={orderModalRef}
              className="modal relative "
            >
               
              <div className="modal-box ">
                <p onClick={handleCloseModal} className=" absolute  cursor-pointer btn rounded-full btn-primary right-0 top-1">X</p>
         <div className="mt-5 max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-xl border  mb-12">
  <h1 className="text-4xl font-bold text-primary text-center mb-10">Order Information</h1>

  <form onSubmit={hadnleOrderSubmit} className="flex flex-col  gap-8">

    {/* Buyer Info */}
    <div className="flex-1 bg-gray-50 p-6 rounded-xl space-y-5 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Buyer Information</h2>
      
      <div>
        <label className="font-semibold text-gray-700">Name</label>
        <input
            name="name"
          type="text"
          value={user?.displayName}
          readOnly
          className="input input-bordered w-full bg-gray-100 cursor-not-allowed mt-1"
        />
      </div>

      <div>
        <label className="font-semibold text-gray-700">Email</label>
        <input
        name="email"
          type="email"
          value={user?.email}
          readOnly
          className="input input-bordered w-full bg-gray-100 cursor-not-allowed mt-1"
        />
      </div>

      <div>
        <label className="font-semibold text-gray-700">Phone Number</label>
        <input
        name="phone"
          type="text"
          className="input input-bordered w-full mt-1"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label className="font-semibold text-gray-700">Address</label>
        <textarea
        name="address"
          className="textarea textarea-bordered w-full mt-1"
          placeholder="Enter your full delivery address"
        ></textarea>
      </div>
    </div>

    {/* Product Info */}
    {item?.category==="Pets" ? "":(<div className="flex-1 bg-gray-50 p-6 rounded-xl space-y-5 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Product Information</h2>

      <div>
        <label className="font-semibold text-gray-700">Product Name</label>
        <input
        name='productName'
          type="text"
          value={item?.name}
          readOnly
          className="input input-bordered w-full bg-gray-100 cursor-not-allowed mt-1"
        />
      </div>

      
        <div className="space-y-4">
          {/* Quantity Selector */}
          <div>
            <label className="font-semibold text-gray-700">Quantity</label>
            <div className="flex items-center mt-2 gap-3">
              <button type="button" onClick={()=>handlePrice(1)} className="px-4 py-2 bg-gray-200 rounded-lg font-bold cursor-pointer">-</button>
              <span className="px-6 py-2 bg-white border rounded-lg font-semibold">{quantity}</span>
              <button type="button" onClick={()=>handlePrice(2)} className="px-4 py-2 bg-gray-200 rounded-lg font-bold cursor-pointer">+</button>
            </div>
          </div>

        <div className="flex gap-4">
          <div>
            <label className="font-semibold text-gray-700">Price</label>
            <input
              type="text"
              value={`৳ ${item?.price}`}
              readOnly
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed mt-1"
            />
          </div>

          {/* Total */}
          <div>
            <label className="font-semibold text-gray-700">Total Cost</label>
           <h2 className="text-primary font-bold text-xl text-center">{total}</h2>
          </div>
          </div>
        </div>
      
    </div>) }

    {/* Delivery Info */}
    <div className="flex-1 bg-gray-50 p-6 rounded-xl space-y-5 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>

      <div>
        <label className="font-semibold text-gray-700">Pick-up Date</label>
        <input name="date" type="date" className="input input-bordered w-full mt-1" />
      </div>

      <div>
        <label className="font-semibold text-gray-700">Additional Notes</label>
        <textarea
        name="additionalnotes"
          className="textarea textarea-bordered w-full mt-1"
          placeholder="Any extra instructions..."
        ></textarea>
      </div>

      <button className="btn btn-primary w-full text-lg mt-4">
       {item?.price===0 ? "Adopt now":"Order Now"}
      </button>
    </div>

  </form>
</div>



               
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
