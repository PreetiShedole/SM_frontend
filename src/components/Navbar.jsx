import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import loginIcon from "../assets/Icons/loginarrow.svg";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Handle Login Success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Scroll to Footer
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll to Home
  const scrollToHome = () => {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-full container mx-auto">
      <div className="navbar fixed top-0 left-0 w-full h-[12%] bg-black bg-opacity-50 shadow-lg backdrop-blur-3xl text-white px-6 py-3 z-50 flex justify-between">
        
        {/* Left Section - Brand Name */}
        <div className="navbar-start">
          <Link to="/" className="btn cursor-pointer text-xl">SocioManager</Link>
        </div>

        {/* Right Section - Buttons */}
        <div className="navbar-end flex gap-4">
          <button 
            onClick={scrollToHome} 
            className="btn text-white hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg transition">
            Home
          </button>

          <button 
            onClick={scrollToFooter} 
            className="btn text-white hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg transition">
            About
          </button>

          <button 
            onClick={scrollToFooter} 
            className="btn text-white hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg transition">
            Contact
          </button>

          {/* Login / Logout Button */}
          {!isLoggedIn ? (
            <button
              className="btn bg-black flex items-center gap-2 px-4 py-2 rounded-lg"
              onClick={() => setShowLogin(true)}
            >
              <img src={loginIcon} alt="Login" className="w-5 h-5" /> Login
            </button>
          ) : (
            <button
              className="btn bg-red-600 text-white px-4 py-2 rounded-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Show Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default Navbar;
