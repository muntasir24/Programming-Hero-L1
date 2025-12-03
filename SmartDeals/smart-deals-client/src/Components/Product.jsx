import React from 'react';
import { Link } from 'react-router';

const Product = ({product}) => {
    const {title,price_min,price_max,_id}=product;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
  <figure className="px-4 pt-4">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p>Price:  {price_min} - {price_max}</p>
    <div className="card-actions">
      <Link to={`/productDetails/${_id}`} className="btn btn-primary w-full">View Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;