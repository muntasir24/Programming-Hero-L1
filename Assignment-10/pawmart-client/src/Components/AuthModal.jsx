// AuthModal.jsx
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const AuthModal = forwardRef((props, ref) => {
  const modalRef = useRef(null);
  const [tab, setTab] = useState("login");

  // Expose functions to parent
  useImperativeHandle(ref, () => ({
    open() {
      modalRef.current?.showModal();
    },
    close() {
      modalRef.current?.close();
    },
  }));

  return (
    <dialog ref={modalRef} className="modal  " style={{ zIndex: 50 }}>
      <div className="modal-box w-96">

        {/* Header tabs */}
        <div className="flex justify-center gap-10 mb-4">
          <button
            onClick={() => setTab("login")}
            className={`font-bold ${
              tab === "login" ? "text-green-600 cursor-pointer" : "text-gray-500 cursor-pointer"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setTab("register")}
            className={`font-bold ${
              tab === "register" ? "text-green-600 cursor-pointer" : "text-gray-500 cursor-pointer"
            }`}
          >
            Register
          </button>
        </div>

        {/* Content */}
        {tab === "login" && (
          <Login closeModal={()=>modalRef.current.close()}></Login>
        )}

        {tab === "register" && (
          <Register closeModal={() => modalRef.current.close()} />
        )}
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default AuthModal;
