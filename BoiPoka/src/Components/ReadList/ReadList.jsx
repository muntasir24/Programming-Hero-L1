import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {getReadBooks}  from '../LocalStorage/LocalStorage';
import Book from '../../Pages/Book/Book';
import { ChevronDown } from 'lucide-react';


const ReadList = () => {
    const data = useLoaderData();
    const [readBooks, SetReadBooks] = useState([]);
  const [sortType, setSortType] = useState('');  
  useEffect(() => {
    const readListArr = getReadBooks();
    const readListArrNum = readListArr.map(p => parseInt(p));
    const readBooksA = data.filter(d => readListArrNum.includes(d.bookId));
    SetReadBooks(readBooksA);
  }, []);

  const handleSort = (type) => {
    console.log(type);
    setSortType(type);
    if (type === 'page') {
      const sortArry = [...readBooks].sort((a, b) => a.totalPages - b.totalPages);
      SetReadBooks(sortArry);
        console.log(sortArry);
    }
    if (type === 'rating') {
    const sortArry = [...readBooks].sort((a, b) => a.rating - b.rating);
      SetReadBooks(sortArry);
      console.log(sortArry);
    }
}
  
    return (
      <div className="p-5">
        <div className="dropdown mb-5  flex justify-center ">
          <div
            tabIndex={0}
            role="button"
            className="btn text-lg px-7 py-3 bg-green-400 text-white font-semibold flex items-center gap-2"
          >
            Sort By {sortType ? sortType : <ChevronDown size={28} />}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm mt-2"
          >
            <li>
              <a onClick={() => handleSort("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("page")}>Page</a>
            </li>
          </ul>
        </div>

        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish Lsit</Tab>
          </TabList>
          <TabPanel>
            <h1>Total Read :{readBooks.length} </h1>
            <div className="grid lg:grid-cols-3 gap-5">
              {readBooks.map((r, i) => (
                <Book key={i} book={r}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h1> In my Wishlist: </h1>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default ReadList;