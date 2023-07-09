import React from "react";

const MyModal = ({ visable, onClose }) => {
  const handleClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };

  if (!visable) return null;
  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onClick={(e) => handleClose(e)}
    >
      <div className="bg-white p-2 rounded ">
        <div className="flex justify-between items-center">
          <p>Login</p>
          <button
            onClick={onClose}
            className="border px-2 hover:bg-red-500 hover:text-white"
          >
            X
          </button>
        </div>

        <input
          type="text"
          className="border block mt-5 px-2 outline-none"
          placeholder="Enter Your Name "
        />

        <input
          type="email"
          className="border block mt-2 px-2 outline-none"
          placeholder="Enter Your Email "
        />

        <button className="bg-red-400 px-2 text-sm py-1 w-full mt-2 text-white hover:bg-red-500">
          Login
        </button>
      </div>
    </div>
  );
};

export default MyModal;
