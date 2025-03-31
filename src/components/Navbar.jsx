import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import loginIcon from "../assets/Icons/loginarrow.svg";
import visitor from "../assets/Icons/visitor.svg";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [showPopup, setShowPopup] = useState(false); // Popup state

  // Handle login success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  // Function to scroll to footer
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrolltoHome = () => {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
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
           onClick={scrolltoHome}
            className="btn text-white hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg transition"
          >
            Home
          </button>

          <button 
            onClick={scrollToFooter} 
            className="btn text-white hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg transition"
          >
            About
          </button>

          <button 
            onClick={scrollToFooter} 
            className="btn text-white hover:bg-gray-100 hover:text-black px-4 py-2 rounded-lg transition"
          >
            Contact
          </button>

          {/* <Link to="/visitor" className="btn bg-white text-black text-md border-black hover:bg-slate-500 px-4 py-2 rounded-lg">
            <img src={visitor} alt="Visitor Icon" className="inline w-5 h-5" /> I am a Visitor
          </Link> */}

          {/* Login Button */}
          {!isLoggedIn ? (
            <button
              className="btn bg-black flex items-center gap-2 px-4 py-2 rounded-lg"
              onClick={() => setShowLogin(true)}
            >
              <img src={loginIcon} alt="Login" className="w-5 h-5" /> Login
            </button>
          ) : (
            <span className="text-green-400">✔ Logged In</span>
          )}
        </div>
      </div>

      {/* Show Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />}

      {/* ✅ Success Popup */}
      {showPopup && (
        <div className="fixed bottom-10 right-10 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          ✅ You have logged in successfully!
        </div>
      )}
    </div>
  );
}

export default Navbar;
