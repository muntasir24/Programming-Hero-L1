// RegisterSpinner.jsx
export default function RegisterSpinner() {
  return (
    <div className="flex justify-center  items-center  ">
        <p className="text-center text-black mr-3 "> Signing up...</p>
       
      <span className="w-10 h-10  border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></span>
    </div>
  );
}
