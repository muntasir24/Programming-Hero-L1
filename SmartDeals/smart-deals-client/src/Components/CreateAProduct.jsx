
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
// import useAxios from '../Hooks/useAxios';
import useAxiosSecure from '../Hooks/useAxiosSecure';


const CreateAProduct = () => {
  const {user}=useAuth();
// const axiosInstance=useAxios();
const axiosSecure=useAxiosSecure();

    const handleCreateAProduct=(e)=>{
e.preventDefault();
const title=e.target.title.value;
const image=e.target.image.value;
const price_min=e.target.price_min.value;
const price_max=e.target.price_max.value;
// console.log(title,image,price_min,price_max);
const newProduct={
    title,
    image,
    price_min,
    price_max,
    email:user.email,
    seller_name:user.displayName

};

// axios.post('https://smart-deals-api-server-m10.vercel.app/products',newProduct)
// .then(data=>{
// console.log(data.data);
// if(data.data.insertedId){
//        Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "Your Product has been created",
//       showConfirmButton: false,
//       timer: 1500
//     });
// }
// })

axiosSecure.post('/products',newProduct)
.then(data=>{
    console.log(data);
})

    }
    return (
        <div className='lg:w-1/2 mx-auto'>
            <form onSubmit={handleCreateAProduct}>

    <fieldset className="fieldset">
          <label className="label">title</label>
          <input name="title"  type="text" className="input"  />
        <label className="label">Image URL</label>
          <input name="image" type="text" className="input" />
        
          <label className="label">Min Price</label>
          <input name="price_min" type="text" className="input" placeholder="min price"/>
          <label className="label">Max Price</label>
          <input name="price_max" type="text" className="input" placeholder="max Bid"/>
          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
</form>
        </div>
    );
};

export default CreateAProduct;