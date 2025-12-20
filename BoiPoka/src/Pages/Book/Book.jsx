import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    // console.log(book);
    return (
      <Link to={`/bookInfo/${book.bookId}`}>
        <div className="card bg-base-100 shadow-sm">
          <figure className="bg-gray-200 h-7/12">
            <div className="w-5/12 p-5">
              {" "}
              <img src={book.image} alt="Shoes" className="" />
            </div>
          </figure>
          <div className="card-body flex flex-col">
            <div className="flex justify-between">
              <h2 className="card-title">
                {book.bookName}
                <div className="badge badge-secondary h-fit  ">
                  {book.author}
                </div>
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              consequuntur temporibus! Ipsa itaque ullam aliquid. Aperiam
              quaerat, neque sapiente soluta cumque dolorem voluptate vel maxime
              nostrum veniam omnis perferendis dolorum.
            </p>

            <div className="card-actions justify-end">
              <div className="badge badge-outline">{book.category}</div>
              <div className="badge badge-outline">{book.rating}</div>
              <div className="badge badge-outline">{book.totalPages}</div>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default Book;