import React from "react";
import { Download, SquarePen, Trash } from "lucide-react";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
const MylListCard = ({ list, setMylits,handleEdit }) => {
  const axiosInstance = useAxios();
 const axiosSecure=useAxiosSecure();
const item={
   image: list?.image,
   name:list?.name,
   description:list?.description,
   id:list?._id,
   date:list?.date,
   price:list?.price,
   location:list?.location,
  

}

  const handleDelete = () => {
    const id = list?._id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/listings/${id}`);
          console.log("Deleted successfully:", response.data);
          // Optionally update state after deletion
          setMylits((prev) => prev.filter((item) => item._id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (err) {
          console.error("Error deleting item:", err);
        }
      }
    });
  };

  return (
    
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={list?.image} alt="Avatar" />
            </div>
          </div>
          <div>
            <div className="font-bold">{list.name}</div>
            <div className="text-sm opacity-50">{list?.category}</div>
          </div>
        </div>
      </td>

      <td>{list?.description}</td>
      <th className="flex gap-5 text-primary">
        <button onClick={()=>handleEdit(item)} className="cursor-pointer ">
          <SquarePen></SquarePen>
        </button>
        <button onClick={handleDelete} className="cursor-pointer">
          <Trash></Trash>
        </button>
        {/* <button className="cursor-pointer"><Download></Download></button> */}
      </th>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      
     
    </tr>

    
  );
};

export default MylListCard;


