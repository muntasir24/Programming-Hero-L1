import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyBids = () => {
  const { user } = use(AuthContext);
const axiosSecure=useAxiosSecure();
  // console.log(user.accessToken);

  const [bids, setBids] = useState([]);
  // useEffect(() => {
  //   if (user?.email) {
  //     fetch(`https://smart-deals-api-server-m10.vercel.app/bids?email=${user.email}`,{
  //       headers:{
  //          authorization :`Bearer ${user.accessToken}`
  //       }
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setBids(data);
  //       });
  //   }
  // }, [user?.email,user.accessToken]);
//  useEffect(() => {
//     if (user?.email) {
//       fetch(`https://smart-deals-api-server-m10.vercel.app/bids?email=${user.email}`,{
//         headers:{
//            authorization :`Bearer ${localStorage.getItem('token')}`
//         }
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setBids(data);
//         });
//     }
//   }, [user?.email,user.accessToken]);

useEffect(()=>{
  axiosSecure.get(`/bids?email=${user.email}`)
  .then(data=>{
    setBids(data?.data);
    // console.log(dada);
  })
},[user,axiosSecure])

const handleDeleteBids=(id)=>{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://smart-deals-api-server-m10.vercel.app/bids/${id}`,{
        method :"DELETE",

    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);

       if(data.deletedCount){
         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

    const remainingBids=bids.filter(bid=> bid._id!=id);
    setBids(remainingBids);
       }

    })
    
  }
});
}

  return (
    <div>
      {bids.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Seller Information</th>
              <th>Status</th>
              <th>Bid Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid, i) => (
              <tr key={bid._id}> 
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{ bid.status=='pending' ? <div className="badge badge-warning">{bid.status}</div>: <div className="badge badge-success">{bid.status}</div> }</td>
                <td>{bid.bid_price}</td>
                <th>
                  <button onClick={()=>handleDeleteBids(bid._id)} className="btn btn-outline btn-xs">Remove Bids</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
