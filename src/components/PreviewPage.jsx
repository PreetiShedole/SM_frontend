import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PreviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const imageSrc = location.state?.image;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-700 text-white px-4 py-2 rounded-lg mb-4"
      >
        🔙 Go Back
      </button>

      {imageSrc ? (
        <img src={imageSrc} alt="Preview" className="w-[80%] h-auto rounded-lg shadow-xl" />
      ) : (
        <p className="text-white">No Image Available</p>
      )}
    </div>
  );
}

export default PreviewPage;
