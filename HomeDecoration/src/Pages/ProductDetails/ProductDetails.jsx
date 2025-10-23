import React from 'react';
import { Link, useParams } from 'react-router';
import useProducts from '../../Hooks/useProducts';

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
    const { products, Loading } = useProducts();
    if (Loading) return <p> LOadingggggggggggggggg</p>;
    const product = products.find((p) => p.id === Number(id));
  if (!product) {
        return <p>ddd</p>
      }

    const handleWishlist = () => {
        let savedItems =JSON.parse( localStorage.getItem('wishlist')); 
        let arr = [];
        if (savedItems) {
            const isExists = savedItems.some(l => l.id === product.id);
            if (isExists) return alert("noooooooo");
            arr = [...savedItems, product];
        }
        else  arr.push(product); 
        localStorage.setItem('wishlist',JSON.stringify(arr));  
  }
    const { name, category, image, description,price } = product||{};
    return (
      <div className="card bg-base-100  shadow-sm">
        <figure className="h-72 overflow-hidden">
          <img className="w-full object-cover " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Description : {description}</p>
          <p>Category : {category}</p>
          <p> Price: {price} $</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleWishlist()}  className="btn btn-secondary">Add to Wishlist</button>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;