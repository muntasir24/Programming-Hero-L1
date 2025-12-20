import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import {setReadBooks} from '../LocalStorage/LocalStorage';

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const bookId = parseInt(id);
    const singleBook = data.find(book => book.bookId === bookId);

    const {  bookName, author, category, image,  review, tags} =singleBook;
    
    return (
      <div className="flex gap-7 my-8 ">
        <div className=" w-[50%] border bg-gray-100 p-7 rounded-3xl flex justify-center items-center">
          <img src={image} alt="" className="w-[50%] " />
        </div>
        <div className="w-[50%]">
          <h1>{bookName}</h1>
          <p>By: {author}</p>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p>
            <span>Review :</span> {review}
          </p>
          <div>
            <span>Tag </span>
            <div className="flex gap-4">
              {tags.map((n, id) => {
                return (
                  <div key={id} className="">
                    <button className="p-1 px-2  bg-gray-100 rounded-2xl text-[#23BE0A] bg- my-4">
                      #{n}
                    </button>{" "}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="divider"></div>
          <button onClick={()=>setReadBooks(id)} className="btn btn-neutral btn-outline">Mark As Read</button>
          <button className="btn btn-active btn-info ml-5">Wishlist</button>
        </div>
      </div>
    );
};

export default BookDetails;