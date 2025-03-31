import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    contact: "",
    societyName: "",
    email: "",
    password: "",
  });
  const [contactError, setContactError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact") {
      if (!/^[0-9]{0,10}$/.test(value)) {
        setContactError("Contact number must be exactly 10 digits");
        return;
      } else {
        setContactError("");
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

    setTimeout(() => setIsRegistered(false), 3000);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      {showForm && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
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

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border p-2 rounded bg-gray-700 text-gray-400"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Admin" className="text-white">Admin</option>
              <option value="Treasurer" className="text-white">Treasurer</option>
              <option value="Member" className="text-white">Member</option>
            </select>

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
      )}

      {isRegistered && (
        <div className="fixed top-96 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Registered Successfully!
        </div>
      )}
    </div>
  );
}

export default SignUp;
