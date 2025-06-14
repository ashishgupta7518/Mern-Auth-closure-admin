import React from "react";
import { useNavigate } from "react-router-dom";

const Success = ({ message = "Your Account Closed Successfully !" }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/"); // redirect to homepage or dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg text-center w-[35%] h-[40%]">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.707-4.707a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Success!</h2>
        <p className="text-white mb-6">{message}</p>
        <button
          onClick={handleContinue}
          className="bg-blue-600 hover:bg-white text-white font-medium px-6 py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Success;
