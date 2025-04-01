import React, { useState } from "react";
import Arrow from "../assets/Icons/Arrow.svg";
import ProjectImage from "../assets/Project_image3.jpg";


function Home() {
  const [showForm, setShowForm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    contact: "",
    societyName: "",
    email: "",
    password: "",
  });
  const [contactError, setContactError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact") {
      if (!/^\d{0,10}$/.test(value)) {
        setContactError("Contact number must be exactly 10 digits");
        return;
      } else {
        setContactError("");
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle registration
  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.contact.length !== 10) {
      setContactError("Contact number must be exactly 10 digits");
      return;
    }
    if (!formData.role) {
      alert("Please select a role.");
      return;
    }

    setShowForm(false);
    setIsRegistered(true);

    // Hide success message after 3 seconds
    setTimeout(() => setIsRegistered(false), 3000);
  };

  return (
    <div id="home" className="h-[100vh] w-full flex flex-col items-center justify-center gap-7 relative bg-gradient-to-br from-gray-900 to-gray-700">
      <img
        src={ProjectImage}
        alt="society-living-img"
        className="w-full h-full object-cover absolute mix-blend-overlay shadow-2xl"
      />
      <div className="p-96 py-28">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-start items-start font-serif text-white">
            <span className="font-roboto font-bold text-[48px]">Smart Living,</span>
            <span className="font-roboto font-bold text-[48px]">Smarter Management</span>
          </div>
          <p className="text-gray-300 font-roboto text-[20px]">
            Experience the future of community living with our comprehensive society management solution.
          </p>
          <div className="flex flex-row">
            <button
              className="btn px-5 py-2 h-[52px] w-[182px] gap-3 bg-black text-white absolute m-4 rounded-md"
              onClick={() => setShowForm(true)} // Open Signup Form
            >
              <div className="text-[18px] font-roboto opacity-80">Get Started</div>
              <img src={Arrow} alt="Arrow Icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-white">
            <h2 className="text-2xl font-bold mb-4 text-gray-200">Register</h2>
            <form onSubmit={handleRegister} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded bg-gray-700 text-white"
              />

              {/* Role Dropdown with Placeholder */}
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border p-2 rounded bg-gray-700 text-gray-400"
              >
                <option value="" disabled selected>
                  Select Role
                </option>
                <option value="Admin" className="text-white">Admin</option>
                <option value="Treasurer" className="text-white">Treasurer</option>
                <option value="Member" className="text-white">Member</option>
              </select>

              {/* Contact Field with Validation */}
              <input
                type="text"
                name="contact"
                placeholder="Contact (10 digits)"
                required
                value={formData.contact}
                onChange={handleChange}
                className="border p-2 rounded bg-gray-700 text-white"
              />
              {contactError && <p className="text-red-400 text-sm">{contactError}</p>}

              <input
                type="text"
                name="societyName"
                placeholder="Society Name"
                required
                value={formData.societyName}
                onChange={handleChange}
                className="border p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="border p-2 rounded bg-gray-700 text-white"
              />

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
                >
                  Register
                </button>
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Registration Success Popup (Top of Screen) */}
      {isRegistered && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Registered Successfully!
        </div>
      )}
    </div>
  );
}

export default Home;
