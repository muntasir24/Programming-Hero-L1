import React, { useContext, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { AuthContext } from '../Contexts/AuthContext';

const Funding = () => {
    const axiosPublic = useAxios();
    const { user } = useContext(AuthContext);
    const [selectedAmount, setSelectedAmount] = useState("");

    const handleCheckout = async (e) => {
        e.preventDefault();
        const donate = e.target.donate.value || selectedAmount;
        if (!donate || donate <= 0) return alert("Please enter a valid amount");

        const donorEmail = user?.email;
        const donorName = user?.displayName;
        const formData = { donate, donorEmail,donorName};

        try {
            const res = await axiosPublic.post('/create-payment-checkout', formData);
            console.log(res);
            if (res.data.url) {
                window.location.href = res.data.url; // Redirect to Stripe
            }
        } catch (err) {
            console.error("Payment Error:", err);
        }
    };

    const quickAmounts = [10, 20, 50, 100];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 bg-white shadow-2xl rounded-3xl overflow-hidden">
                
                {/* Left Side: Information */}
                <div className="bg-red-600 p-10 text-white flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-6">Every Drop Counts ❤️</h1>
                    <p className="text-red-100 mb-8 leading-relaxed">
                        Your contribution helps us maintain our blood donation database, 
                        covers emergency transport for donors, and keeps our life-saving 
                        services 100% free for everyone in need.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-red-700/50 p-4 rounded-xl">
                            <span className="text-2xl">🏥</span>
                            <div>
                                <h4 className="font-bold">Medical Support</h4>
                                <p className="text-sm text-red-100">Funding hospital logistics</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-red-700/50 p-4 rounded-xl">
                            <span className="text-2xl">🩸</span>
                            <div>
                                <h4 className="font-bold">Free Testing</h4>
                                <p className="text-sm text-red-100">Screening blood for safety</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="p-10 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Support Our Cause</h2>
                    <p className="text-gray-500 mb-8">Choose an amount to donate</p>

                    <form onSubmit={handleCheckout} className="space-y-6">
                        {/* Quick Selection */}
                        <div className="grid grid-cols-2 gap-3">
                            {quickAmounts.map((amt) => (
                                <button
                                    key={amt}
                                    type="button"
                                    onClick={() => setSelectedAmount(amt)}
                                    className={`py-3 rounded-xl border-2 transition-all font-bold ${
                                        selectedAmount == amt 
                                        ? "border-red-600 bg-red-50 text-red-600" 
                                        : "border-gray-100 hover:border-red-200 text-gray-600"
                                    }`}
                                >
                                    ${amt}
                                </button>
                            ))}
                        </div>

                        {/* Custom Input */}
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                            <input
                                name="donate"
                                type="number"
                                value={selectedAmount}
                                onChange={(e) => setSelectedAmount(e.target.value)}
                                placeholder="Enter custom amount"
                                className="w-full pl-10 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-red-500 outline-none text-lg font-semibold"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className=" cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-200 transition-all transform active:scale-95"
                        >
                            Proceed to Checkout
                        </button>
                    </form>

                    <p className="text-center text-xs text-gray-400 mt-6">
                        Secured by <strong>Stripe</strong>. All donations are tax-deductible.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Funding;