import React, { useState } from "react";

function Login({ onClose, onLoginSuccess }) {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [contactError, setContactError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact") {
      if (!/^\d{0,10}$/.test(value)) {
        setContactError("Contact number must be exactly 10 digits");
        return;
      } else {
        setContactError("");
      }
      setContact(value);
    } else {
      setPassword(value);
    }
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    if (contact.length !== 10) {
      setContactError("Contact number must be exactly 10 digits");
      return;
    }

    // Call the parent function to set login state
    onLoginSuccess();

    // Close the modal immediately
    onClose();
  };

  return (
    <>
      {/* ✅ Dark Theme Modal */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <input
              type="text"
              name="contact"
              placeholder="Contact (10 digits)"
              required
              value={contact}
              onChange={handleChange}
              className="border p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-gray-600"
            />
            {contactError && <p className="text-red-400 text-sm">{contactError}</p>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={handleChange}
              className="border p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-gray-600"
            />

            {/* ✅ Buttons */}
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
              >
                Login
              </button>
              <button
                type="button"
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
