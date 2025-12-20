import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import GlobalSpinner from "../../Spinner/GlobalSpinner";

const MyRequest = () => {
  const [myRequests, setMyRequests] = useState([]);
  const [totalRequest, setTotalRequest] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5); 
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState(""); // State for filtering
  const [loading, setLoading] = useState(true);
  
  const axiosPrivate = useAxiosSecure();

  useEffect(() => {
    const fetchReq = async () => {
      try {
        setLoading(true);
        // Added status to query params
        const res = await axiosPrivate.get(
          `/my-request?size=${itemsPerPage}&page=${currentPage - 1}&status=${statusFilter}`
        );
        setMyRequests(res.data.request);
        setTotalRequest(res.data.totalRequest);
      } catch (error) {
        console.error("Error fetching requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReq();
  }, [axiosPrivate, currentPage, itemsPerPage, statusFilter]);

  const numberOfPages = Math.ceil(totalRequest / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((n) => n + 1);

  if (loading) return <GlobalSpinner />;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        
        {/* Header & Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">My Donation Requests</h2>
          
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-600">Filter by Status:</span>
            <select 
              className="select select-bordered w-full max-w-xs"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1); // Reset to page 1 on filter change
              }}
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
              <option value="canceled">Canceled</option>
            </select>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full border">
            <thead className="bg-red-500 text-white">
              <tr>
                <th>Recipient Name</th>
                <th>Location</th>
                <th>Blood Group</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myRequests.length > 0 ? (
                myRequests.map((req) => (
                  <tr key={req._id}>
                    <td className="font-semibold">{req.recipientName}</td>
                    <td>{req.district}, {req.upazila}</td>
                    <td>
                      <span className="badge badge-error text-white font-bold">{req.bloodGroup}</span>
                    </td>
                    <td>
                      <div className="text-sm">{req.donationDate}</div>
                      <div className="text-xs text-gray-500">{req.donationTime}</div>
                    </td>
                    <td>
                      <span className={`capitalize px-3 py-1 rounded-full text-xs font-medium 
                        ${req.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
                          req.status === 'inprogress' ? 'bg-blue-100 text-blue-700' : 
                          req.status === 'done' ? 'bg-green-100 text-green-700' : 
                          'bg-red-100 text-red-700'}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="text-center">
                       <button className="btn btn-sm btn-outline btn-info mr-2">Edit</button>
                       <button className="btn btn-sm btn-outline btn-error">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-10 text-gray-500">No requests found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-8">
          <div className="join">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="join-item btn btn-outline"
              disabled={currentPage === 1}
            >
              «
            </button>
            
            {pages.map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`join-item btn btn-outline ${currentPage === page ? 'btn-active bg-red-500 text-white' : ''}`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, numberOfPages))}
              className="join-item btn btn-outline"
              disabled={currentPage === numberOfPages || numberOfPages === 0}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequest;