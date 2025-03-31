import React from "react";
import { useNavigate } from "react-router-dom";


function AfterLogin() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full h-[1440px]">
      <img src={afterLoginImg} alt="After Login" className="w-1/2" />
      <button
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => navigate("/")}
      >
        Close
      </button>
    </div>
  );
}

export default AfterLogin;
