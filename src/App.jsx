import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Functionalities from "./components/Functionalities";
import data from "./components/Data";
import LatestUpdates from "./components/LatestUpdates";
import LatestUpdatesData from "./components/LatestUpdateData";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp"; // Corrected the import name
import AfterLogin from "./components/AfterLogin";

function App() {
  const [functionalities, setFunctionalities] = useState(data);
  const [latestUpdates, setLatestUpdates] = useState(LatestUpdatesData);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/after-login" element={<AfterLogin />} />
      </Routes>
      <Functionalities functionalities={functionalities} />
      <LatestUpdates latestUpdates={latestUpdates} />
      <Footer />
    </Router>
  );
}

export default App;
