import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    // console.log(data);
    if (!Array.isArray(data)) {
      // Handle the case where data is not an array.
      // You could return null, show a loading state, an error message, etc.
      console.error("Data is not an array:", data);
      return null; // Or handle appropriately
    }
    return (
      <div >
        <h1 className='text-3xl font-semibold text-center p-4'>Books</h1>
        <Suspense fallback={<p>Loading books...</p>}>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
            {data.map((book) => (
              <Book book={book} key={book.bookId}></Book>
            ))}
          </div>
        </Suspense>
      </div>
    );
};

export default Books;