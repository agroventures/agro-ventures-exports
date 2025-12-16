import React, { useEffect } from "react";
import logo from "/logo.png";

const Loader = () => {
      
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-25 h-25 flex items-center justify-center rounded-full border-2 border-green-600 animate-pulse">
      <img
        src={logo}
        alt="Loading..."
        className="w-23 animate-pulse"
      />
      </div>
    </div>
  );
};

export default Loader;