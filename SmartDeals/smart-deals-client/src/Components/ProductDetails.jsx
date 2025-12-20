import React, { use, useEffect, useRef, useState } from "react";
import {  useLoaderData } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from 'sweetalert2'
import axios from "axios";
const ProductDetails = () => {
    const {user}=use(AuthContext);
  const {_id :productId} = useLoaderData();
   const bidModalRef=useRef(null);
   const [bids,setBids]=useState([]);
//  useEffect(()=>{
// fetch(`https://smart-deals-api-server-m10.vercel.app/products/bids/${productId}`,{
//   headers:{
//     authorization:`Bearer ${user.accessToken}`
//   }
// })
// .then(res=>res.json())
// .then(data=>{
//     console.log('bids for this product',data);
//     setBids(data);
// })
//  },[productId,user])

useEffect(()=>{

  axios.get(`https://smart-deals-api-server-m10.vercel.app/products/bids/${productId}`,{
    headers:{
    authorization:`Bearer ${user.accessToken}`
  }
  })
  .then(data=>{
    console.log(data);
    setBids(data.data)
  })

},[productId,user])

const handleBidModalOpen=()=>{
// console.log(bidModalRef.current);
bidModalRef.current.showModal()
}
const handleBidSubmit=e=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const bid=e.target.bid.value;
    console.log(name,email,bid);
    const newBid={
        product: productId,
        buyer_name :name,
        buyer_email:email,
        bid_price:Number(bid),
        status :'pending',
        buyer_image:user?.photoURL,
    }
// console.log(typeof Number(bid),bid);
    fetch('https://smart-deals-api-server-m10.vercel.app/bids',{
        method:"POST",
        headers :{
            'content-type':'application/json'
        },
        body: JSON.stringify(newBid)

    })
    .then(res=>res.json())
    .then(data=>{
        console.log('after bid order',data);
        if(data.insertedId){
            bidModalRef.current.close();
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your Bid has been placed",
  showConfirmButton: false,
  timer: 1500
});

newBid._id=data.insertedId;
const newBids=[...bids,newBid];
newBids.sort((a,b)=>b.bid_price-a.bid_price)
setBids(newBids);
        }
    })
}
console.log(user);
  return (
    <div>
      {/* product info */}
      <div>
        <div></div>
        <div>
          <button onClick={handleBidModalOpen} className="btn btn-primary">
            
            I want to buy this product
          </button>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
         
          <dialog
           ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Give the best offer!</h3>
              <p className="py-4">
               Offer Something Seller can not resist
              </p>
<form onSubmit={handleBidSubmit}>

    <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name="name" readOnly type="text" className="input" defaultValue={user?.displayName} />
        <label className="label">Email</label>
          <input name="email" readOnly type="email" className="input" defaultValue={user?.email} />
        
          <label className="label">Bid</label>
          <input name="bid" type="text" className="input" placeholder="Your Bid"/>
          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
</form>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      {/* bids for product  */}
       <div>
    <h3 className="text-3xl">Bids for this Products : <span className="text-primary">{bids.length}</span></h3>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
     SL No.
        </th>
        <th> Buyer Name</th>
        <th>Buyer Email</th>
        <th>Bid Price</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
     {
        bids.map((bid,i)=><tr key={bid._id}>
        <th>
         {i+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{bid.buyer_name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {bid.buyer_email}
        
        </td>
        <td>{bid.bid_price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
     }
     
      
    </tbody>
   
   
  </table>
</div>
       </div>

    </div>
  );
};

export default ProductDetails;
