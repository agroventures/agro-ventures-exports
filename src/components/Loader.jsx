import React, { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    // How long the loader stays visible
    const startExit = setTimeout(() => {
      setClosing(true);
    }, 1200);
    return () => clearTimeout(startExit);
  }, []);

  useEffect(() => {
    if (!closing) return;
    // Must match the CSS slide-up duration
    const finish = setTimeout(() => {
      onComplete();
    }, 400);
    return () => clearTimeout(finish);
  }, [closing, onComplete]);
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white ${closing ? "loader-exit" : ""}`}
    >
      <div className="relative flex items-center justify-center">
    
        {/* Rotating ring */}
        <div className="absolute h-32 w-32 rounded-full border border-green-600/20">
          <div className="absolute inset-0 rounded-full border-t-2 border-green-600 animate-spin" />
        </div>

        {/* Logo */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <img
            src="/logo-2.png"
            alt="Loading"
            className="w-20 loader-logo"
          />
        </div>
        {/* Decorative dots */}
        <span className="absolute -top-4 right-2 h-2 w-2 rounded-full bg-green-600 loader-dot-1" />
        <span className="absolute bottom-0 -left-5 h-1.5 w-1.5 rounded-full bg-green-500 loader-dot-2" />
      </div>
    </div>
  );
};

export default Loader;
