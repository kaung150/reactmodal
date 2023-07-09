import React from "react";

const MyModal = ({ visable, onClose }) => {
  if (!visable) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded ">
        <p>My Modal</p>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default MyModal;
