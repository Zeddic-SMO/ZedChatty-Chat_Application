import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ children, setOpenModal }) => {
  return (
    <div className="fixed bg-slate-400 z-50 bg-opacity-60 flex justify-center items-center min-h-screen min-w-full">
      <div className="w-[320px] bg-white md:w-[450px] h-[500px] rounded-md shadow-md relative">
        <span
          className="absolute right-0 text-red-700"
          onClick={() => setOpenModal(false)}
        >
          <AiFillCloseCircle size="30px" />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
