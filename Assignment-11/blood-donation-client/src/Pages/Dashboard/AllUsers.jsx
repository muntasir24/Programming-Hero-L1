import React, { useEffect, useState, useCallback, useContext } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import GlobalSpinner from '../../Spinner/GlobalSpinner';
import { 
  MoreVertical, 
  UserCheck, 
  UserMinus, 
  ShieldAlert, 
  ShieldCheck, 
  Filter,
  Mail,
  User as UserIcon
} from 'lucide-react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthContext';

const AllUsers = () => {
    const axiosPrivate = useAxiosSecure();
    const [users, setUsers] = useState([]);
    const {user:authUser}=useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState('all');

    // 1. Stabilize fetchUsers with useCallback
    const fetchUsers = useCallback(async () => {
        try {
            setLoading(true);
            const res = await axiosPrivate.get('/users');
            setUsers(res.data);
        } catch (err) {
            console.error("Error fetching users:", err);
        } finally {
            setLoading(false);
        }
    }, [axiosPrivate]);

    // 2. Safely trigger fetchUsers on mount
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    // 3. Handle Role and Status Updates
    const handleUpdate = async (email, updateData) => {
        try {
            const res = await axiosPrivate.patch('/update/user/role-status', { email, ...updateData });
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'User permissions updated.',
                    timer: 1500,
                    showConfirmButton: false
                });
                fetchUsers(); // Refresh the list after update
            }
        } catch (err) {
            console.error(err);
            Swal.fire('Error', 'Failed to update user', 'error');
        }
    };

    // 4. Client-side Filtering
    const filteredUsers = users.filter(user => {
        if (filterStatus === 'all') return true;
        return user.status === filterStatus;
    });

    if (loading) return <GlobalSpinner />;
console.log(authUser.email,users);
    return (
        <div className="animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-black text-gray-800 tracking-tight">User Management</h1>
                    <p className="text-gray-500 text-sm font-medium">Control user access and administrative roles</p>
                </div>

                {/* Filter Dropdown */}
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
                    <Filter size={18} className="text-gray-400" />
                    <select 
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="bg-transparent border-none focus:ring-0 text-sm font-bold text-gray-600 cursor-pointer outline-none"
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active Members</option>
                        <option value="blocked">Blocked Members</option>
                    </select>
                </div>
            </div>

            {/* User Table Card */}
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-red-50/50 border border-red-50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-separate border-spacing-0">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">Profile</th>
                                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">Contact</th>
                                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">Role</th>
                                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">Status</th>
                                <th className="px-6 py-5 text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredUsers.map((user) => (
                                <tr key={user._id} className="hover:bg-red-50/20 transition-all group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <img 
                                                    src={user.avatar} 
                                                    alt="" 
                                                    className="w-12 h-12 rounded-2xl object-cover ring-2 ring-gray-100 group-hover:ring-red-200 transition-all" 
                                                />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800 leading-none mb-1">{user.name}</p>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase">ID: {user._id.slice(-6)}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                                            <Mail size={14} className="text-red-400" />
                                            {user.email}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                                            user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 
                                            user.role === 'volunteer' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                                        }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className={`flex items-center gap-1.5 text-sm font-black ${user.status === 'active' ? 'text-green-600' : 'text-red-500'}`}>
                                            {user.status === 'active' ? <UserCheck size={16} /> : <UserMinus size={16} />}
                                            <span className="capitalize">{user.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        {/* DAISYUI DROPDOWN */}
                                        <div className="dropdown dropdown-left">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm text-gray-400 hover:text-red-600 transition-colors">
                                                <MoreVertical size={20} />
                                            </label>
                                            <ul tabIndex={0} className="dropdown-content z-[100] menu p-2 shadow-2xl bg-white rounded-2xl border border-gray-100 w-52">
                                                <li className="menu-title text-[10px] font-black text-gray-400 uppercase px-4 py-2">Quick Actions</li>
                                                {/* Check if the user in the row is NOT the currently logged-in admin */}
{user.email !== authUser?.email && (
    <li>
        {user.status === 'active' ? (
            <button 
                onClick={() => handleUpdate(user.email, { status: 'blocked' })} 
                className="text-red-600 font-bold hover:bg-red-50"
            >
                <ShieldAlert size={16} /> Block User
            </button>
        ) : (
            <button 
                onClick={() => handleUpdate(user.email, { status: 'active' })} 
                className="text-green-600 font-bold hover:bg-green-50"
            >
                <ShieldCheck size={16} /> Unblock User
            </button>
        )}
    </li>
)}
                                                {user.role !== 'volunteer' && (
                                                    <li>
                                                        <button onClick={() => handleUpdate(user.email, { role: 'volunteer' })} className="font-bold text-blue-600 hover:bg-blue-50">
                                                            <UserIcon size={16} /> Make Volunteer
                                                        </button>
                                                    </li>
                                                )}
                                                {user.role !== 'admin' && (
                                                    <li>
                                                        <button onClick={() => handleUpdate(user.email, { role: 'admin' })} className="font-bold text-purple-600 hover:bg-purple-50">
                                                            <ShieldCheck size={16} /> Make Admin
                                                        </button>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {filteredUsers.length === 0 && (
                    <div className="p-24 text-center">
                        <div className="inline-flex p-4 bg-gray-50 rounded-full mb-4">
                            <UserIcon size={40} className="text-gray-300" />
                        </div>
                        <p className="text-gray-500 font-black uppercase tracking-widest text-sm">No users found</p>
                        <p className="text-gray-400 text-xs">Try changing the status filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllUsers;