import React, { useContext, useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { AuthContext } from "../Contexts/AuthContext";

import OrderCard from "../Components/OrderCard";
import Empty from "../Components/Empty";
import Globalspinner from "../Spinner/Globalspinner";

const MyOrders = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(false);
  const [myorders, serMyorders] = useState([]);
  const { user } = useContext(AuthContext);
  const [showEmpty, setShowEmpty] = useState(false);

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const mylisting = await axiosInstance.get(
          `/orders?email=${user?.email}`
        );
        // console.log(mylisting.data);
        serMyorders(mylisting.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchlist();
  }, [user, axiosInstance]);
useEffect(() => {
    if (!myorders.length) {
      const timer = setTimeout(() => {
        setShowEmpty(true);
      }, 850); // show spinner for 500ms

      return () => clearTimeout(timer);
    } else {
      setShowEmpty(false); // reset if list is not empty
    }
  }, [myorders]);

  if ((!myorders.length && !showEmpty) || loading ) return <Globalspinner />;

  if (!myorders.length && showEmpty) return <Empty />;
  return (
    <div>
      <h1 className=" text-center p-5 text-4xl font-bold text-primary">
        Your Orders
      </h1>

    {
     <div className="overflow-x-auto font-semibold text-lg text-gray-600">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th >Buyer Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Date</th>
              <th>Phone</th>
              <th>Download Report </th>
            </tr>
          </thead>
          <tbody>
            {myorders.map((list) => (
              <OrderCard key={list._id} list={list}></OrderCard>
            ))}
          </tbody>
        </table>
      </div>
    }
    </div>
  );
};

export default MyOrders;
